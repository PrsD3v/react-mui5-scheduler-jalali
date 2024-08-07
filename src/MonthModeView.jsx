import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import {format, getDay} from 'date-fns'
import {useTheme, styled, alpha} from '@mui/material/styles'
import {
  Paper, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, tableCellClasses, Box
} from "@mui/material"
import { getDaysInMonth, isSameMonth } from 'date-fns'
import { getDaysInMonth as jalaliGetDaysInMonth, isSameMonth as jalaliIsSameMonth, format as jalaliFormat } from 'date-fns-jalali'
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded'
import EventItem from "./EventItem.jsx"
import {useTranslation} from "react-i18next"

const StyledTableCell = styled(TableCell)(({ theme, eynakology }) => ({
  background: eynakology ? '#F6F6F7' : '#fff',
  [`&.${tableCellClasses.head}`]: eynakology ? {} : {
    borderTop: `1px ${theme.palette.divider} solid !important`,
    borderBottom: `1px ${theme.palette.divider} solid !important`,
    borderLeft: `1px ${theme.palette.divider} solid !important`,
    ['&:nth-of-type(1)']: {
      borderLeft: `0px !important`
    }
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    height: 96,
    width: 64,
    maxWidth: 64,
    cursor: 'pointer',
    verticalAlign: "top",
    borderLeft: `1px ${theme.palette.divider} solid`,
    ['&:nth-of-type(7n+1)']: {
      borderLeft: eynakology ? `1px ${theme.palette.divider} solid` : 0
    },
    ['&:last-child']: {
      borderRight: eynakology ? `1px ${theme.palette.divider} solid` : 0
    },
    ['&:nth-of-type(even)']: {
      //backgroundColor: theme.palette.action.hover
    },
  },
  [`&.${tableCellClasses.body}:hover`]: {
    //backgroundColor: "#eee"
  }
}))

const StyledTableRow = styled(TableRow)(({ theme, eynakology }) => ({
  ['&:last-child td, &:last-child th']: {
    borderBottom: eynakology ? `1px ${theme.palette.divider} solid !important` : 0
  }
}))

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  ['&::-webkit-scrollbar']: {
    width: 7,
    height: 6
  },
  ['&::-webkit-scrollbar-track']: {
    WebkitBoxShadow: "inset 0 0 6px rgb(125, 161, 196, 0.5)"
  },
  ['&::-webkit-scrollbar-thumb']: {
    WebkitBorderRadius: 4,
    borderRadius: 4,
    background: "rgba(0, 172, 193, .5)",
    WebkitBoxShadow: "inset 0 0 6px rgba(25, 118, 210, .5)"
  },
  ['&::-webkit-scrollbar-thumb:window-inactive']: {
    background: "rgba(125, 161, 196, 0.5)"
  }
}))

