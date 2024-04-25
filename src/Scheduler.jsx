import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import i18n from "../locales/locale";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { Grid, Paper, Fade, Zoom, Slide } from "@mui/material";
import {
  format,
  getDaysInMonth,
  getDay,
  sub,
  startOfMonth,
  parse,
  add,
  startOfDay,
  startOfWeek,
  getWeeksInMonth,
  isSameDay,
} from "date-fns";
import {
  format as jalaliFormat,
  getDaysInMonth as jalaliGetDaysInMonth,
  getDay as jalaliGetDay,
  sub as jalaliSub,
  startOfMonth as jalaliStartOfMonth,
  parse as jalaliParse,
  add as jalaliAdd,
  startOfDay as jalaliStartOfDay,
  startOfWeek as jalaliStartOfWeek,
  getWeeksInMonth as jalaliGetWeeksInMonth,
  isSameDay as jalaliIsSameDay,
} from "date-fns-jalali";
import SchedulerToolbar from "./Toolbar.jsx";
import MonthModeView from "./MonthModeView.jsx";
import WeekModeView from "./WeekModeView.jsx";
import DayModeView from "./DayModeView.jsx";
import TimeLineModeView from "./TimeLineModeView.jsx";
import DateFnsLocaleContext from "../locales/dateFnsContext";
import { ar, de, enAU, es, fr, ja, ko, ru, zhCN, faIR } from "date-fns/locale";
import { faIR as jalaliFaIR } from "date-fns-jalali/locale";

/**
 * @name Scheduler
 * @description
 * @param props
 * @constructor
 */
function Scheduler(props) {
  const {
    events,
    locale,
    options,
    alertProps,
    onCellClick,
    legacyStyle,
    onTaskClick,
    toolbarProps,
    onEventsChange,
    onAlertCloseButtonClicked,
  } = props;
  const today = new Date();
  const theme = useTheme();
  const { t, i18n } = useTranslation(["common"]);
  const weeks = [
    t("mon"),
    t("tue"),
    t("wed"),
    t("thu"),
    t("fri"),
    t("sat"),
    t("sun"),
  ];

  const [state, setState] = useState({});
  const [searchResult, setSearchResult] = useState();
  const [selectedDay, setSelectedDay] = useState(today);
  const [alertState, setAlertState] = useState(alertProps);
  const [mode, setMode] = useState(options?.defaultMode || "month");
  const [daysInMonth, setDaysInMonth] =
    options?.adapter === "jalali"
      ? useState(jalaliGetDaysInMonth(today))
      : useState(getDaysInMonth(today));
  const [startWeekOn, setStartWeekOn] = useState(options?.startWeekOn || "mon");
  const [selectedDate, setSelectedDate] = useState(
    options?.adapter === "jalali"
      ? jalaliFormat(today, "MMMM-yyyy")
      : format(today, "MMMM-yyyy")
  );
  const [weekDays, updateWeekDays] = useReducer((state) => {
    if (options?.startWeekOn?.toUpperCase() === "SUN") {
      return [
        t("sun"),
        t("mon"),
        t("tue"),
        t("wed"),
        t("thu"),
        t("fri"),
        t("sat"),
      ];
    } else if (options?.startWeekOn?.toUpperCase() === "SAT") {
      return [
        t("sat"),
        t("sun"),
        t("mon"),
        t("tue"),
        t("wed"),
        t("thu"),
        t("fri"),
      ];
    }
    return weeks;
  }, weeks);

  const isDayMode = mode.toLowerCase() === "day";
  const isWeekMode = mode.toLowerCase() === "week";
  const isMonthMode = mode.toLowerCase() === "month";
  const isTimelineMode = mode.toLowerCase() === "timeline";
  const TransitionMode =
    options?.transitionMode === "zoom"
      ? Zoom
      : options?.transitionMode === "fade"
      ? Fade
      : Slide;

  let dateFnsLocale = enAU;
  if (locale === "fr") {
    dateFnsLocale = fr;
  }
  if (locale === "ko") {
    dateFnsLocale = ko;
  }
  if (locale === "de") {
    dateFnsLocale = de;
  }
  if (locale === "es") {
    dateFnsLocale = es;
  }
  if (locale === "ar") {
    dateFnsLocale = ar;
  }
  if (locale === "ja") {
    dateFnsLocale = ja;
  }
  if (locale === "ru") {
    dateFnsLocale = ru;
  }
  if (locale === "zh") {
    dateFnsLocale = zhCN;
  }
  if (locale === "fa") {
    dateFnsLocale = options?.adapter === "jalali" ? jalaliFaIR : faIR;
  }

  /**
   * @name getMonthHeader
   * @description
   * @return {{headerClassName: string, headerAlign: string, headerName: string, field: string, flex: number, editable: boolean, id: string, sortable: boolean, align: string}[]}
   */
  const getMonthHeader = () => {
    //if (startWeekOn?.toUpperCase() === 'SUN') {
    //weekDays[0] = t('sun')
    //weekDays[1] = t('mon')
    //}
    return weekDays.map((day, i) => {
      const days = getDays();
      return {
        id: `row-day-header-${i + 1}`,
        flex: 1,
        sortable: false,
        editable: false,
        align: "center",
        headerName: day,
        headerAlign: "center",
        field: `rowday${i + 1}`,
        headerClassName: "scheduler-theme--header",
        dayName: days[i],
      };
    });
  };

  const getDays = () => {
    const startOnSun = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const startOnMon = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const startOnSat = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];
    switch (startWeekOn) {
      case "sat":
        return startOnSat;
      case "sun":
        return startOnSun;
      default:
        return startOnMon;
    }
  };
  /**
   * @name getMonthRows
   * @description
   * @return {[id: string,  day: number, date: date, data: array, dayName: string]}
   */
  const getMonthRows = () => {
    let rows = [],
      daysBefore = [];
    let iteration =
      options?.adapter === "jalali"
        ? jalaliGetWeeksInMonth(selectedDay)
        : getWeeksInMonth(selectedDay);
    let startOnSunday =
      startWeekOn?.toUpperCase() === "SUN" &&
      t("sun").toUpperCase() === weekDays[0].toUpperCase();
    let startOnSaturday =
      startWeekOn?.toUpperCase() === "SAT" &&
      t("sat").toUpperCase() === weekDays[0].toUpperCase();
    const getDayName = (date) => {
      const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      const d = new Date(date);
      const dayName = days[d.getDay()];
      return dayName;
    };

    let monthStartDate =
      options?.adapter === "jalali"
        ? jalaliStartOfMonth(selectedDay)
        : startOfMonth(selectedDay); // First day of month
    let monthStartDay =
      options?.adapter === "jalali"
        ? jalaliGetDay(monthStartDate)
        : getDay(monthStartDate); // Index of the day in week
    let dateDay =
      options?.adapter === "jalali"
        ? parseInt(jalaliFormat(monthStartDate, "dd"))
        : parseInt(format(monthStartDate, "dd")); // Month start day
    // Condition check helper
    const checkCondition = (v) =>
      startOnSunday
        ? v <= monthStartDay
        : startOnSaturday
        ? v - 1 <= monthStartDay
        : v < monthStartDay;
    if (monthStartDay >= 1) {
      // Add days of precedent month
      // If Sunday is the first day of week, apply b <= monthStartDay
      // and days: (monthStartDay-b) + 1
      for (let i = 1; checkCondition(i); i++) {
        let subDate =
          options?.adapter === "jalali"
            ? jalaliSub(monthStartDate, {
                days:
                  monthStartDay -
                  i +
                  (startOnSunday ? 1 : startOnSaturday ? 2 : 0),
              })
            : sub(monthStartDate, {
                days:
                  monthStartDay -
                  i +
                  (startOnSunday ? 1 : startOnSaturday ? 2 : 0),
              });
        let day =
          options?.adapter === "jalali"
            ? parseInt(jalaliFormat(subDate, "dd"))
            : parseInt(format(subDate, "dd"));
        let data = events.filter((event) =>
          options?.adapter === "jalali"
            ? jalaliIsSameDay(
                subDate,
                jalaliParse(event?.date, "yyyy-MM-dd", new Date())
              )
            : isSameDay(subDate, parse(event?.date, "yyyy-MM-dd", new Date()))
        );
        daysBefore.push({
          id: `day_-${day}`,
          day: day,
          date: subDate,
          data: data,
          dayName: getDayName(subDate),
        });
      }
    } else if (!startOnSunday || !startOnSaturday) {
      for (let i = 6; i > 0; i--) {
        let subDate =
          options?.adapter === "jalali"
            ? jalaliSub(monthStartDate, { days: i })
            : sub(monthStartDate, { days: i });
        let day =
          options?.adapter === "jalali"
            ? parseInt(jalaliFormat(subDate, "dd"))
            : parseInt(format(subDate, "dd"));
        let data = events.filter((event) =>
          options?.adapter === "jalali"
            ? jalaliIsSameDay(
                subDate,
                jalaliParse(event?.date, "yyyy-MM-dd", new Date())
              )
            : isSameDay(subDate, parse(event?.date, "yyyy-MM-dd", new Date()))
        );
        daysBefore.push({
          id: `day_-${day}`,
          day: day,
          date: subDate,
          data: data,
          dayName: getDayName(subDate),
        });
      }
    }

    if (daysBefore.length > 0) {
      rows.push({ id: 0, days: daysBefore });
    }

    // Add days and events data
    for (let i = 0; i < iteration; i++) {
      let obj = [];

      for (
        let j = 0;
        // This condition ensure that days will not exceed 31
        // i === 0 ? 7 - daysBefore?.length means that we substract inserted days
        // in the first line to 7
        j < (i === 0 ? 7 - daysBefore.length : 7) && dateDay <= daysInMonth;
        j++
      ) {
        let date =
          options?.adapter === "jalali"
            ? jalaliParse(
                `${dateDay}-${selectedDate}`,
                "dd-MMMM-yyyy",
                new Date()
              )
            : parse(`${dateDay}-${selectedDate}`, "dd-MMMM-yyyy", new Date());
        let data = events.filter((event) =>
          options?.adapter === "jalali"
            ? jalaliIsSameDay(
                date,
                options?.adapter === "jalali"
                  ? jalaliParse(event?.date, "yyyy-MM-dd", new Date())
                  : parse(event?.date, "yyyy-MM-dd", new Date())
              )
            : isSameDay(
                date,
                options?.adapter === "jalali"
                  ? jalaliParse(event?.date, "yyyy-MM-dd", new Date())
                  : parse(event?.date, "yyyy-MM-dd", new Date())
              )
        );
        obj.push({
          id: `day_-${dateDay}`,
          date,
          data,
          day: dateDay,
          dayName: getDayName(date),
        });
        dateDay++;
      }

      if (i === 0 && daysBefore.length > 0) {
        rows[0].days = rows[0].days.concat(obj);
        continue;
      }
      if (obj.length > 0) {
        rows.push({ id: i, days: obj });
      }
    }

    // Check if last row is not fully filled
    let lastRow = rows[iteration - 1];
    let lastRowDaysdiff = 7 - lastRow?.days?.length;
    let lastDaysData = [];

    if (lastRowDaysdiff > 0) {
      let day = lastRow.days[lastRow?.days?.length - 1];
      let addDate = day.date;
      for (let i = dateDay; i < dateDay + lastRowDaysdiff; i++) {
        addDate =
          options?.adapter === "jalali"
            ? jalaliAdd(addDate, { days: 1 })
            : add(addDate, { days: 1 });
        let d =
          options?.adapter === "jalali"
            ? jalaliFormat(addDate, "dd")
            : format(addDate, "dd");
        // eslint-disable-next-line
        let data = events.filter((event) =>
          options.adapter === "jalali"
            ? jalaliIsSameDay(
                addDate,
                jalaliParse(event?.date, "yyyy-MM-dd", new Date())
              )
            : isSameDay(addDate, parse(event?.date, "yyyy-MM-dd", new Date()))
        );
        lastDaysData.push({
          id: `day_-${d}`,
          date: addDate,
          day: d,
          data,
          dayName: getDayName(addDate),
        });
      }
      rows[iteration - 1].days = rows[iteration - 1].days.concat(lastDaysData);
    }
    return rows;
  };

  /**
   * @name getWeekHeader
   * @description
   * @return {{headerClassName: string, headerAlign: string, headerName: string, field: string, flex: number, editable: boolean, id: string, sortable: boolean, align: string}[]}
   */
  const getWeekHeader = () => {

    const getDayName = (date) => {
      const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      const d = new Date(date);
      const dayName = days[d.getDay()];
      return dayName;
    };

    let data = [];
    let weekStart =
      options?.adapter === "jalali"
        ? jalaliStartOfWeek(selectedDay, {
            weekStartsOn: startWeekOn === "mon" ? 1 : startWeekOn === "sat" ? 6 : 0,
          })
        : startOfWeek(selectedDay, {
            weekStartsOn: startWeekOn === "mon" ? 1 : startWeekOn === "sat" ? 6 : 0,
          });
    for (let i = 0; i < 7; i++) {
      let date =
        options?.adapter === "jalali"
          ? jalaliAdd(weekStart, { days: i })
          : add(weekStart, { days: i });
      data.push({
        date: date,
        dayName: getDayName(date),
        weekDay:
          options?.adapter === "jalali"
            ? jalaliFormat(date, "iii", { locale: dateFnsLocale })
            : format(date, "iii", { locale: dateFnsLocale }),
        day:
          options?.adapter === "jalali"
            ? jalaliFormat(date, "dd", { locale: dateFnsLocale })
            : format(date, "dd", { locale: dateFnsLocale }),
        month:
          options?.adapter === "jalali"
            ? format(date, "MM", { locale: dateFnsLocale })
            : format(date, "MM", { locale: dateFnsLocale }),
      });
    }
    return data;
  };

  const getWeekRows = () => {
    const HOURS = 24; //* 2
    let data = [];
    let dayStartHour =
      options?.adapter === "jalali"
        ? jalaliStartOfDay(selectedDay)
        : startOfDay(selectedDay);

    for (let i = 0; i <= HOURS; i++) {
      let id = `line_${i}`;
      let label =
        options?.adapter === "jalali"
          ? jalaliFormat(dayStartHour, "HH:mm aaa")
          : format(dayStartHour, "HH:mm aaa");

      //TODO Add everyday event capability
      //if (i === 0) {
      //id = `line_everyday`; label = 'Everyday'
      //}
      //TODO Place the processing bloc here if everyday capability is available
      // ...

      if (i > 0) {

        const getDayName = (date) => {
          const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
          const d = new Date(date);
          const dayName = days[d.getDay()];
          return dayName;
        };

        //Start processing bloc
        let obj = { id: id, label: label, days: [] };
        let columns = getWeekHeader();
        // eslint-disable-next-line
        columns.map((column, index) => {
          let data = events.filter((event) => {
            let eventDate =
              options?.adapter === "jalali"
                ? jalaliParse(event?.date, "yyyy-MM-dd", new Date())
                : parse(event?.date, "yyyy-MM-dd", new Date());
            return options?.adapter === "jalali"
              ? jalaliIsSameDay(column?.date, eventDate)
              : isSameDay(column?.date, eventDate) &&
                  event?.startHour?.toUpperCase() === label?.toUpperCase();
          });
          obj.days.push({
            id: `column-${index}_m-${column.month}_d-${column.day}_${id}`,
            date: column?.date,
            data: data,
            dayName: getDayName(column?.date),
          });
        });
        // Label affectation
        data.push(obj); // End processing bloc
        dayStartHour =
          options?.adapter === "jalali"
            ? jalaliAdd(dayStartHour, { minutes: 60 })
            : add(dayStartHour, { minutes: 60 }); // 30
      }
      //if (i > 0) {
      //  dayStartHour = add(dayStartHour, {minutes: 30})
      //}
    }
    return data;
  };

  const getDayHeader = () => [
    {
      date: selectedDay,
      weekDay:
        options?.adapter === "jalali"
          ? jalaliFormat(selectedDay, "iii", { locale: dateFnsLocale })
          : format(selectedDay, "iii", { locale: dateFnsLocale }),
      day:
        options?.adapter === "jalali"
          ? jalaliFormat(selectedDay, "dd", { locale: dateFnsLocale })
          : format(selectedDay, "dd", { locale: dateFnsLocale }),
      month:
        options?.adapter === "jalali"
          ? jalaliFormat(selectedDay, "MM", { locale: dateFnsLocale })
          : format(selectedDay, "MM", { locale: dateFnsLocale }),
    },
  ];

  const getDayRows = () => {
    const HOURS = 24;
    let data = [];
    let dayStartHour =
      options?.adapter === "jalali"
        ? jalaliStartOfDay(selectedDay)
        : startOfDay(selectedDay);

    for (let i = 0; i <= HOURS; i++) {
      let id = `line_${i}`;
      let label =
        options?.adapter === "jalali"
          ? jalaliFormat(dayStartHour, "HH:mm aaa")
          : format(dayStartHour, "HH:mm aaa");

      if (i > 0) {
        let obj = { id: id, label: label, days: [] };
        let columns = getDayHeader();
        let column = columns[0];
        let matchedEvents = events.filter((event) => {
          let eventDate =
            options?.adapter === "jalali"
              ? jalaliParse(event?.date, "yyyy-MM-dd", new Date())
              : parse(event?.date, "yyyy-MM-dd", new Date());
          return options?.adapter === "jalali"
            ? jalaliIsSameDay(column?.date, eventDate)
            : isSameDay(column?.date, eventDate) &&
                event?.startHour?.toUpperCase() === label?.toUpperCase();
        });
        obj.days.push({
          id: `column-_m-${column?.month}_d-${column?.day}_${id}`,
          date: column?.date,
          data: matchedEvents,
        });

        data.push(obj);
        dayStartHour =
          options?.adapter === "jalali"
            ? jalaliAdd(dayStartHour, { minutes: 60 })
            : add(dayStartHour, { minutes: 60 });
      }
    }
    return data;
  };

  const getTimeLineRows = () =>
    //events.filter((event) => {
    //let eventDate = parse(event?.date, 'yyyy-MM-dd', new Date())
    //return isSameDay(selectedDay, eventDate)
    //})
    events;

  /**
   * @name handleDateChange
   * @description
   * @param day
   * @param date
   * @return void
   */
  const handleDateChange = (day, date) => {
    setDaysInMonth(day);
    setSelectedDay(date);
    setSelectedDate(
      options?.adapter === "jalali"
        ? jalaliFormat(date, "MMMM-yyyy")
        : format(date, "MMMM-yyyy")
    );
  };

  /**
   * @name handleModeChange
   * @description
   * @param newMode
   * @return void
   */
  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  /**
   * @name onSearchResult
   * @description
   * @param item
   * @return void
   */
  const onSearchResult = (item) => {
    setSearchResult(item);
  };

  const handleEventsChange = async (item) => {
    onEventsChange(item);
    let eventIndex = events.findIndex((e) => e.id === item?.id);
    if (eventIndex !== -1) {
      let oldObject = Object.assign({}, events[eventIndex]);
      if (alertState?.showNotification && !alertState.open) {
        setAlertState({
          ...alertState,
          open: true,
          message: `
            ${item?.label} successfully moved from ${oldObject?.date}
            ${oldObject?.startHour} to ${item?.date} ${item?.startHour}
          `,
        });
        setTimeout(() => {
          setAlertState({ ...alertState, open: false, message: "" });
        }, alertState.delay);
      }
    }
  };

  useEffect(() => {
    if (isMonthMode) {
      setState({
        ...state,
        columns: getMonthHeader(),
        rows: getMonthRows(),
      });
    }
    if (isWeekMode) {
      setState({
        ...state,
        columns: getWeekHeader(),
        rows: getWeekRows(),
      });
    }
    if (isDayMode) {
      setState({
        ...state,
        columns: getDayHeader(),
        rows: getDayRows(),
      });
    }
    if (isTimelineMode) {
      setState({
        ...state,
        columns: getDayHeader(),
        rows: getTimeLineRows(),
      });
    }
    // eslint-disable-next-line
  }, [
    mode,
    weekDays,
    daysInMonth,
    selectedDay,
    selectedDate,
    dateFnsLocale,
    i18n.language,
    startWeekOn,
  ]);

  useEffect(() => {
    if (locale !== i18n.language) {
      //localStorage.getItem('i18nextLng')
      localStorage.setItem("i18nextLng", locale.toLowerCase());
      i18n.changeLanguage(locale.toLowerCase());
      updateWeekDays();
    }
  }, [locale]);

  useEffect(() => {
    if (options?.defaultMode !== mode) {
      setMode(options?.defaultMode);
    }
  }, [options?.defaultMode]);

  useEffect(() => {
    if (options?.startWeekOn !== startWeekOn) {
      setStartWeekOn(options?.startWeekOn);
    }
    updateWeekDays();
  }, [options?.startWeekOn]);

  return (
    <Paper variant="outlined" elevation={0} sx={{ p: 0, height: '100%' }}>
      <DateFnsLocaleContext.Provider value={dateFnsLocale}>
        <SchedulerToolbar
          today={today}
          events={events}
          locale={locale}
          switchMode={mode}
          options={options}
          alertProps={alertState}
          toolbarProps={toolbarProps}
          onDateChange={handleDateChange}
          onModeChange={handleModeChange}
          onSearchResult={onSearchResult}
          onAlertCloseButtonClicked={onAlertCloseButtonClicked}
        />
        <Grid container spacing={0} alignItems="center" justifyContent="start" height='100%'>
          {isMonthMode && (
            <TransitionMode in>
              <Grid item xs={12} height='100%'>
                <MonthModeView
                  locale={locale}
                  options={options}
                  date={selectedDate}
                  rows={state?.rows}
                  columns={state?.columns}
                  legacyStyle={legacyStyle}
                  onTaskClick={onTaskClick}
                  onCellClick={onCellClick}
                  searchResult={searchResult}
                  onDateChange={handleDateChange}
                  onEventsChange={handleEventsChange}
                />
              </Grid>
            </TransitionMode>
          )}
          {isWeekMode && (
            <TransitionMode in>
              <Grid item xs={12} height='100%'>
                <WeekModeView
                  locale={locale}
                  events={events}
                  options={options}
                  date={selectedDate}
                  rows={state?.rows}
                  columns={state?.columns}
                  onTaskClick={onTaskClick}
                  onCellClick={onCellClick}
                  searchResult={searchResult}
                  onDateChange={handleDateChange}
                  onEventsChange={handleEventsChange}
                />
              </Grid>
            </TransitionMode>
          )}
          {isDayMode && (
            <TransitionMode in>
              <Grid item xs={12} height='100%'>
                <DayModeView
                  locale={locale}
                  events={events}
                  options={options}
                  date={selectedDate}
                  rows={state?.rows}
                  columns={state?.columns}
                  onTaskClick={onTaskClick}
                  onCellClick={onCellClick}
                  searchResult={searchResult}
                  onDateChange={handleDateChange}
                  onEventsChange={handleEventsChange}
                />
              </Grid>
            </TransitionMode>
          )}
        </Grid>
        {isTimelineMode && (
          <TransitionMode in>
            <Grid container spacing={2} alignItems="start" height='100%'>
              <Grid item xs={12}>
                <TimeLineModeView
                  events={events}
                  locale={locale}
                  options={options}
                  date={selectedDate}
                  rows={state?.rows}
                  columns={state?.columns}
                  onTaskClick={onTaskClick}
                  onCellClick={onCellClick}
                  searchResult={searchResult}
                  onDateChange={handleDateChange}
                  onEventsChange={onEventsChange}
                />
              </Grid>
            </Grid>
          </TransitionMode>
        )}
      </DateFnsLocaleContext.Provider>
    </Paper>
  );
}

Scheduler.propTypes = {
  events: PropTypes.array,
  options: PropTypes.object,
  alertProps: PropTypes.object,
  toolbarProps: PropTypes.object,
  onEventsChange: PropTypes.func,
  onCellClick: PropTypes.func,
  onTaskClick: PropTypes.func,
  onAlertCloseButtonClicked: PropTypes.func,
};

Scheduler.defaultProps = {
  locale: "en",
  legacyStyle: false,
};

export default Scheduler;