function MonthModeView (props) {
  const {
    rows,
    locale,
    options, 
    columns,
    legacyStyle,
    searchResult, 
    onTaskClick, 
    onCellClick, 
    onEventsChange
  } = props
  const theme = useTheme()
  const [state, setState] = useState({})
  const { t } = useTranslation(['common'])
  const today = new Date()
  let currentDaySx = {
    width: 24,
    height: 22,
    margin: 'auto',
    display: 'block',
    paddingTop: '2px',
    borderRadius: '50%',
    //padding: '1px 7px',
    //width: 'fit-content'
  }
  const onCellDragOver = (e) => {
    e.preventDefault()
  }

  const onCellDragStart = (e, item, rowIndex) => {
    setState({
      ...state,
      itemTransfert: { item, rowIndex }
    })
  }

  const onCellDragEnter = (e, elementId, rowIndex) => {
    e.preventDefault()
    setState({
      ...state,
      transfertTarget: { elementId, rowIndex }
    })
  }

  const onCellDragEnd = (e) => {
    if (!options?.draggable) {
      return
    }
    e.preventDefault()
    if (!state.itemTransfert && !state.transfertTarget) return
    let transfert = state.itemTransfert
    let transfertTarget = state.transfertTarget
    let rowsCopy = Array.from(rows)
    let rowInd = rowsCopy.findIndex(d => d.id === transfertTarget.rowIndex)
    
    if (rowInd !== -1) {
      let dayInd = rowsCopy[rowInd]
        ?.days
        ?.findIndex(d => d.id === transfertTarget.elementId)
      if (dayInd !== -1) {
        let day = rowsCopy[rowInd]?.days[dayInd]
        let splittedDate = transfert?.item?.date?.split('-')
        if (!transfert?.item?.day) {
          // Get day of the date (DD)
          transfert.item.day = parseInt(splittedDate[2])
        }
        if (transfert.item.day !== day?.day) {
          let itemCheck = day.data.findIndex(item => (
            item.day === transfert.item.day && item.label === transfert.item.label
          ))
          if (itemCheck === -1) {
            let prevDayEvents = rowsCopy[transfert.rowIndex]
              .days
              .find(d => d.day === transfert.item.day)
            let itemIndexToRemove = prevDayEvents
              ?.data
              ?.findIndex(i => i.id === transfert.item.id)
            if (itemIndexToRemove === undefined || itemIndexToRemove === -1) {
              return
            }
            prevDayEvents?.data?.splice(itemIndexToRemove, 1)
            transfert.item.day = day?.day
            transfert.item.date = options?.adapter === 'jalali' ? jalaliFormat(day?.date, 'yyyy-MM-dd') : format(day?.date, 'yyyy-MM-dd')
            day.data.push(transfert.item)
            setState({
              ...state,
              rows: rowsCopy,
              itemTransfert: null,
              transfertTarget: null
            })
            onEventsChange && onEventsChange(transfert.item)
          }
        }
      }
    }
  }

  const handleCellClick = (event, row, day) => {
    event.preventDefault()
    event.stopPropagation()
    if (day?.data?.length === 0 && onCellClick) {
      onCellClick(event, row, day)
    }
  }
  
  /**
   * @name renderTask
   * @description
   * @param tasks
   * @param rowId
   * @return {unknown[] | undefined}
   */
  const renderTask = (tasks = [], rowId) => {
    return tasks?.map((task, index) => {
      let condition = (
        searchResult ?
          (
            task?.groupLabel === searchResult?.groupLabel ||
            task?.user === searchResult?.user
          ) : !searchResult
      )
      return (
        condition &&
        <EventItem
          isMonthMode
          event={task}
          rowId={rowId}
          elevation={0}
          boxSx={{px: 0.5}}
          key={`item-d-${task?.id}-${rowId}`}
          onClick={e => handleTaskClick(e, task)}
          onDragStart={e => onCellDragStart(e, task, rowId)}
          sx={{
            width: "100%",
            py: 0,
            my: .3,
            color: "#fff",
            display: 'inline-flex',
            backgroundColor: task?.color || theme.palette.primary.light
          }}
        />
      )
    })
  }
  
  /**
   * @name handleTaskClick
   * @description
   * @param event
   * @param task
   * @return void
   */
  const handleTaskClick = (event, task) => {
    event.preventDefault()
    event.stopPropagation()
    onTaskClick && onTaskClick(event, task)
  }

  const hiddenDays = options?.hiddenDays || []
  return (
    <StyledTableContainer
    component={Paper}
    sx={{ maxHeight: options?.maxHeight || 540, borderRadius: options.theme === 'eynakology' ? 3 : 0}}
  >
    <TableContainer component={Paper} sx={{ boxShadow: 'none', }}>
      <Table
        size="small"
        aria-label="simple table"
        stickyHeader sx={{ minWidth: options?.minWidth || 650, p: options.theme === 'eynakology' ?  2 : 0,   background: options.theme === 'eynakology' ? '#F6F6F7' : '#fff',}}
      >
        {options.theme === 'eynakology' && <TableHead sx={{height: options.theme === 'eynakology' ? 48 : 24,}}>
          <StyledTableRow eynakology={options.theme ==='eynakology' ? true: false}>
            {columns?.filter(column => hiddenDays?.indexOf(column.dayName) < 0 )?.map((column, index) => (
                <StyledTableCell 
                eynakology={options.theme ==='eynakology' ? true: false}
                  align="center" 
                  key={column?.headerName+ '-' +index}
                >
                  {column?.headerName}
                </StyledTableCell>
              ))}
          </StyledTableRow>
        </TableHead>}
        {legacyStyle && <TableHead sx={{height: 24,}}>
          <StyledTableRow eynakology={options.theme ==='eynakology' ? true: false}>
            {columns?.filter(column => hiddenDays?.indexOf(column.dayName) < 0 )?.map((column, index) => (
                <StyledTableCell 
                eynakology={options.theme ==='eynakology' ? true: false}
                  align="center" 
                  key={column?.headerName+ '-' +index}
                >
                  {column?.headerName}
                </StyledTableCell>
              ))}
          </StyledTableRow>
        </TableHead>}
        <TableBody>
          {rows?.map((row, index) => (
              <StyledTableRow
              eynakology={options.theme ==='eynakology' ? true: false}
                key={`row-${row.id}-${index}`}
                sx={{ 
                  '&:last-child th': { 
                    border: 0,
                    borderLeft: `1px ${theme.palette.divider} solid`,
                    '&:firs-child': {
                      borderLeft: 0
                    }
                  }
                }}
              >
                {row?.days?.filter(day => hiddenDays?.indexOf(day.dayName) < 0).map((day, indexD) => {
                  const currentDay = (
                    options?.adapter === 'jalali' ?  day.day === parseInt(jalaliFormat(today, 'dd')) && jalaliIsSameMonth(day.date, today) : day.day === today.getUTCDate() && isSameMonth(day.date, today) 
                  )
                  return (
                    <StyledTableCell
                    eynakology={options.theme ==='eynakology' ? true: false}
                      scope="row"
                      align="center"
                      component="th"
                      sx={{px: 0.5, position: 'relative'}}
                      key={`day-${day.id}`}
                      onDragEnd={onCellDragEnd}
                      onDragOver={onCellDragOver}
                      onDragEnter={e => onCellDragEnter(e, day.id, row.id)}
                      onClick={(event) => handleCellClick(event, row, day)}
                    >
                      <Box sx={{height: '100%', overflowY: 'visible'}}>
                        {!legacyStyle && options.theme !== 'eynakology' &&
                        index === 0 && columns?.filter(column => hiddenDays?.indexOf(column.dayName) < 0 )[indexD]?.headerName?.toUpperCase()}
                        <Typography
                          variant="body2"
                          sx={{
                            ...currentDaySx,
                            background: (
                              currentDay &&
                              alpha(theme.palette.primary.main, 1)
                            ),
                            color: (currentDay && '#fff')
                          }}
                        >
                          {day.day}
                        </Typography>
                        {(day?.data?.length > 0 && renderTask(day?.data, row.id))}
                        {legacyStyle && day?.data?.length === 0 &&
                        <EventNoteRoundedIcon
                          fontSize="small"
                          htmlColor={theme.palette.divider}
                        />}
                      </Box>
                    </StyledTableCell>
                  )
                })}
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </StyledTableContainer>
  )
}

MonthModeView.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  date: PropTypes.string,
  options: PropTypes.object,
  onDateChange: PropTypes.func,
  onTaskClick: PropTypes.func,
  onCellClick: PropTypes.func
}

MonthModeView.defaultProps = {
  columns: [],
  rows: []
}

export default MonthModeView