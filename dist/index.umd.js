(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/defineProperty'), require('@babel/runtime/helpers/asyncToGenerator'), require('@babel/runtime/helpers/slicedToArray'), require('@babel/runtime/regenerator'), require('react'), require('prop-types'), require('i18next'), require('react-i18next'), require('@mui/material/styles'), require('@mui/material'), require('date-fns'), require('date-fns-jalali'), require('@babel/runtime/helpers/extends'), require('@mui/lab/AdapterDateFns'), require('@date-io/date-fns-jalali'), require('@mui/lab/LocalizationProvider'), require('@mui/lab/StaticDatePicker'), require('@mui/icons-material/Close'), require('@mui/icons-material/ChevronLeft'), require('@mui/icons-material/ChevronRight'), require('@mui/icons-material/Today'), require('@mui/icons-material/Settings'), require('@mui/icons-material/Archive'), require('@mui/icons-material/Autorenew'), require('@mui/icons-material/LocalPrintshop'), require('@mui/icons-material/PlayCircleOutline'), require('@mui/icons-material/GridView'), require('@mui/icons-material/EventNoteRounded'), require('@mui/system'), require('@mui/lab/Timeline'), require('@mui/lab/TimelineItem'), require('@mui/lab/TimelineSeparator'), require('@mui/lab/TimelineConnector'), require('@mui/lab/TimelineContent'), require('@mui/lab/TimelineOppositeContent'), require('@mui/lab/TimelineDot'), require('@mui/icons-material/Schedule'), require('date-fns/locale'), require('date-fns-jalali/locale')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/defineProperty', '@babel/runtime/helpers/asyncToGenerator', '@babel/runtime/helpers/slicedToArray', '@babel/runtime/regenerator', 'react', 'prop-types', 'i18next', 'react-i18next', '@mui/material/styles', '@mui/material', 'date-fns', 'date-fns-jalali', '@babel/runtime/helpers/extends', '@mui/lab/AdapterDateFns', '@date-io/date-fns-jalali', '@mui/lab/LocalizationProvider', '@mui/lab/StaticDatePicker', '@mui/icons-material/Close', '@mui/icons-material/ChevronLeft', '@mui/icons-material/ChevronRight', '@mui/icons-material/Today', '@mui/icons-material/Settings', '@mui/icons-material/Archive', '@mui/icons-material/Autorenew', '@mui/icons-material/LocalPrintshop', '@mui/icons-material/PlayCircleOutline', '@mui/icons-material/GridView', '@mui/icons-material/EventNoteRounded', '@mui/system', '@mui/lab/Timeline', '@mui/lab/TimelineItem', '@mui/lab/TimelineSeparator', '@mui/lab/TimelineConnector', '@mui/lab/TimelineContent', '@mui/lab/TimelineOppositeContent', '@mui/lab/TimelineDot', '@mui/icons-material/Schedule', 'date-fns/locale', 'date-fns-jalali/locale'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-material-scheduler"] = factory(global._defineProperty, global._asyncToGenerator, global._slicedToArray, global._regeneratorRuntime, global.React, global.PropTypes, global.i18n, global.reactI18next, global.styles, global.material, global.dateFns, global.dateFnsJalali, global._extends, global.AdapterDateFns, global.AdapterJalali, global.LocalizationProvider, global.StaticDatePicker, global.CloseIcon, global.ChevronLeftIcon, global.ChevronRightIcon, global.TodayIcon, global.SettingsIcon, global.ArchiveIcon, global.AutorenewIcon, global.LocalPrintshopIcon, global.PlayCircleOutlineIcon, global.GridViewIcon, global.EventNoteRoundedIcon, global.system, global.Timeline, global.TimelineItem, global.TimelineSeparator, global.TimelineConnector, global.TimelineContent, global.TimelineOppositeContent, global.TimelineDot, global.ScheduleIcon, global.locale$1, global.locale));
})(this, (function (_defineProperty, _asyncToGenerator, _slicedToArray, _regeneratorRuntime, React, PropTypes, i18n, reactI18next, styles, material, dateFns, dateFnsJalali, _extends, AdapterDateFns, AdapterJalali, LocalizationProvider, StaticDatePicker, CloseIcon, ChevronLeftIcon, ChevronRightIcon, TodayIcon, SettingsIcon, ArchiveIcon, AutorenewIcon, LocalPrintshopIcon, PlayCircleOutlineIcon, GridViewIcon, EventNoteRoundedIcon, system, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot, ScheduleIcon, locale$1, locale) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
  var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
  var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
  var AdapterDateFns__default = /*#__PURE__*/_interopDefaultLegacy(AdapterDateFns);
  var AdapterJalali__default = /*#__PURE__*/_interopDefaultLegacy(AdapterJalali);
  var LocalizationProvider__default = /*#__PURE__*/_interopDefaultLegacy(LocalizationProvider);
  var StaticDatePicker__default = /*#__PURE__*/_interopDefaultLegacy(StaticDatePicker);
  var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
  var ChevronLeftIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronLeftIcon);
  var ChevronRightIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronRightIcon);
  var TodayIcon__default = /*#__PURE__*/_interopDefaultLegacy(TodayIcon);
  var SettingsIcon__default = /*#__PURE__*/_interopDefaultLegacy(SettingsIcon);
  var ArchiveIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArchiveIcon);
  var AutorenewIcon__default = /*#__PURE__*/_interopDefaultLegacy(AutorenewIcon);
  var LocalPrintshopIcon__default = /*#__PURE__*/_interopDefaultLegacy(LocalPrintshopIcon);
  var PlayCircleOutlineIcon__default = /*#__PURE__*/_interopDefaultLegacy(PlayCircleOutlineIcon);
  var GridViewIcon__default = /*#__PURE__*/_interopDefaultLegacy(GridViewIcon);
  var EventNoteRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(EventNoteRoundedIcon);
  var Timeline__default = /*#__PURE__*/_interopDefaultLegacy(Timeline);
  var TimelineItem__default = /*#__PURE__*/_interopDefaultLegacy(TimelineItem);
  var TimelineSeparator__default = /*#__PURE__*/_interopDefaultLegacy(TimelineSeparator);
  var TimelineConnector__default = /*#__PURE__*/_interopDefaultLegacy(TimelineConnector);
  var TimelineContent__default = /*#__PURE__*/_interopDefaultLegacy(TimelineContent);
  var TimelineOppositeContent__default = /*#__PURE__*/_interopDefaultLegacy(TimelineOppositeContent);
  var TimelineDot__default = /*#__PURE__*/_interopDefaultLegacy(TimelineDot);
  var ScheduleIcon__default = /*#__PURE__*/_interopDefaultLegacy(ScheduleIcon);

  var day$8 = "Day";
  var week$8 = "Week";
  var month$8 = "Month";
  var timeline$8 = "Timeline";
  var mon$8 = "Mon";
  var tue$8 = "Tue";
  var wed$8 = "Wed";
  var thu$8 = "Thu";
  var fri$8 = "Fri";
  var sat$8 = "Sat";
  var sun$8 = "Sun";
  var search$8 = "Search...";
  var trEN = {
  	day: day$8,
  	week: week$8,
  	month: month$8,
  	timeline: timeline$8,
  	mon: mon$8,
  	tue: tue$8,
  	wed: wed$8,
  	thu: thu$8,
  	fri: fri$8,
  	sat: sat$8,
  	sun: sun$8,
  	search: search$8
  };

  var day$7 = "Jour";
  var week$7 = "Semaine";
  var month$7 = "Mois";
  var timeline$7 = "Chronologie";
  var mon$7 = "Lun";
  var tue$7 = "Mar";
  var wed$7 = "Mer";
  var thu$7 = "Jeu";
  var fri$7 = "Ven";
  var sat$7 = "Sam";
  var sun$7 = "Dim";
  var search$7 = "Chercher...";
  var trFR = {
  	day: day$7,
  	week: week$7,
  	month: month$7,
  	timeline: timeline$7,
  	mon: mon$7,
  	tue: tue$7,
  	wed: wed$7,
  	thu: thu$7,
  	fri: fri$7,
  	sat: sat$7,
  	sun: sun$7,
  	search: search$7
  };

  var day$6 = "낮";
  var week$6 = "주";
  var month$6 = "월";
  var timeline$6 = "타임라인";
  var mon$6 = "월";
  var tue$6 = "화요일";
  var wed$6 = "수";
  var thu$6 = "목";
  var fri$6 = "금";
  var sat$6 = "앉았다";
  var sun$6 = "해";
  var search$6 = "검색...";
  var trKO = {
  	day: day$6,
  	week: week$6,
  	month: month$6,
  	timeline: timeline$6,
  	mon: mon$6,
  	tue: tue$6,
  	wed: wed$6,
  	thu: thu$6,
  	fri: fri$6,
  	sat: sat$6,
  	sun: sun$6,
  	search: search$6
  };

  var day$5 = "Tag";
  var week$5 = "Woche";
  var month$5 = "Monat";
  var timeline$5 = "Zeitleiste";
  var mon$5 = "Mo";
  var tue$5 = "Diens";
  var wed$5 = "Mitt";
  var thu$5 = "Donner";
  var fri$5 = "Frei";
  var sat$5 = "Sam";
  var sun$5 = "Sonn";
  var search$5 = "Suchen...";
  var trDE = {
  	day: day$5,
  	week: week$5,
  	month: month$5,
  	timeline: timeline$5,
  	mon: mon$5,
  	tue: tue$5,
  	wed: wed$5,
  	thu: thu$5,
  	fri: fri$5,
  	sat: sat$5,
  	sun: sun$5,
  	search: search$5
  };

  var day$4 = "Día";
  var week$4 = "Semana";
  var month$4 = "Mes";
  var timeline$4 = "Cronología";
  var mon$4 = "Lun";
  var tue$4 = "Mar";
  var wed$4 = "Mié";
  var thu$4 = "Jue";
  var fri$4 = "Vie";
  var sat$4 = "Sáb";
  var sun$4 = "Dom";
  var search$4 = "Buscar...";
  var trES = {
  	day: day$4,
  	week: week$4,
  	month: month$4,
  	timeline: timeline$4,
  	mon: mon$4,
  	tue: tue$4,
  	wed: wed$4,
  	thu: thu$4,
  	fri: fri$4,
  	sat: sat$4,
  	sun: sun$4,
  	search: search$4
  };

  var day$3 = "يوم";
  var week$3 = "أسبوع";
  var month$3 = "شهر";
  var timeline$3 = "الجدول الزمني";
  var mon$3 = "الإثنين";
  var tue$3 = "الثلاثاء";
  var wed$3 = "تزوج";
  var thu$3 = "خميس";
  var fri$3 = "الجمعة";
  var sat$3 = "قعد";
  var sun$3 = "شمس";
  var search$3 = "بحث";
  var trAR = {
  	day: day$3,
  	week: week$3,
  	month: month$3,
  	timeline: timeline$3,
  	mon: mon$3,
  	tue: tue$3,
  	wed: wed$3,
  	thu: thu$3,
  	fri: fri$3,
  	sat: sat$3,
  	sun: sun$3,
  	search: search$3
  };

  var day$2 = "日";
  var week$2 = "週";
  var month$2 = "月";
  var timeline$2 = "年表";
  var mon$2 = "月曜日";
  var tue$2 = "3月";
  var wed$2 = "海";
  var thu$2 = "ゲーム";
  var fri$2 = "金";
  var sat$2 = "土";
  var sun$2 = "太陽";
  var search$2 = "探す...";
  var trJA = {
  	day: day$2,
  	week: week$2,
  	month: month$2,
  	timeline: timeline$2,
  	mon: mon$2,
  	tue: tue$2,
  	wed: wed$2,
  	thu: thu$2,
  	fri: fri$2,
  	sat: sat$2,
  	sun: sun$2,
  	search: search$2
  };

  var day$1 = "天";
  var week$1 = "星期";
  var month$1 = "月";
  var timeline$1 = "年表";
  var mon$1 = "星期一";
  var tue$1 = "三月";
  var wed$1 = "海";
  var thu$1 = "游戏";
  var fri$1 = "周五";
  var sat$1 = "星期六";
  var sun$1 = "太阳";
  var search$1 = "寻找...";
  var trZH = {
  	day: day$1,
  	week: week$1,
  	month: month$1,
  	timeline: timeline$1,
  	mon: mon$1,
  	tue: tue$1,
  	wed: wed$1,
  	thu: thu$1,
  	fri: fri$1,
  	sat: sat$1,
  	sun: sun$1,
  	search: search$1
  };

  var day = "روز";
  var week = "هفته";
  var month = "ماه";
  var timeline = "خط زمان";
  var mon = "دوشنبه";
  var tue = "سه شنبه";
  var wed = "چهارشنبه";
  var thu = "پنجشنبه";
  var fri = "جمعه";
  var sat = "شنبه";
  var sun = "یکشنبه";
  var search = "جستجو ...";
  var trFA = {
  	day: day,
  	week: week,
  	month: month,
  	timeline: timeline,
  	mon: mon,
  	tue: tue,
  	wed: wed,
  	thu: thu,
  	fri: fri,
  	sat: sat,
  	sun: sun,
  	search: search
  };

  var resources = {
    en: {
      common: trEN
    },
    fr: {
      common: trFR
    },
    ko: {
      common: trKO
    },
    de: {
      common: trDE
    },
    es: {
      common: trES
    },
    ar: {
      common: trAR
    },
    ja: {
      common: trJA
    },
    zh: {
      common: trZH
    },
    fa: {
      common: trFA
    }
  };
  i18n__default["default"]
  // pass the i18n instance to react-i18next.
  .use(reactI18next.initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: resources,
    lng: localStorage.getItem('i18nextLng'),
    ns: ["common"],
    defaultNS: "common",
    fallbackNS: "common",
    fallbackLng: ["en", "fr", "dev"],
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    react: {
      wait: true,
      useSuspense: false
    }
  });

  var DateFnsLocaleContext = /*#__PURE__*/React.createContext();

  function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var StyledAutoComplete = styles.styled(material.Autocomplete)(function (_ref) {
    var theme = _ref.theme;
    return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({
      color: 'inherit',
      width: '94%',
      display: 'inline-flex',
      margin: theme.spacing(.5, 1.5),
      transition: theme.transitions.create('width')
    }, theme.breakpoints.up('sm'), {
      width: '100%'
    }), theme.breakpoints.up('md'), {
      width: '27ch'
    }), theme.breakpoints.up('lg'), {
      width: '27ch'
    });
  });
  function ToolbarSearchbar(props) {
    var events = props.events,
      _onInputChange = props.onInputChange,
      options = props.options;
    var _useTranslation = reactI18next.useTranslation(['common']),
      t = _useTranslation.t;
    var _useState = React.useState(''),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
    React.useContext(DateFnsLocaleContext);
    var _useState3 = React.useState(''),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];
    var handleOnChange = function handleOnChange(event, newValue) {
      setValue(newValue);
      if (_onInputChange) _onInputChange(newValue);
    };
    return /*#__PURE__*/React__default["default"].createElement(StyledAutoComplete, {
      value: value,
      id: "scheduler-autocomplete",
      inputValue: inputValue,
      sx: {
        mb: 0,
        display: 'inline-flex'
      },
      onChange: handleOnChange,
      options: events === null || events === void 0 ? void 0 : events.sort(function (a, b) {
        return -b.groupLabel.localeCompare(a.groupLabel);
      }),
      groupBy: function groupBy(option) {
        return option ? option === null || option === void 0 ? void 0 : option.groupLabel : null;
      }
      /*
      (
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Box
              component="span"
              sx={{
                width: 16,
                height: 16,
                mr: 1,
                borderRadius: "50%",
                backgroundColor: option?.color || theme.palette.secondary.main
              }}
            />
            {option?.groupLabel}
          </Box>
        )
       */,
      getOptionLabel: function getOptionLabel(option) {
        return option ? "".concat(option.groupLabel || '', " | (").concat(option.startHour || '', " - ").concat(option.endHour || '', ")") : '';
      },
      isOptionEqualToValue: function isOptionEqualToValue(option, value) {
        return option.id === value.id;
      },
      onInputChange: function onInputChange(event, newInputValue) {
        setInputValue(newInputValue);
        _onInputChange(newInputValue);
      },
      renderOption: function renderOption(props, option) {
        return /*#__PURE__*/React__default["default"].createElement(material.Box, _extends__default["default"]({
          component: "li",
          sx: {
            fontSize: 12
          }
        }, props), options !== null && options !== void 0 && options.adapter ? dateFnsJalali.format(dateFnsJalali.parse(option === null || option === void 0 ? void 0 : option.date, 'yyyy-MM-dd', new Date()), 'dd-MMMM-yyyy') : dateFns.format(dateFns.parse(option === null || option === void 0 ? void 0 : option.date, 'yyyy-MM-dd', new Date()), 'dd-MMMM-yyyy'), "(", (option === null || option === void 0 ? void 0 : option.startHour) || '', " - ", (option === null || option === void 0 ? void 0 : option.endHour) || '', ")");
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/React__default["default"].createElement(material.TextField, _extends__default["default"]({}, params, {
          size: "small",
          label: t('search'),
          InputProps: _objectSpread$4({}, params.InputProps)
        }));
      }
    });
  }
  ToolbarSearchbar.propTypes = {
    events: PropTypes__default["default"].array,
    onInputChange: PropTypes__default["default"].func
  };
  ToolbarSearchbar.defaultProps = {};

  function SchedulerToolbar(props) {
    props.locale;
      var events = props.events,
      today = props.today,
      switchMode = props.switchMode,
      alertProps = props.alertProps,
      toolbarProps = props.toolbarProps,
      onModeChange = props.onModeChange,
      onDateChange = props.onDateChange,
      onSearchResult = props.onSearchResult,
      onAlertCloseButtonClicked = props.onAlertCloseButtonClicked,
      options = props.options;
    var theme = styles.useTheme();
    var _useTranslation = reactI18next.useTranslation(['common']),
      t = _useTranslation.t;
    var _useState = React.useState(switchMode),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      mode = _useState2[0],
      setMode = _useState2[1];
    var _useState3 = React.useState(),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      searchResult = _useState4[0],
      setSearchResult = _useState4[1];
    var _useState5 = React.useState(null),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      anchorMenuEl = _useState6[0],
      setAnchorMenuEl = _useState6[1];
    var _useState7 = React.useState(null),
      _useState8 = _slicedToArray__default["default"](_useState7, 2),
      anchorDateEl = _useState8[0],
      setAnchorDateEl = _useState8[1];
    var _useState9 = React.useState(today || new Date()),
      _useState10 = _slicedToArray__default["default"](_useState9, 2),
      selectedDate = _useState10[0],
      setSelectedDate = _useState10[1];
    var _ref = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? React.useState(dateFnsJalali.getDaysInMonth(selectedDate)) : React.useState(dateFns.getDaysInMonth(selectedDate)),
      _ref2 = _slicedToArray__default["default"](_ref, 2),
      daysInMonth = _ref2[0],
      setDaysInMonth = _ref2[1];
    var openMenu = Boolean(anchorMenuEl);
    var openDateSelector = Boolean(anchorDateEl);
    var dateFnsLocale = React.useContext(DateFnsLocaleContext);
    var isDayMode = mode.toLowerCase() === 'day';
    var isWeekMode = mode.toLowerCase() === 'week';
    var isMonthMode = mode.toLowerCase() === 'month';
    var commonIconButtonProps = {
      size: "medium",
      edge: "start",
      color: "inherit",
      "aria-label": "menu"
    };
    var menus = [{
      label: "Read events",
      icon: /*#__PURE__*/React__default["default"].createElement(PlayCircleOutlineIcon__default["default"], {
        fontSize: "small"
      })
    }, {
      label: "Refresh",
      icon: /*#__PURE__*/React__default["default"].createElement(AutorenewIcon__default["default"], {
        fontSize: "small"
      })
    }, {
      label: "Export",
      icon: /*#__PURE__*/React__default["default"].createElement(ArchiveIcon__default["default"], {
        fontSize: "small"
      })
    }, {
      label: "Print",
      icon: /*#__PURE__*/React__default["default"].createElement(LocalPrintshopIcon__default["default"], {
        fontSize: "small"
      })
    }];
    var handleCloseMenu = function handleCloseMenu() {
      setAnchorMenuEl(null);
    };
    var handleOpenDateSelector = function handleOpenDateSelector(event) {
      setAnchorDateEl(event.currentTarget);
    };
    var handleCloseDateSelector = function handleCloseDateSelector() {
      setAnchorDateEl(null);
    };

    /**
     * @name handleChangeDate
     * @description
     * @param method
     * @return void
     */
    var handleChangeDate = function handleChangeDate(method) {
      var _options;
      if (typeof method !== 'function') {
        return;
      }
      var options = {
        months: 1
      };
      if (isWeekMode) {
        options = {
          weeks: 1
        };
      }
      if (isDayMode) {
        options = {
          days: 1
        };
      }
      var newDate = method(selectedDate, options);
      setDaysInMonth(((_options = options) === null || _options === void 0 ? void 0 : _options.adapter) === 'jalali' ? dateFnsJalali.getDaysInMonth(newDate) : dateFns.getDaysInMonth(newDate));
      setSelectedDate(newDate);
    };
    var handleCloseAlert = function handleCloseAlert(e) {
      onAlertCloseButtonClicked && onAlertCloseButtonClicked(e);
    };
    React.useEffect(function () {
      if (mode && onModeChange) {
        onModeChange(mode);
      }
      // eslint-disable-next-line
    }, [mode]);
    React.useEffect(function () {
      onDateChange && onDateChange(daysInMonth, selectedDate);
      // eslint-disable-next-line
    }, [daysInMonth, selectedDate]);
    React.useEffect(function () {
      onSearchResult && onSearchResult(searchResult);
      // eslint-disable-next-line
    }, [searchResult]);
    React.useEffect(function () {
      if (switchMode !== mode) {
        setMode(switchMode);
      }
    }, [switchMode]);
    return /*#__PURE__*/React__default["default"].createElement(material.Toolbar, {
      variant: "dense",
      sx: {
        px: '0px !important',
        display: 'block',
        borderBottom: "1px ".concat(theme.palette.divider, " solid")
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      container: true,
      spacing: 0,
      alignItems: "center",
      justifyContent: "flex-end"
    }, /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 1,
      sm: true,
      md: true
    }, toolbarProps.showDatePicker && /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      component: "div",
      sx: {
        display: 'flex'
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Hidden, {
      smDown: true
    }, /*#__PURE__*/React__default["default"].createElement(material.IconButton, _extends__default["default"]({
      sx: {
        ml: 0,
        mr: -.1
      }
    }, commonIconButtonProps, {
      onClick: function onClick() {
        return handleChangeDate((options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.sub : dateFns.sub);
      }
    }), /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(material.Button, {
      size: "small",
      id: "basic-button",
      "aria-haspopup": "true"
      //endIcon={<TodayIcon />}
      ,
      "aria-controls": "basic-menu",
      onClick: handleOpenDateSelector,
      sx: {
        color: 'text.primary'
      },
      "aria-expanded": openDateSelector ? 'true' : undefined
    }, (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(selectedDate, isMonthMode ? 'MMMM-yyyy' : 'PPP', {
      locale: dateFnsLocale
    }) : dateFns.format(selectedDate, isMonthMode ? 'MMMM-yyyy' : 'PPP', {
      locale: dateFnsLocale
    })), /*#__PURE__*/React__default["default"].createElement(material.IconButton, _extends__default["default"]({
      sx: {
        ml: .2
      }
    }, commonIconButtonProps, {
      onClick: function onClick() {
        return handleChangeDate((options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.add : dateFns.add);
      }
    }), /*#__PURE__*/React__default["default"].createElement(ChevronRightIcon__default["default"], null))), /*#__PURE__*/React__default["default"].createElement(material.Hidden, {
      smUp: true
    }, /*#__PURE__*/React__default["default"].createElement(material.IconButton, _extends__default["default"]({
      sx: {
        ml: 0,
        "aria-label": "menu"
      }
    }, commonIconButtonProps, {
      size: "small",
      onClick: handleOpenDateSelector
    }), /*#__PURE__*/React__default["default"].createElement(TodayIcon__default["default"], null))), /*#__PURE__*/React__default["default"].createElement(material.Menu, {
      id: "date-menu",
      anchorEl: anchorDateEl,
      open: openDateSelector,
      onClose: handleCloseDateSelector,
      MenuListProps: {
        'aria-labelledby': 'basic-button'
      }
    }, /*#__PURE__*/React__default["default"].createElement(LocalizationProvider__default["default"], {
      locale: dateFnsLocale,
      dateAdapter: (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? AdapterJalali__default["default"] : AdapterDateFns__default["default"]
    }, /*#__PURE__*/React__default["default"].createElement(StaticDatePicker__default["default"], {
      displayStaticWrapperAs: "desktop",
      value: selectedDate,
      onChange: function onChange(newValue) {
        setDaysInMonth((options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.getDaysInMonth(newValue) : dateFns.getDaysInMonth(newValue));
        setSelectedDate(newValue);
        handleCloseDateSelector();
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/React__default["default"].createElement(material.TextField, params);
      }
    }))))), /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: true,
      sm: true,
      md: true,
      sx: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Stack, {
      direction: "row",
      sx: {
        pr: .5,
        alignItems: 'center',
        justifyContent: 'flex-end'
      }
    }, (toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.showSearchBar) && /*#__PURE__*/React__default["default"].createElement(ToolbarSearchbar, {
      options: options,
      events: events,
      onInputChange: function onInputChange(newValue) {
        var newDate = new Date();
        if (newValue !== null && newValue !== void 0 && newValue.date) {
          newDate = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.parse(newValue.date, 'yyyy-MM-dd', today) : dateFns.parse(newValue.date, 'yyyy-MM-dd', today);
        }
        setDaysInMonth((options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.getDaysInMonth(newDate) : dateFns.getDaysInMonth(newDate));
        setSelectedDate(newDate);
        setSearchResult(newValue);
      }
    }), /*#__PURE__*/React__default["default"].createElement(material.Hidden, {
      mdUp: true
    }, /*#__PURE__*/React__default["default"].createElement(material.IconButton, _extends__default["default"]({
      sx: {
        mr: 0,
        "aria-label": "menu"
      }
    }, commonIconButtonProps, {
      size: "small",
      onClick: handleOpenDateSelector
    }), /*#__PURE__*/React__default["default"].createElement(GridViewIcon__default["default"], null))), /*#__PURE__*/React__default["default"].createElement(material.Hidden, {
      mdDown: true
    }, (toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.showSwitchModeButtons) && /*#__PURE__*/React__default["default"].createElement(material.ToggleButtonGroup, {
      exclusive: true,
      value: mode,
      size: "small",
      color: "primary",
      "aria-label": "text button group",
      sx: {
        mt: .2,
        mr: 1.3,
        display: 'contents'
      },
      onChange: function onChange(e, newMode) {
        setMode(newMode);
      }
    }, [{
      label: t('month'),
      value: 'month'
    }, {
      label: t('week'),
      value: 'week'
    }, {
      label: t('day'),
      value: 'day'
    }, {
      label: t('timeline'),
      value: 'timeline'
    }].map(function (tb) {
      return /*#__PURE__*/React__default["default"].createElement(material.ToggleButton, {
        sx: {
          mt: .5
        },
        key: tb.value,
        value: tb.value
      }, tb.label);
    }))))), /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 12,
      sx: {}
    }, /*#__PURE__*/React__default["default"].createElement(material.Menu, {
      id: "menu-menu",
      open: openMenu,
      anchorEl: anchorMenuEl,
      onClose: handleCloseMenu,
      onClick: handleCloseMenu,
      transformOrigin: {
        horizontal: 'right',
        vertical: 'top'
      },
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom'
      }
    }, menus.map(function (menu, index) {
      return /*#__PURE__*/React__default["default"].createElement(material.MenuItem, {
        key: menu.label
      }, /*#__PURE__*/React__default["default"].createElement(material.ListItemIcon, null, menu.icon), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
        variant: "body2"
      }, menu.label));
    }), /*#__PURE__*/React__default["default"].createElement(material.Divider, null), /*#__PURE__*/React__default["default"].createElement(material.MenuItem, null, /*#__PURE__*/React__default["default"].createElement(material.ListItemIcon, null, /*#__PURE__*/React__default["default"].createElement(SettingsIcon__default["default"], {
      fontSize: "small"
    })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      variant: "body2"
    }, "Settings"))), /*#__PURE__*/React__default["default"].createElement(material.Collapse, {
      "in": alertProps === null || alertProps === void 0 ? void 0 : alertProps.open
    }, /*#__PURE__*/React__default["default"].createElement(material.Alert, {
      color: alertProps === null || alertProps === void 0 ? void 0 : alertProps.color,
      severity: alertProps === null || alertProps === void 0 ? void 0 : alertProps.severity,
      sx: {
        borderRadius: 0,
        mb: 0
      },
      action: alertProps !== null && alertProps !== void 0 && alertProps.showActionButton ? /*#__PURE__*/React__default["default"].createElement(material.IconButton, {
        "aria-label": "close",
        color: "inherit",
        size: "small",
        onClick: handleCloseAlert
      }, /*#__PURE__*/React__default["default"].createElement(CloseIcon__default["default"], {
        fontSize: "inherit"
      })) : null
    }, alertProps === null || alertProps === void 0 ? void 0 : alertProps.message)))));
  }
  SchedulerToolbar.propTypes = {
    today: PropTypes__default["default"].object.isRequired,
    events: PropTypes__default["default"].array.isRequired,
    switchMode: PropTypes__default["default"].string.isRequired,
    alertProps: PropTypes__default["default"].object,
    toolbarProps: PropTypes__default["default"].object,
    onDateChange: PropTypes__default["default"].func.isRequired,
    onModeChange: PropTypes__default["default"].func.isRequired,
    onSearchResult: PropTypes__default["default"].func.isRequired,
    onAlertCloseButtonClicked: PropTypes__default["default"].func.isRequired
  };
  SchedulerToolbar.defaultProps = {
    alertProps: {
      open: false,
      message: '',
      color: 'info',
      severity: 'info',
      showActionButton: true
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true,
      showOptions: false
    }
  };

  function EventItem(props) {
    var event = props.event,
      rowId = props.rowId,
      sx = props.sx,
      boxSx = props.boxSx,
      elevation = props.elevation;
      props.isMonthMode;
      var onClick = props.onClick,
      onDragStart = props.onDragStart;
    return /*#__PURE__*/React__default["default"].createElement(material.Paper, {
      sx: sx,
      draggable: true,
      onClick: onClick,
      onDragStart: onDragStart,
      elevation: elevation || 0,
      key: "item-d-".concat(event === null || event === void 0 ? void 0 : event.id, "-").concat(rowId)
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      sx: boxSx
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      variant: "body2",
      sx: {
        fontSize: 11
      }
    }, event === null || event === void 0 ? void 0 : event.label)));
  }
  EventItem.propTypes = {
    sx: PropTypes__default["default"].object,
    boxSx: PropTypes__default["default"].object,
    event: PropTypes__default["default"].object.isRequired,
    rowId: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
    isMonthMode: PropTypes__default["default"].bool,
    onClick: PropTypes__default["default"].func,
    handleTaskClick: PropTypes__default["default"].func,
    onCellDragStart: PropTypes__default["default"].func
  };

  function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var StyledTableCell$2 = styles.styled(material.TableCell)(function (_ref) {
    var theme = _ref.theme;
    return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "&.".concat(material.tableCellClasses.head), _defineProperty__default["default"]({
      borderTop: "1px ".concat(theme.palette.divider, " solid !important"),
      borderBottom: "1px ".concat(theme.palette.divider, " solid !important"),
      borderLeft: "1px ".concat(theme.palette.divider, " solid !important")
    }, '&:nth-of-type(1)', {
      borderLeft: "0px !important"
    })), "&.".concat(material.tableCellClasses.body), _defineProperty__default["default"](_defineProperty__default["default"]({
      fontSize: 12,
      height: 96,
      width: 64,
      maxWidth: 64,
      cursor: 'pointer',
      verticalAlign: "top",
      borderLeft: "1px ".concat(theme.palette.divider, " solid")
    }, '&:nth-of-type(7n+1)', {
      borderLeft: 0
    }), '&:nth-of-type(even)', {
      //backgroundColor: theme.palette.action.hover
    })), "&.".concat(material.tableCellClasses.body, ":hover"), {
      //backgroundColor: "#eee"
    });
  });
  var StyledTableRow$2 = styles.styled(material.TableRow)(function (_ref3) {
    _ref3.theme;
    return _defineProperty__default["default"]({}, '&:last-child td, &:last-child th', {
      border: 0
    });
  });
  function MonthModeView(props) {
    var _columns$filter;
    var rows = props.rows;
      props.locale;
      var options = props.options,
      columns = props.columns,
      legacyStyle = props.legacyStyle,
      searchResult = props.searchResult,
      onTaskClick = props.onTaskClick,
      onCellClick = props.onCellClick,
      onEventsChange = props.onEventsChange;
    var theme = styles.useTheme();
    var _useState = React.useState({}),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];
    var _useTranslation = reactI18next.useTranslation(['common']);
      _useTranslation.t;
    var today = new Date();
    var currentDaySx = {
      width: 24,
      height: 22,
      margin: 'auto',
      display: 'block',
      paddingTop: '2px',
      borderRadius: '50%'
      //padding: '1px 7px',
      //width: 'fit-content'
    };
    console.log(props.rows);
    var onCellDragOver = function onCellDragOver(e) {
      e.preventDefault();
    };
    var onCellDragStart = function onCellDragStart(e, item, rowIndex) {
      setState(_objectSpread$3(_objectSpread$3({}, state), {}, {
        itemTransfert: {
          item: item,
          rowIndex: rowIndex
        }
      }));
    };
    var onCellDragEnter = function onCellDragEnter(e, elementId, rowIndex) {
      e.preventDefault();
      setState(_objectSpread$3(_objectSpread$3({}, state), {}, {
        transfertTarget: {
          elementId: elementId,
          rowIndex: rowIndex
        }
      }));
    };
    var onCellDragEnd = function onCellDragEnd(e) {
      e.preventDefault();
      if (!state.itemTransfert && !state.transfertTarget) return;
      var transfert = state.itemTransfert;
      var transfertTarget = state.transfertTarget;
      var rowsCopy = Array.from(rows);
      var rowInd = rowsCopy.findIndex(function (d) {
        return d.id === transfertTarget.rowIndex;
      });
      if (rowInd !== -1) {
        var _rowsCopy$rowInd, _rowsCopy$rowInd$days;
        var dayInd = (_rowsCopy$rowInd = rowsCopy[rowInd]) === null || _rowsCopy$rowInd === void 0 ? void 0 : (_rowsCopy$rowInd$days = _rowsCopy$rowInd.days) === null || _rowsCopy$rowInd$days === void 0 ? void 0 : _rowsCopy$rowInd$days.findIndex(function (d) {
          return d.id === transfertTarget.elementId;
        });
        if (dayInd !== -1) {
          var _rowsCopy$rowInd2, _transfert$item, _transfert$item$date, _transfert$item2;
          var day = (_rowsCopy$rowInd2 = rowsCopy[rowInd]) === null || _rowsCopy$rowInd2 === void 0 ? void 0 : _rowsCopy$rowInd2.days[dayInd];
          var splittedDate = transfert === null || transfert === void 0 ? void 0 : (_transfert$item = transfert.item) === null || _transfert$item === void 0 ? void 0 : (_transfert$item$date = _transfert$item.date) === null || _transfert$item$date === void 0 ? void 0 : _transfert$item$date.split('-');
          if (!(transfert !== null && transfert !== void 0 && (_transfert$item2 = transfert.item) !== null && _transfert$item2 !== void 0 && _transfert$item2.day)) {
            // Get day of the date (DD)
            transfert.item.day = parseInt(splittedDate[2]);
          }
          if (transfert.item.day !== (day === null || day === void 0 ? void 0 : day.day)) {
            var itemCheck = day.data.findIndex(function (item) {
              return item.day === transfert.item.day && item.label === transfert.item.label;
            });
            if (itemCheck === -1) {
              var _prevDayEvents$data, _prevDayEvents$data2;
              var prevDayEvents = rowsCopy[transfert.rowIndex].days.find(function (d) {
                return d.day === transfert.item.day;
              });
              var itemIndexToRemove = prevDayEvents === null || prevDayEvents === void 0 ? void 0 : (_prevDayEvents$data = prevDayEvents.data) === null || _prevDayEvents$data === void 0 ? void 0 : _prevDayEvents$data.findIndex(function (i) {
                return i.id === transfert.item.id;
              });
              if (itemIndexToRemove === undefined || itemIndexToRemove === -1) {
                return;
              }
              prevDayEvents === null || prevDayEvents === void 0 ? void 0 : (_prevDayEvents$data2 = prevDayEvents.data) === null || _prevDayEvents$data2 === void 0 ? void 0 : _prevDayEvents$data2.splice(itemIndexToRemove, 1);
              transfert.item.day = day === null || day === void 0 ? void 0 : day.day;
              transfert.item.date = dateFns.format(day === null || day === void 0 ? void 0 : day.date, 'yyyy-MM-dd');
              day.data.push(transfert.item);
              setState(_objectSpread$3(_objectSpread$3({}, state), {}, {
                rows: rowsCopy,
                itemTransfert: null,
                transfertTarget: null
              }));
              onEventsChange && onEventsChange(transfert.item);
            }
          }
        }
      }
    };
    var handleCellClick = function handleCellClick(event, row, day) {
      var _day$data;
      event.preventDefault();
      event.stopPropagation();
      if ((day === null || day === void 0 ? void 0 : (_day$data = day.data) === null || _day$data === void 0 ? void 0 : _day$data.length) === 0 && onCellClick) {
        onCellClick(event, row, day);
      }
    };

    /**
     * @name renderTask
     * @description
     * @param tasks
     * @param rowId
     * @return {unknown[] | undefined}
     */
    var renderTask = function renderTask() {
      var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var rowId = arguments.length > 1 ? arguments[1] : undefined;
      return tasks === null || tasks === void 0 ? void 0 : tasks.map(function (task, index) {
        var condition = searchResult ? (task === null || task === void 0 ? void 0 : task.groupLabel) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.groupLabel) || (task === null || task === void 0 ? void 0 : task.user) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.user) : !searchResult;
        return condition && /*#__PURE__*/React__default["default"].createElement(EventItem, {
          isMonthMode: true,
          event: task,
          rowId: rowId,
          elevation: 0,
          boxSx: {
            px: 0.5
          },
          key: "item-d-".concat(task === null || task === void 0 ? void 0 : task.id, "-").concat(rowId),
          onClick: function onClick(e) {
            return handleTaskClick(e, task);
          },
          onDragStart: function onDragStart(e) {
            return onCellDragStart(e, task, rowId);
          },
          sx: {
            width: "100%",
            py: 0,
            my: .3,
            color: "#fff",
            display: 'inline-flex',
            backgroundColor: (task === null || task === void 0 ? void 0 : task.color) || theme.palette.primary.light
          }
        });
      });
    };

    /**
     * @name handleTaskClick
     * @description
     * @param event
     * @param task
     * @return void
     */
    var handleTaskClick = function handleTaskClick(event, task) {
      event.preventDefault();
      event.stopPropagation();
      onTaskClick && onTaskClick(event, task);
    };
    var hiddenDays = (options === null || options === void 0 ? void 0 : options.hiddenDays) || [];
    return /*#__PURE__*/React__default["default"].createElement(material.TableContainer, {
      component: material.Paper,
      sx: {
        boxShadow: 'none'
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Table, {
      size: "small",
      "aria-label": "simple table",
      stickyHeader: true,
      sx: {
        minWidth: (options === null || options === void 0 ? void 0 : options.minWidth) || 650
      }
    }, legacyStyle && /*#__PURE__*/React__default["default"].createElement(material.TableHead, {
      sx: {
        height: 24
      }
    }, /*#__PURE__*/React__default["default"].createElement(StyledTableRow$2, null, columns === null || columns === void 0 ? void 0 : (_columns$filter = columns.filter(function (column) {
      return (hiddenDays === null || hiddenDays === void 0 ? void 0 : hiddenDays.indexOf(column.dayName)) < 0;
    })) === null || _columns$filter === void 0 ? void 0 : _columns$filter.map(function (column, index) {
      return /*#__PURE__*/React__default["default"].createElement(StyledTableCell$2, {
        align: "center",
        key: (column === null || column === void 0 ? void 0 : column.headerName) + '-' + index
      }, column === null || column === void 0 ? void 0 : column.headerName);
    }))), /*#__PURE__*/React__default["default"].createElement(material.TableBody, null, rows === null || rows === void 0 ? void 0 : rows.map(function (row, index) {
      var _row$days;
      return /*#__PURE__*/React__default["default"].createElement(StyledTableRow$2, {
        key: "row-".concat(row.id, "-").concat(index),
        sx: {
          '&:last-child th': {
            border: 0,
            borderLeft: "1px ".concat(theme.palette.divider, " solid"),
            '&:firs-child': {
              borderLeft: 0
            }
          }
        }
      }, row === null || row === void 0 ? void 0 : (_row$days = row.days) === null || _row$days === void 0 ? void 0 : _row$days.filter(function (day) {
        return (hiddenDays === null || hiddenDays === void 0 ? void 0 : hiddenDays.indexOf(day.dayName)) < 0;
      }).map(function (day, indexD) {
        var _columns$filter$index, _columns$filter$index2, _day$data2, _day$data3;
        var currentDay = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? day.day === today.getUTCDate() && dateFnsJalali.isSameMonth(day.date, today) : day.day === today.getUTCDate() && dateFns.isSameMonth(day.date, today);
        return /*#__PURE__*/React__default["default"].createElement(StyledTableCell$2, {
          scope: "row",
          align: "center",
          component: "th",
          sx: {
            px: 0.5,
            position: 'relative'
          },
          key: "day-".concat(day.id),
          onDragEnd: onCellDragEnd,
          onDragOver: onCellDragOver,
          onDragEnter: function onDragEnter(e) {
            return onCellDragEnter(e, day.id, row.id);
          },
          onClick: function onClick(event) {
            return handleCellClick(event, row, day);
          }
        }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
          sx: {
            height: '100%',
            overflowY: 'visible'
          }
        }, !legacyStyle && index === 0 && (columns === null || columns === void 0 ? void 0 : (_columns$filter$index = columns.filter(function (column) {
          return (hiddenDays === null || hiddenDays === void 0 ? void 0 : hiddenDays.indexOf(column.dayName)) < 0;
        })[indexD]) === null || _columns$filter$index === void 0 ? void 0 : (_columns$filter$index2 = _columns$filter$index.headerName) === null || _columns$filter$index2 === void 0 ? void 0 : _columns$filter$index2.toUpperCase()), ".", /*#__PURE__*/React__default["default"].createElement(material.Typography, {
          variant: "body2",
          sx: _objectSpread$3(_objectSpread$3({}, currentDaySx), {}, {
            background: currentDay && styles.alpha(theme.palette.primary.main, 1),
            color: currentDay && '#fff'
          })
        }, day.day), (day === null || day === void 0 ? void 0 : (_day$data2 = day.data) === null || _day$data2 === void 0 ? void 0 : _day$data2.length) > 0 && renderTask(day === null || day === void 0 ? void 0 : day.data, row.id), legacyStyle && (day === null || day === void 0 ? void 0 : (_day$data3 = day.data) === null || _day$data3 === void 0 ? void 0 : _day$data3.length) === 0 && /*#__PURE__*/React__default["default"].createElement(EventNoteRoundedIcon__default["default"], {
          fontSize: "small",
          htmlColor: theme.palette.divider
        })));
      }));
    }))));
  }
  MonthModeView.propTypes = {
    columns: PropTypes__default["default"].array,
    rows: PropTypes__default["default"].array,
    date: PropTypes__default["default"].string,
    options: PropTypes__default["default"].object,
    onDateChange: PropTypes__default["default"].func,
    onTaskClick: PropTypes__default["default"].func,
    onCellClick: PropTypes__default["default"].func
  };
  MonthModeView.defaultProps = {
    columns: [],
    rows: []
  };

  function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var StyledTableCell$1 = styles.styled(material.TableCell)(function (_ref) {
    _ref.theme;
    return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "&.".concat(material.tableCellClasses.head), _defineProperty__default["default"]({
      paddingLeft: 4,
      paddingRight: 4,
      borderTop: "1px solid #ccc !important",
      borderBottom: "1px solid #ccc !important",
      borderLeft: "1px solid #ccc !important"
    }, '&:nth-of-type(1)', {
      borderLeft: "0px !important"
    })), "&.".concat(material.tableCellClasses.body), _defineProperty__default["default"](_defineProperty__default["default"]({
      fontSize: 12,
      height: 16,
      width: 128,
      maxWidth: 128,
      cursor: 'pointer',
      borderLeft: "1px solid #ccc"
    }, '&:nth-of-type(1)', {
      width: 80,
      maxWidth: 80
    }), '&:nth-of-type(8n+1)', {
      borderLeft: 0
    })), "&.".concat(material.tableCellClasses.body, ":hover"), {
      backgroundColor: "#eee"
    });
  });
  var StyledTableRow$1 = styles.styled(material.TableRow)(function (_ref3) {
    _ref3.theme;
    return _defineProperty__default["default"]({}, '&:last-child td, &:last-child th', {
      border: 0
    });
  });
  var StyledTableContainer$1 = styles.styled(material.TableContainer)(function (_ref5) {
    _ref5.theme;
    return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, '&::-webkit-scrollbar', {
      width: 7,
      height: 6
    }), '&::-webkit-scrollbar-track', {
      WebkitBoxShadow: "inset 0 0 6px rgb(125, 161, 196, 0.5)"
    }), '&::-webkit-scrollbar-thumb', {
      WebkitBorderRadius: 4,
      borderRadius: 4,
      background: "rgba(0, 172, 193, .5)",
      WebkitBoxShadow: "inset 0 0 6px rgba(25, 118, 210, .5)"
    }), '&::-webkit-scrollbar-thumb:window-inactive', {
      background: "rgba(125, 161, 196, 0.5)"
    });
  });
  function WeekModeView(props) {
    var options = props.options,
      columns = props.columns,
      rows = props.rows,
      searchResult = props.searchResult,
      onTaskClick = props.onTaskClick,
      onCellClick = props.onCellClick,
      onEventsChange = props.onEventsChange;
    var theme = styles.useTheme();
    var _useState = React.useState({
        columns: columns,
        rows: rows
      }),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];
    var onCellDragOver = function onCellDragOver(e) {
      e.preventDefault();
    };
    var onCellDragStart = function onCellDragStart(e, item, rowLabel, rowIndex, dayIndex) {
      setState(_objectSpread$2(_objectSpread$2({}, state), {}, {
        itemTransfert: {
          item: item,
          rowLabel: rowLabel,
          rowIndex: rowIndex,
          dayIndex: dayIndex
        }
      }));
    };
    var onCellDragEnter = function onCellDragEnter(e, rowLabel, rowIndex, dayIndex) {
      e.preventDefault();
      setState(_objectSpread$2(_objectSpread$2({}, state), {}, {
        transfertTarget: {
          rowLabel: rowLabel,
          rowIndex: rowIndex,
          dayIndex: dayIndex
        }
      }));
    };
    var onCellDragEnd = function onCellDragEnd(e) {
      var _rowsData$transfertTa;
      e.preventDefault();
      if (!state.itemTransfert || !state.transfertTarget) {
        return;
      }
      var transfert = state.itemTransfert;
      var transfertTarget = state.transfertTarget;
      var rowsData = Array.from(rows);
      var day = (_rowsData$transfertTa = rowsData[transfertTarget.rowIndex]) === null || _rowsData$transfertTa === void 0 ? void 0 : _rowsData$transfertTa.days[transfertTarget.dayIndex];
      if (day) {
        var _transfertTarget$rowL, _prevEventCell$data;
        var hourRegExp = /[0-9]{2}:[0-9]{2}/;
        var foundEventIndex = day.data.findIndex(function (e) {
          return e.id === transfert.item.id && e.startHour === transfert.item.startHour && e.endHour === transfert.item.endHour;
        });
        // Task already exists in the data array of the chosen cell
        if (foundEventIndex !== -1) {
          return;
        }

        // Event cell item to transfert
        var prevEventCell = rowsData[transfert.rowIndex].days[transfert.dayIndex];
        // Timeline label (00:00 am, 01:00 am, etc.)
        var label = (_transfertTarget$rowL = transfertTarget.rowLabel) === null || _transfertTarget$rowL === void 0 ? void 0 : _transfertTarget$rowL.toUpperCase();
        var hourLabel = hourRegExp.exec(label)[0];
        // Event's end hour
        var endHour = hourRegExp.exec(transfert.item.endHour)[0];
        var endHourDate = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.parse(endHour, 'HH:mm', day.date) : dateFns.parse(endHour, 'HH:mm', day.date);
        // Event start hour
        var startHour = hourRegExp.exec(transfert.item.startHour)[0];
        var startHourDate = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.parse(startHour, 'HH:mm', day.date) : dateFns.parse(startHour, 'HH:mm', day.date);
        // Minutes difference between end and start event hours
        var minutesDiff = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.differenceInMinutes(endHourDate, startHourDate) : dateFns.differenceInMinutes(endHourDate, startHourDate);
        // New event end hour according to it new cell
        var newEndHour = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.add(dateFnsJalali.parse(hourLabel, 'HH:mm', day.date), {
          minutes: minutesDiff
        }) : dateFns.add(dateFns.parse(hourLabel, 'HH:mm', day.date), {
          minutes: minutesDiff
        });
        if (!dateFns.isValid(startHourDate) && (options === null || options === void 0 ? void 0 : options.adapter) !== 'jalali') {
          startHourDate = day.date;
          minutesDiff = dateFns.differenceInMinutes(endHourDate, startHourDate);
          newEndHour = dateFns.add(dateFns.parse(hourLabel, 'HH:mm', day.date), {
            minutes: minutesDiff
          });
        } else if (!dateFnsJalali.isValid(startHourDate) && (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali') {
          startHourDate = day.date;
          minutesDiff = dateFnsJalali.differenceInMinutes(endHourDate, startHourDate);
          newEndHour = dateFnsJalali.add(dateFnsJalali.parse(hourLabel, 'HH:mm', day.date), {
            minutes: minutesDiff
          });
        }
        prevEventCell === null || prevEventCell === void 0 ? void 0 : (_prevEventCell$data = prevEventCell.data) === null || _prevEventCell$data === void 0 ? void 0 : _prevEventCell$data.splice(transfert.item.itemIndex, 1);
        transfert.item.startHour = label;
        transfert.item.endHour = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(newEndHour, 'HH:mm aaa') : dateFns.format(newEndHour, 'HH:mm aaa');
        transfert.item.date = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(day.date, 'yyyy-MM-dd') : dateFns.format(day.date, 'yyyy-MM-dd');
        day.data.push(transfert.item);
        setState(_objectSpread$2(_objectSpread$2({}, state), {}, {
          rows: rowsData
        }));
        onEventsChange && onEventsChange(transfert.item);
      }
    };
    var handleCellClick = function handleCellClick(event, row, day) {
      event.preventDefault();
      event.stopPropagation();
      //setState({...state, activeItem: day})
      onCellClick && onCellClick(event, row, day);
    };

    /**
     * @name renderTask
     * @description
     * @param tasks
     * @param rowLabel
     * @param rowIndex
     * @param dayIndex
     * @return {unknown[] | undefined}
     */
    var renderTask = function renderTask(tasks, rowLabel, rowIndex, dayIndex) {
      return tasks === null || tasks === void 0 ? void 0 : tasks.map(function (task, itemIndex) {
        var condition = searchResult ? (task === null || task === void 0 ? void 0 : task.groupLabel) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.groupLabel) || (task === null || task === void 0 ? void 0 : task.user) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.user) : !searchResult;
        return condition && /*#__PURE__*/React__default["default"].createElement(EventItem, {
          event: task,
          elevation: 0,
          boxSx: {
            px: 0.3
          },
          onClick: function onClick(e) {
            return handleTaskClick(e, task);
          },
          key: "item_id-".concat(itemIndex, "_r-").concat(rowIndex, "_d-").concat(dayIndex),
          onDragStart: function onDragStart(e) {
            return onCellDragStart(e, _objectSpread$2(_objectSpread$2({}, task), {}, {
              itemIndex: itemIndex
            }), rowLabel, rowIndex, dayIndex);
          },
          sx: {
            py: 0,
            mb: .5,
            color: "#fff",
            backgroundColor: (task === null || task === void 0 ? void 0 : task.color) || theme.palette.primary.light
          }
        });
      });
    };

    /**
     * @name handleTaskClick
     * @description
     * @param event
     * @param task
     * @return void
     */
    var handleTaskClick = function handleTaskClick(event, task) {
      event.preventDefault();
      event.stopPropagation();
      onTaskClick && onTaskClick(event, task);
    };
    return /*#__PURE__*/React__default["default"].createElement(StyledTableContainer$1, {
      component: material.Paper,
      sx: {
        maxHeight: (options === null || options === void 0 ? void 0 : options.maxHeight) || 540
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Table, {
      size: "small",
      "aria-label": "simple table",
      stickyHeader: true,
      sx: {
        minWidth: options.minWidth || 540
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.TableHead, {
      sx: {
        height: 24
      }
    }, /*#__PURE__*/React__default["default"].createElement(StyledTableRow$1, null, /*#__PURE__*/React__default["default"].createElement(StyledTableCell$1, {
      align: "left"
    }), columns === null || columns === void 0 ? void 0 : columns.map(function (column, index) {
      return /*#__PURE__*/React__default["default"].createElement(StyledTableCell$1, {
        align: "center",
        key: "weekday-".concat(column === null || column === void 0 ? void 0 : column.day, "-").concat(index)
      }, column === null || column === void 0 ? void 0 : column.weekDay, " ", column === null || column === void 0 ? void 0 : column.month, "/", column === null || column === void 0 ? void 0 : column.day);
    }))), /*#__PURE__*/React__default["default"].createElement(material.TableBody, null, rows === null || rows === void 0 ? void 0 : rows.map(function (row, rowIndex) {
      var _row$days, _row$data, _row$days2;
      var lineTasks = (_row$days = row.days) === null || _row$days === void 0 ? void 0 : _row$days.reduce(function (prev, curr) {
        var _curr$data;
        return prev + (curr === null || curr === void 0 ? void 0 : (_curr$data = curr.data) === null || _curr$data === void 0 ? void 0 : _curr$data.length);
      }, 0);
      return /*#__PURE__*/React__default["default"].createElement(StyledTableRow$1, {
        key: "timeline-".concat(rowIndex),
        sx: {
          '&:last-child td, &:last-child th': {
            border: 0
          }
        }
      }, /*#__PURE__*/React__default["default"].createElement(material.Tooltip, {
        placement: "right",
        title: "".concat(lineTasks, " event").concat(lineTasks > 1 ? 's' : '', " on this week timeline")
      }, /*#__PURE__*/React__default["default"].createElement(StyledTableCell$1, {
        scope: "row",
        align: "center",
        component: "th",
        sx: {
          px: 1
        },
        onClick: function onClick(event) {
          return handleCellClick(event, row);
        }
      }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
        variant: "body2"
      }, row === null || row === void 0 ? void 0 : row.label), (row === null || row === void 0 ? void 0 : (_row$data = row.data) === null || _row$data === void 0 ? void 0 : _row$data.length) > 0 && renderTask(row === null || row === void 0 ? void 0 : row.data, row.id))), row === null || row === void 0 ? void 0 : (_row$days2 = row.days) === null || _row$days2 === void 0 ? void 0 : _row$days2.map(function (day, dayIndex) {
        var _day$data;
        return /*#__PURE__*/React__default["default"].createElement(StyledTableCell$1, {
          key: day === null || day === void 0 ? void 0 : day.id,
          scope: "row",
          align: "center",
          component: "th",
          sx: {
            px: .3,
            py: .5
            //backgroundColor: (
            //  state?.activeItem?.id === day?.id ? theme.palette.action.hover : 'inherit'
            //)
          },
          onDragEnd: onCellDragEnd,
          onDragOver: onCellDragOver,
          onDragEnter: function onDragEnter(e) {
            return onCellDragEnter(e, row === null || row === void 0 ? void 0 : row.label, rowIndex, dayIndex);
          },
          onClick: function onClick(event) {
            return handleCellClick(event, _objectSpread$2({
              rowIndex: rowIndex
            }, row), _objectSpread$2({
              dayIndex: dayIndex
            }, day));
          }
        }, (day === null || day === void 0 ? void 0 : (_day$data = day.data) === null || _day$data === void 0 ? void 0 : _day$data.length) > 0 && renderTask(day === null || day === void 0 ? void 0 : day.data, row === null || row === void 0 ? void 0 : row.label, rowIndex, dayIndex));
      }));
    }))));
  }
  WeekModeView.propTypes = {
    events: PropTypes__default["default"].array,
    columns: PropTypes__default["default"].array,
    rows: PropTypes__default["default"].array,
    date: PropTypes__default["default"].string,
    options: PropTypes__default["default"].object,
    searchResult: PropTypes__default["default"].object,
    onDateChange: PropTypes__default["default"].func.isRequired,
    onTaskClick: PropTypes__default["default"].func.isRequired,
    onCellClick: PropTypes__default["default"].func.isRequired,
    onEventsChange: PropTypes__default["default"].func.isRequired
  };
  WeekModeView.defaultProps = {};

  function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var StyledTableCell = system.styled(material.TableCell)(function (_ref) {
    _ref.theme;
    return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "&.".concat(material.tableCellClasses.head), _defineProperty__default["default"]({
      paddingLeft: 4,
      paddingRight: 4,
      borderTop: "1px solid #ccc !important",
      borderBottom: "1px solid #ccc !important",
      borderLeft: "1px solid #ccc !important"
    }, '&:nth-of-type(1)', {
      borderLeft: "0px !important"
    })), "&.".concat(material.tableCellClasses.body), _defineProperty__default["default"]({
      fontSize: 12,
      height: 16,
      width: 128,
      maxWidth: 128,
      cursor: 'pointer',
      borderLeft: "1px solid #ccc"
    }, '&:nth-of-type(1)', {
      borderLeft: 0
    })), "&.".concat(material.tableCellClasses.body, ":hover"), {
      backgroundColor: "#eee"
    });
  });
  var StyledTableRow = system.styled(material.TableRow)(function (_ref3) {
    _ref3.theme;
    return _defineProperty__default["default"]({}, '&:last-child td, &:last-child th', {
      border: 0
    });
  });
  var StyledTableContainer = system.styled(material.TableContainer)(function (_ref5) {
    _ref5.theme;
    return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, '&::-webkit-scrollbar', {
      width: 7,
      height: 6
    }), '&::-webkit-scrollbar-track', {
      WebkitBoxShadow: "inset 0 0 6px rgb(125, 161, 196, 0.5)"
    }), '&::-webkit-scrollbar-thumb', {
      WebkitBorderRadius: 4,
      borderRadius: 4,
      background: "rgba(0, 172, 193, .5)",
      WebkitBoxShadow: "inset 0 0 6px rgba(25, 118, 210, .5)"
    }), '&::-webkit-scrollbar-thumb:window-inactive', {
      background: "rgba(125, 161, 196, 0.5)"
    });
  });
  function DayModeView(props) {
    var options = props.options,
      columns = props.columns,
      rows = props.rows,
      searchResult = props.searchResult,
      onTaskClick = props.onTaskClick,
      onCellClick = props.onCellClick,
      onEventsChange = props.onEventsChange;
    var theme = styles.useTheme();
    var _useState = React.useState({
        columns: columns,
        rows: rows
      }),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

    /**
     * @name onCellDragOver
     * @param e
     * @return void
     */
    var onCellDragOver = function onCellDragOver(e) {
      e.preventDefault();
    };

    /**
     * @name onCellDragStart
     * @description
     * @param e
     * @param item
     * @param rowLabel
     * @param rowIndex
     * @param dayIndex
     * @return void
     */
    var onCellDragStart = function onCellDragStart(e, item, rowLabel, rowIndex, dayIndex) {
      setState(_objectSpread$1(_objectSpread$1({}, state), {}, {
        itemTransfert: {
          item: item,
          rowLabel: rowLabel,
          rowIndex: rowIndex,
          dayIndex: dayIndex
        }
      }));
    };

    /**
     * @name onCellDragEnter
     * @description
     * @param e
     * @param rowLabel
     * @param rowIndex
     * @param dayIndex
     * @return void
     */
    var onCellDragEnter = function onCellDragEnter(e, rowLabel, rowIndex, dayIndex) {
      e.preventDefault();
      setState(_objectSpread$1(_objectSpread$1({}, state), {}, {
        transfertTarget: {
          rowLabel: rowLabel,
          rowIndex: rowIndex,
          dayIndex: dayIndex
        }
      }));
    };

    /**
     * @name onCellDragEnd
     * @description
     * @param e
     * @return void
     */
    var onCellDragEnd = function onCellDragEnd(e) {
      var _rowsData$transfertTa;
      e.preventDefault();
      if (!state.itemTransfert || !state.transfertTarget) {
        return;
      }
      var transfert = state.itemTransfert;
      var transfertTarget = state.transfertTarget;
      var rowsData = Array.from(rows);
      var day = (_rowsData$transfertTa = rowsData[transfertTarget.rowIndex]) === null || _rowsData$transfertTa === void 0 ? void 0 : _rowsData$transfertTa.days[transfertTarget.dayIndex];
      if (day) {
        var _transfertTarget$rowL, _prevEventCell$data, _transfert$item;
        var hourRegExp = /[0-9]{2}:[0-9]{2}/;
        var foundEventIndex = day.data.findIndex(function (e) {
          return e.id === transfert.item.id && e.startHour === transfert.item.startHour && e.endHour === transfert.item.endHour;
        });
        // Task already exists in the data array of the chosen cell
        if (foundEventIndex !== -1) {
          return;
        }

        // Event cell item to transfert
        var prevEventCell = rowsData[transfert.rowIndex].days[transfert.dayIndex];
        // Timeline label (00:00 am, 01:00 am, etc.)
        var label = (_transfertTarget$rowL = transfertTarget.rowLabel) === null || _transfertTarget$rowL === void 0 ? void 0 : _transfertTarget$rowL.toUpperCase();
        var hourLabel = hourRegExp.exec(label)[0];
        // Event's end hour
        var endHour = hourRegExp.exec(transfert.item.endHour)[0];
        var endHourDate = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.parse(endHour, 'HH:mm', day.date) : dateFns.parse(endHour, 'HH:mm', day.date);
        // Event start hour
        var startHour = hourRegExp.exec(transfert.item.startHour)[0];
        var startHourDate = options !== null && options !== void 0 && options.adapter ? dateFnsJalali.parse(startHour, 'HH:mm', day.date) : dateFns.parse(startHour, 'HH:mm', day.date);
        // Minutes difference between end and start event hours
        var minutesDiff = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.differenceInMinutes(endHourDate, startHourDate) : dateFns.differenceInMinutes(endHourDate, startHourDate);
        // New event end hour according to it new cell
        var newEndHour = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.add(dateFnsJalali.parse(hourLabel, 'HH:mm', day.date), {
          minutes: minutesDiff
        }) : dateFns.add(dateFns.parse(hourLabel, 'HH:mm', day.date), {
          minutes: minutesDiff
        });
        if (!dateFns.isValid(startHourDate) && (options === null || options === void 0 ? void 0 : options.adapter) !== 'jalali') {
          startHourDate = day.date;
          minutesDiff = dateFns.differenceInMinutes(endHourDate, startHourDate);
          newEndHour = dateFns.add(dateFns.parse(hourLabel, 'HH:mm', day.date), {
            minutes: minutesDiff
          });
        } else if (!dateFnsJalali.isValid(startHourDate) && (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali') {
          startHourDate = day.date;
          minutesDiff = dateFnsJalali.differenceInMinutes(endHourDate, startHourDate);
          newEndHour = dateFnsJalali.add(dateFnsJalali.parse(hourLabel, 'HH:mm', day.date), {
            minutes: minutesDiff
          });
        }
        prevEventCell === null || prevEventCell === void 0 ? void 0 : (_prevEventCell$data = prevEventCell.data) === null || _prevEventCell$data === void 0 ? void 0 : _prevEventCell$data.splice(transfert === null || transfert === void 0 ? void 0 : (_transfert$item = transfert.item) === null || _transfert$item === void 0 ? void 0 : _transfert$item.itemIndex, 1);
        transfert.item.startHour = label;
        transfert.item.endHour = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(newEndHour, 'HH:mm aaa') : dateFns.format(newEndHour, 'HH:mm aaa');
        transfert.item.date = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(day.date, 'yyyy-MM-dd') : dateFns.format(day.date, 'yyyy-MM-dd');
        day.data.push(transfert.item);
        setState(_objectSpread$1(_objectSpread$1({}, state), {}, {
          rows: rowsData
        }));
        onEventsChange && onEventsChange(transfert.item);
      }
    };

    /**
     * @name handleCellClick
     * @description
     * @param event
     * @param row
     * @param day
     * @return void
     */
    var handleCellClick = function handleCellClick(event, row, day) {
      event.preventDefault();
      event.stopPropagation();
      //setState({...state, activeItem: day})
      onCellClick && onCellClick(event, row, day);
    };

    /**
     * @name renderTask
     * @description
     * @param tasks
     * @param rowLabel
     * @param rowIndex
     * @param dayIndex
     * @return {unknown[] | undefined}
     */
    var renderTask = function renderTask(tasks, rowLabel, rowIndex, dayIndex) {
      return tasks === null || tasks === void 0 ? void 0 : tasks.map(function (task, itemIndex) {
        var condition = searchResult ? (task === null || task === void 0 ? void 0 : task.groupLabel) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.groupLabel) || (task === null || task === void 0 ? void 0 : task.user) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.user) : !searchResult;
        return condition && /*#__PURE__*/React__default["default"].createElement(EventItem, {
          draggable: true,
          event: task,
          elevation: 0,
          boxSx: {
            px: 0.3
          },
          onClick: function onClick(e) {
            return handleTaskClick(e, task);
          },
          key: "item_id-".concat(itemIndex, "_r-").concat(rowIndex, "_d-").concat(dayIndex),
          onDragStart: function onDragStart(e) {
            return onCellDragStart(e, _objectSpread$1(_objectSpread$1({}, task), {}, {
              itemIndex: itemIndex
            }), rowLabel, rowIndex, dayIndex);
          },
          sx: {
            py: 0,
            mb: .5,
            color: "#fff",
            backgroundColor: (task === null || task === void 0 ? void 0 : task.color) || theme.palette.primary.light
          }
        });
      });
    };

    /**
     * @name handleTaskClick
     * @description
     * @param event
     * @param task
     * @return void
     */
    var handleTaskClick = function handleTaskClick(event, task) {
      event.preventDefault();
      event.stopPropagation();
      onTaskClick && onTaskClick(event, task);
    };
    return /*#__PURE__*/React__default["default"].createElement(StyledTableContainer, {
      component: material.Paper,
      sx: {
        maxHeight: (options === null || options === void 0 ? void 0 : options.maxHeight) || 540
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Table, {
      size: "small",
      "aria-label": "simple table",
      stickyHeader: true,
      sx: {
        minWidth: options.minWidth || 540
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.TableHead, {
      sx: {
        height: 24
      }
    }, /*#__PURE__*/React__default["default"].createElement(StyledTableRow, null, /*#__PURE__*/React__default["default"].createElement(StyledTableCell, {
      align: "left"
    }), columns === null || columns === void 0 ? void 0 : columns.map(function (column, index) {
      return /*#__PURE__*/React__default["default"].createElement(StyledTableCell, {
        align: "center",
        colSpan: 2,
        key: "weekday-".concat(column === null || column === void 0 ? void 0 : column.day, "-").concat(index)
      }, column === null || column === void 0 ? void 0 : column.weekDay, " ", column === null || column === void 0 ? void 0 : column.month, "/", column === null || column === void 0 ? void 0 : column.day);
    }))), /*#__PURE__*/React__default["default"].createElement(material.TableBody, null, rows === null || rows === void 0 ? void 0 : rows.map(function (row, rowIndex) {
      var _row$days, _row$data, _row$days2;
      var lineTasks = (_row$days = row.days) === null || _row$days === void 0 ? void 0 : _row$days.reduce(function (prev, curr) {
        var _curr$data;
        return prev + (curr === null || curr === void 0 ? void 0 : (_curr$data = curr.data) === null || _curr$data === void 0 ? void 0 : _curr$data.length);
      }, 0);
      return /*#__PURE__*/React__default["default"].createElement(StyledTableRow, {
        key: "timeline-".concat(rowIndex),
        sx: {
          '&:last-child td, &:last-child th': {
            border: 0
          }
        }
      }, /*#__PURE__*/React__default["default"].createElement(material.Tooltip, {
        placement: "right",
        title: "".concat(lineTasks, " event").concat(lineTasks > 1 ? 's' : '', " on this week timeline")
      }, /*#__PURE__*/React__default["default"].createElement(StyledTableCell, {
        scope: "row",
        align: "center",
        component: "th",
        sx: {
          px: 1
        },
        onClick: function onClick(event) {
          return handleCellClick(event, row);
        }
      }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
        variant: "body2"
      }, row === null || row === void 0 ? void 0 : row.label), (row === null || row === void 0 ? void 0 : (_row$data = row.data) === null || _row$data === void 0 ? void 0 : _row$data.length) > 0 && renderTask(row === null || row === void 0 ? void 0 : row.data, row.id))), row === null || row === void 0 ? void 0 : (_row$days2 = row.days) === null || _row$days2 === void 0 ? void 0 : _row$days2.map(function (day, dayIndex) {
        var _day$data;
        return /*#__PURE__*/React__default["default"].createElement(StyledTableCell, {
          key: day === null || day === void 0 ? void 0 : day.id,
          scope: "row",
          align: "center",
          component: "th",
          colSpan: 2,
          sx: {
            px: .3,
            py: .5
          },
          onDragEnd: onCellDragEnd,
          onDragOver: onCellDragOver,
          onDragEnter: function onDragEnter(e) {
            return onCellDragEnter(e, row === null || row === void 0 ? void 0 : row.label, rowIndex, dayIndex);
          },
          onClick: function onClick(event) {
            return handleCellClick(event, _objectSpread$1({
              rowIndex: rowIndex
            }, row), _objectSpread$1({
              dayIndex: dayIndex
            }, day));
          }
        }, (day === null || day === void 0 ? void 0 : (_day$data = day.data) === null || _day$data === void 0 ? void 0 : _day$data.length) > 0 && renderTask(day === null || day === void 0 ? void 0 : day.data, row === null || row === void 0 ? void 0 : row.label, rowIndex, dayIndex));
      }));
    }))));
  }
  DayModeView.propTypes = {
    events: PropTypes__default["default"].array,
    columns: PropTypes__default["default"].array,
    rows: PropTypes__default["default"].array,
    date: PropTypes__default["default"].string,
    options: PropTypes__default["default"].object,
    searchResult: PropTypes__default["default"].object,
    onDateChange: PropTypes__default["default"].func.isRequired,
    onTaskClick: PropTypes__default["default"].func.isRequired,
    onCellClick: PropTypes__default["default"].func.isRequired,
    onEventsChange: PropTypes__default["default"].func.isRequired
  };
  DayModeView.defaultProps = {};

  var StyledContainer = styles.styled(material.Typography)(function (_ref) {
    _ref.theme;
    return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, '&::-webkit-scrollbar', {
      width: 7,
      height: 6
    }), '&::-webkit-scrollbar-track', {
      WebkitBoxShadow: "inset 0 0 6px rgb(125, 161, 196, 0.5)"
    }), '&::-webkit-scrollbar-thumb', {
      WebkitBorderRadius: 4,
      borderRadius: 4,
      background: "rgba(0, 172, 193, .5)",
      WebkitBoxShadow: "inset 0 0 6px rgba(25, 118, 210, .5)"
    }), '&::-webkit-scrollbar-thumb:window-inactive', {
      background: "rgba(125, 161, 196, 0.5)"
    });
  });
  function TimeLineModeView(props) {
    var _fileredEvents2;
    var options = props.options,
      rows = props.rows,
      searchResult = props.searchResult,
      onTaskClick = props.onTaskClick;
    var dateFnsLocale = React.useContext(DateFnsLocaleContext);

    /**
     * @name handleTaskClick
     * @description
     * @param e
     * @param event
     * @return void
     */
    var handleTaskClick = function handleTaskClick(event, task) {
      event.preventDefault();
      event.stopPropagation();
      onTaskClick && onTaskClick(event, task);
    };
    var fileredEvents = rows === null || rows === void 0 ? void 0 : rows.sort(function (a, b) {
      var _b$startHour;
      return -(b === null || b === void 0 ? void 0 : (_b$startHour = b.startHour) === null || _b$startHour === void 0 ? void 0 : _b$startHour.localeCompare(a === null || a === void 0 ? void 0 : a.startHour));
    });
    if (searchResult) {
      var _fileredEvents;
      fileredEvents = (_fileredEvents = fileredEvents) === null || _fileredEvents === void 0 ? void 0 : _fileredEvents.filter(function (event) {
        return (event === null || event === void 0 ? void 0 : event.groupLabel) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.groupLabel);
      });
    }
    return /*#__PURE__*/React__default["default"].createElement(StyledContainer, {
      component: "div",
      sx: {
        overflowY: 'auto',
        height: (options === null || options === void 0 ? void 0 : options.height) || 540,
        maxHeight: (options === null || options === void 0 ? void 0 : options.maxHeight) || 540
      }
    }, /*#__PURE__*/React__default["default"].createElement(Timeline__default["default"], {
      position: "alternate"
    }, (_fileredEvents2 = fileredEvents) === null || _fileredEvents2 === void 0 ? void 0 : _fileredEvents2.map(function (task, index) {
      return /*#__PURE__*/React__default["default"].createElement(TimelineItem__default["default"], {
        key: "timeline-".concat(index),
        sx: {
          cursor: 'pointer'
        },
        onClick: function onClick(event) {
          return handleTaskClick(event, task);
        }
      }, /*#__PURE__*/React__default["default"].createElement(TimelineOppositeContent__default["default"], {
        sx: {
          m: 'auto 0'
        },
        align: "right",
        variant: "body2",
        color: "text.secondary"
      }, task !== null && task !== void 0 && task.date && (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(dateFnsJalali.parse(task === null || task === void 0 ? void 0 : task.date, 'yyyy-MM-dd', new Date()), 'PPP', {
        locale: dateFnsLocale
      }) : dateFns.format(dateFns.parse(task === null || task === void 0 ? void 0 : task.date, 'yyyy-MM-dd', new Date()), 'PPP', {
        locale: dateFnsLocale
      }), /*#__PURE__*/React__default["default"].createElement("br", null), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
        variant: "caption"
      }, task === null || task === void 0 ? void 0 : task.startHour, " - ", task === null || task === void 0 ? void 0 : task.endHour)), /*#__PURE__*/React__default["default"].createElement(TimelineSeparator__default["default"], null, /*#__PURE__*/React__default["default"].createElement(TimelineConnector__default["default"], null), /*#__PURE__*/React__default["default"].createElement(TimelineDot__default["default"], {
        color: "secondary",
        sx: {
          backgroundColor: task === null || task === void 0 ? void 0 : task.color
        }
      }, (task === null || task === void 0 ? void 0 : task.icon) || /*#__PURE__*/React__default["default"].createElement(ScheduleIcon__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(TimelineConnector__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(TimelineContent__default["default"], {
        sx: {
          py: '12px',
          px: 2
        }
      }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
        variant: "body1",
        component: "span"
      }, task === null || task === void 0 ? void 0 : task.label), /*#__PURE__*/React__default["default"].createElement(material.Typography, null, task === null || task === void 0 ? void 0 : task.groupLabel)));
    })));
  }
  TimeLineModeView.propTypes = {
    events: PropTypes__default["default"].array,
    columns: PropTypes__default["default"].array,
    rows: PropTypes__default["default"].array,
    date: PropTypes__default["default"].string,
    options: PropTypes__default["default"].object,
    searchResult: PropTypes__default["default"].object,
    onDateChange: PropTypes__default["default"].func.isRequired,
    onTaskClick: PropTypes__default["default"].func.isRequired,
    onCellClick: PropTypes__default["default"].func.isRequired,
    onEventsChange: PropTypes__default["default"].func.isRequired
  };
  TimeLineModeView.defaultProps = {};

  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

  /**
   * @name Scheduler
   * @description
   * @param props
   * @constructor
   */
  function Scheduler(props) {
    var events = props.events,
      locale$2 = props.locale,
      options = props.options,
      alertProps = props.alertProps,
      onCellClick = props.onCellClick,
      legacyStyle = props.legacyStyle,
      onTaskClick = props.onTaskClick,
      toolbarProps = props.toolbarProps,
      onEventsChange = props.onEventsChange,
      onAlertCloseButtonClicked = props.onAlertCloseButtonClicked;
    var today = new Date();
    styles.useTheme();
    var _useTranslation = reactI18next.useTranslation(['common']),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;
    var weeks = [t('mon'), t('tue'), t('wed'), t('thu'), t('fri'), t('sat'), t('sun')];
    var _useState = React.useState({}),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];
    var _useState3 = React.useState(),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      searchResult = _useState4[0],
      setSearchResult = _useState4[1];
    var _useState5 = React.useState(today),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      selectedDay = _useState6[0],
      setSelectedDay = _useState6[1];
    var _useState7 = React.useState(alertProps),
      _useState8 = _slicedToArray__default["default"](_useState7, 2),
      alertState = _useState8[0],
      setAlertState = _useState8[1];
    var _useState9 = React.useState((options === null || options === void 0 ? void 0 : options.defaultMode) || 'month'),
      _useState10 = _slicedToArray__default["default"](_useState9, 2),
      mode = _useState10[0],
      setMode = _useState10[1];
    var _ref = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? React.useState(dateFnsJalali.getDaysInMonth(today)) : React.useState(dateFns.getDaysInMonth(today)),
      _ref2 = _slicedToArray__default["default"](_ref, 2),
      daysInMonth = _ref2[0],
      setDaysInMonth = _ref2[1];
    var _useState11 = React.useState((options === null || options === void 0 ? void 0 : options.startWeekOn) || 'mon'),
      _useState12 = _slicedToArray__default["default"](_useState11, 2),
      startWeekOn = _useState12[0],
      setStartWeekOn = _useState12[1];
    var _useState13 = React.useState((options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(today, 'MMMM-yyyy') : dateFns.format(today, 'MMMM-yyyy')),
      _useState14 = _slicedToArray__default["default"](_useState13, 2),
      selectedDate = _useState14[0],
      setSelectedDate = _useState14[1];
    var _useReducer = React.useReducer(function (state) {
        var _options$startWeekOn, _options$startWeekOn2;
        if ((options === null || options === void 0 ? void 0 : (_options$startWeekOn = options.startWeekOn) === null || _options$startWeekOn === void 0 ? void 0 : _options$startWeekOn.toUpperCase()) === 'SUN') {
          return [t('sun'), t('mon'), t('tue'), t('wed'), t('thu'), t('fri'), t('sat')];
        } else if ((options === null || options === void 0 ? void 0 : (_options$startWeekOn2 = options.startWeekOn) === null || _options$startWeekOn2 === void 0 ? void 0 : _options$startWeekOn2.toUpperCase()) === 'SAT') {
          return [t('sat'), t('sun'), t('mon'), t('tue'), t('wed'), t('thu'), t('fri')];
        }
        return weeks;
      }, weeks),
      _useReducer2 = _slicedToArray__default["default"](_useReducer, 2),
      weekDays = _useReducer2[0],
      updateWeekDays = _useReducer2[1];
    var isDayMode = mode.toLowerCase() === 'day';
    var isWeekMode = mode.toLowerCase() === 'week';
    var isMonthMode = mode.toLowerCase() === 'month';
    var isTimelineMode = mode.toLowerCase() === 'timeline';
    var TransitionMode = (options === null || options === void 0 ? void 0 : options.transitionMode) === 'zoom' ? material.Zoom : (options === null || options === void 0 ? void 0 : options.transitionMode) === 'fade' ? material.Fade : material.Slide;
    var dateFnsLocale = locale$1.enAU;
    if (locale$2 === 'fr') {
      dateFnsLocale = locale$1.fr;
    }
    if (locale$2 === 'ko') {
      dateFnsLocale = locale$1.ko;
    }
    if (locale$2 === 'de') {
      dateFnsLocale = locale$1.de;
    }
    if (locale$2 === 'es') {
      dateFnsLocale = locale$1.es;
    }
    if (locale$2 === 'ar') {
      dateFnsLocale = locale$1.ar;
    }
    if (locale$2 === 'ja') {
      dateFnsLocale = locale$1.ja;
    }
    if (locale$2 === 'ru') {
      dateFnsLocale = locale$1.ru;
    }
    if (locale$2 === 'zh') {
      dateFnsLocale = locale$1.zhCN;
    }
    if (locale$2 === 'fa') {
      dateFnsLocale = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? locale.faIR : locale$1.faIR;
    }

    /**
     * @name getMonthHeader
     * @description
     * @return {{headerClassName: string, headerAlign: string, headerName: string, field: string, flex: number, editable: boolean, id: string, sortable: boolean, align: string}[]}
     */
    var getMonthHeader = function getMonthHeader() {
      //if (startWeekOn?.toUpperCase() === 'SUN') {
      //weekDays[0] = t('sun')
      //weekDays[1] = t('mon')
      //}
      return weekDays.map(function (day, i) {
        var days = getDays();
        return {
          id: "row-day-header-".concat(i + 1),
          flex: 1,
          sortable: false,
          editable: false,
          align: 'center',
          headerName: day,
          headerAlign: 'center',
          field: "rowday".concat(i + 1),
          headerClassName: 'scheduler-theme--header',
          dayName: days[i]
        };
      });
    };
    var getDays = function getDays() {
      var startOnSun = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      var startOnMon = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
      var startOnSat = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
      switch (startWeekOn) {
        case 'sat':
          return startOnSat;
        case 'sun':
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
    var getMonthRows = function getMonthRows() {
      var _lastRow$days;
      var rows = [],
        daysBefore = [];
      var iteration = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.getWeeksInMonth(selectedDay) : dateFns.getWeeksInMonth(selectedDay);
      console.log(1, iteration);
      var startOnSunday = (startWeekOn === null || startWeekOn === void 0 ? void 0 : startWeekOn.toUpperCase()) === 'SUN' && t('sun').toUpperCase() === weekDays[0].toUpperCase();
      var startOnSaturday = (startWeekOn === null || startWeekOn === void 0 ? void 0 : startWeekOn.toUpperCase()) === 'SAT' && t('sat').toUpperCase() === weekDays[0].toUpperCase();
      var getDayName = function getDayName(date) {
        var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        var d = new Date(date);
        var dayName = days[d.getDay()];
        return dayName;
      };
      var monthStartDate = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.startOfMonth(selectedDay) : dateFns.startOfMonth(selectedDay); // First day of month
      console.log(2, monthStartDate);
      var monthStartDay = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.getDay(monthStartDate) : dateFns.getDay(monthStartDate); // Index of the day in week
      console.log(3, monthStartDay);
      var dateDay = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? parseInt(dateFnsJalali.format(monthStartDate, 'dd')) : parseInt(dateFns.format(monthStartDate, 'dd')); // Month start day
      console.log(4, dateDay);
      // Condition check helper
      var checkCondition = function checkCondition(v) {
        return startOnSunday ? v <= monthStartDay : startOnSaturday ? v - 1 <= monthStartDay : v < monthStartDay;
      };
      if (monthStartDay >= 1) {
        var _loop = function _loop() {
          var subDate = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.sub(monthStartDate, {
            days: monthStartDay - i + (startOnSunday ? 1 : startOnSaturday ? 2 : 0)
          }) : dateFns.sub(monthStartDate, {
            days: monthStartDay - i + (startOnSunday ? 1 : startOnSaturday ? 2 : 0)
          });
          // console.log(5, subDate);
          var day = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? parseInt(dateFnsJalali.format(subDate, 'dd')) : parseInt(dateFns.format(subDate, 'dd'));
          // console.log(6, day);
          var data = events.filter(function (event) {
            return (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.isSameDay(subDate, dateFnsJalali.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date())) : dateFns.isSameDay(subDate, dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()));
          });
          // console.log(7, data);
          daysBefore.push({
            id: "day_-".concat(day),
            day: day,
            date: subDate,
            data: data,
            dayName: getDayName(subDate)
          });
        };
        // Add days of precedent month
        // If Sunday is the first day of week, apply b <= monthStartDay
        // and days: (monthStartDay-b) + 1
        for (var i = 1; checkCondition(i); i++) {
          _loop();
        }
      } else if (!startOnSunday || !startOnSaturday) {
        var _loop2 = function _loop2() {
          var subDate = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.sub(monthStartDate, {
            days: _i
          }) : dateFns.sub(monthStartDate, {
            days: _i
          });
          // console.log(8, subDate);
          var day = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? parseInt(dateFnsJalali.format(subDate, 'dd')) : parseInt(dateFns.format(subDate, 'dd'));
          // console.log(9, day);
          var data = events.filter(function (event) {
            return (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.isSameDay(subDate, dateFnsJalali.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date())) : dateFns.isSameDay(subDate, dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()));
          });
          // console.log(10, data);
          daysBefore.push({
            id: "day_-".concat(day),
            day: day,
            date: subDate,
            data: data,
            dayName: getDayName(subDate)
          });
        };
        for (var _i = 6; _i > 0; _i--) {
          _loop2();
        }
      }
      if (daysBefore.length > 0) {
        rows.push({
          id: 0,
          days: daysBefore
        });
      }

      // Add days and events data
      for (var _i2 = 0; _i2 < iteration; _i2++) {
        var obj = [];
        var _loop3 = function _loop3() {
          var date = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.parse("".concat(dateDay, "-").concat(selectedDate), 'dd-MMMM-yyyy', new Date()) : dateFns.parse("".concat(dateDay, "-").concat(selectedDate), 'dd-MMMM-yyyy', new Date());
          // console.log(11, date);
          var data = events.filter(function (event) {
            return (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.isSameDay(date, (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()) : dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date())) : dateFns.isSameDay(date, (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()) : dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()));
          });
          // console.log(12, data);
          obj.push({
            id: "day_-".concat(dateDay),
            date: date,
            data: data,
            day: dateDay,
            dayName: getDayName(date)
          });
          dateDay++;
        };
        for (var j = 0;
        // This condition ensure that days will not exceed 31
        // i === 0 ? 7 - daysBefore?.length means that we substract inserted days
        // in the first line to 7
        j < (_i2 === 0 ? 7 - daysBefore.length : 7) && dateDay <= daysInMonth; j++) {
          _loop3();
        }
        if (_i2 === 0 && daysBefore.length > 0) {
          rows[0].days = rows[0].days.concat(obj);
          continue;
        }
        if (obj.length > 0) {
          rows.push({
            id: _i2,
            days: obj
          });
        }
      }

      // Check if last row is not fully filled
      var lastRow = rows[iteration - 1];
      var lastRowDaysdiff = 7 - (lastRow === null || lastRow === void 0 ? void 0 : (_lastRow$days = lastRow.days) === null || _lastRow$days === void 0 ? void 0 : _lastRow$days.length);
      var lastDaysData = [];
      if (lastRowDaysdiff > 0) {
        var _lastRow$days2;
        var day = lastRow.days[(lastRow === null || lastRow === void 0 ? void 0 : (_lastRow$days2 = lastRow.days) === null || _lastRow$days2 === void 0 ? void 0 : _lastRow$days2.length) - 1];
        var addDate = day.date;
        for (var _i3 = dateDay; _i3 < dateDay + lastRowDaysdiff; _i3++) {
          addDate = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.add(addDate, {
            days: 1
          }) : dateFns.add(addDate, {
            days: 1
          });
          // console.log(13, addDate);
          var d = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(addDate, 'dd') : dateFns.format(addDate, 'dd');
          // console.log(14, d);
          // eslint-disable-next-line
          var data = events.filter(function (event) {
            return options.adapter === 'jalali' ? dateFnsJalali.isSameDay(addDate, dateFnsJalali.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date())) : dateFns.isSameDay(addDate, dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()));
          });
          lastDaysData.push({
            id: "day_-".concat(d),
            date: addDate,
            day: d,
            data: data,
            dayName: getDayName(addDate)
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
    var getWeekHeader = function getWeekHeader() {
      var data = [];
      var weekStart = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.startOfWeek(selectedDay, {
        weekStartsOn: startWeekOn === 'mon' ? 1 : 0
      }) : dateFns.startOfWeek(selectedDay, {
        weekStartsOn: startWeekOn === 'mon' ? 1 : 0
      });
      for (var i = 0; i < 7; i++) {
        var date = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.add(weekStart, {
          days: i
        }) : dateFns.add(weekStart, {
          days: i
        });
        data.push({
          date: date,
          weekDay: (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(date, 'iii', {
            locale: dateFnsLocale
          }) : dateFns.format(date, 'iii', {
            locale: dateFnsLocale
          }),
          day: (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(date, 'dd', {
            locale: dateFnsLocale
          }) : dateFns.format(date, 'dd', {
            locale: dateFnsLocale
          }),
          month: (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFns.format(date, 'MM', {
            locale: dateFnsLocale
          }) : dateFns.format(date, 'MM', {
            locale: dateFnsLocale
          })
        });
      }
      return data;
    };
    var getWeekRows = function getWeekRows() {
      var HOURS = 24; //* 2
      var data = [];
      var dayStartHour = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.startOfDay(selectedDay) : dateFns.startOfDay(selectedDay);
      var _loop4 = function _loop4() {
        var id = "line_".concat(i);
        var label = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(dayStartHour, 'HH:mm aaa') : dateFns.format(dayStartHour, 'HH:mm aaa');

        //TODO Add everyday event capability
        //if (i === 0) {
        //id = `line_everyday`; label = 'Everyday'
        //}
        //TODO Place the processing bloc here if everyday capability is available
        // ...

        if (i > 0) {
          //Start processing bloc
          var obj = {
            id: id,
            label: label,
            days: []
          };
          var columns = getWeekHeader();
          // eslint-disable-next-line
          columns.map(function (column, index) {
            var data = events.filter(function (event) {
              var _event$startHour;
              var eventDate = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()) : dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date());
              return (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.isSameDay(column === null || column === void 0 ? void 0 : column.date, eventDate) : dateFns.isSameDay(column === null || column === void 0 ? void 0 : column.date, eventDate) && (event === null || event === void 0 ? void 0 : (_event$startHour = event.startHour) === null || _event$startHour === void 0 ? void 0 : _event$startHour.toUpperCase()) === (label === null || label === void 0 ? void 0 : label.toUpperCase());
            });
            obj.days.push({
              id: "column-".concat(index, "_m-").concat(column.month, "_d-").concat(column.day, "_").concat(id),
              date: column === null || column === void 0 ? void 0 : column.date,
              data: data
            });
          });
          // Label affectation
          data.push(obj); // End processing bloc
          dayStartHour = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.add(dayStartHour, {
            minutes: 60
          }) : dateFns.add(dayStartHour, {
            minutes: 60
          }); // 30
        }
        //if (i > 0) {
        //  dayStartHour = add(dayStartHour, {minutes: 30})
        //}
      };
      for (var i = 0; i <= HOURS; i++) {
        _loop4();
      }
      return data;
    };
    var getDayHeader = function getDayHeader() {
      return [{
        date: selectedDay,
        weekDay: (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(selectedDay, 'iii', {
          locale: dateFnsLocale
        }) : dateFns.format(selectedDay, 'iii', {
          locale: dateFnsLocale
        }),
        day: (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(selectedDay, 'dd', {
          locale: dateFnsLocale
        }) : dateFns.format(selectedDay, 'dd', {
          locale: dateFnsLocale
        }),
        month: (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(selectedDay, 'MM', {
          locale: dateFnsLocale
        }) : dateFns.format(selectedDay, 'MM', {
          locale: dateFnsLocale
        })
      }];
    };
    var getDayRows = function getDayRows() {
      var HOURS = 24;
      var data = [];
      var dayStartHour = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.startOfDay(selectedDay) : dateFns.startOfDay(selectedDay);
      var _loop5 = function _loop5() {
        var id = "line_".concat(i);
        var label = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.format(dayStartHour, 'HH:mm aaa') : dateFns.format(dayStartHour, 'HH:mm aaa');
        if (i > 0) {
          var obj = {
            id: id,
            label: label,
            days: []
          };
          var columns = getDayHeader();
          var column = columns[0];
          var matchedEvents = events.filter(function (event) {
            var _event$startHour2;
            var eventDate = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()) : dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date());
            return (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.isSameDay(column === null || column === void 0 ? void 0 : column.date, eventDate) : dateFns.isSameDay(column === null || column === void 0 ? void 0 : column.date, eventDate) && (event === null || event === void 0 ? void 0 : (_event$startHour2 = event.startHour) === null || _event$startHour2 === void 0 ? void 0 : _event$startHour2.toUpperCase()) === (label === null || label === void 0 ? void 0 : label.toUpperCase());
          });
          obj.days.push({
            id: "column-_m-".concat(column === null || column === void 0 ? void 0 : column.month, "_d-").concat(column === null || column === void 0 ? void 0 : column.day, "_").concat(id),
            date: column === null || column === void 0 ? void 0 : column.date,
            data: matchedEvents
          });
          data.push(obj);
          dayStartHour = (options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFnsJalali.add(dayStartHour, {
            minutes: 60
          }) : dateFns.add(dayStartHour, {
            minutes: 60
          });
        }
      };
      for (var i = 0; i <= HOURS; i++) {
        _loop5();
      }
      return data;
    };
    var getTimeLineRows = function getTimeLineRows() {
      return (
        //events.filter((event) => {
        //let eventDate = parse(event?.date, 'yyyy-MM-dd', new Date())
        //return isSameDay(selectedDay, eventDate)
        //})
        events
      );
    };

    /**
     * @name handleDateChange
     * @description
     * @param day
     * @param date
     * @return void
     */
    var handleDateChange = function handleDateChange(day, date) {
      setDaysInMonth(day);
      setSelectedDay(date);
      setSelectedDate((options === null || options === void 0 ? void 0 : options.adapter) === 'jalali' ? dateFns.format(date, 'MMMM-yyyy') : dateFns.format(date, 'MMMM-yyyy'));
    };

    /**
     * @name handleModeChange
     * @description
     * @param newMode
     * @return void
     */
    var handleModeChange = function handleModeChange(newMode) {
      setMode(newMode);
    };

    /**
     * @name onSearchResult
     * @description
     * @param item
     * @return void
     */
    var onSearchResult = function onSearchResult(item) {
      setSearchResult(item);
    };
    var handleEventsChange = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(item) {
        var eventIndex, oldObject;
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              onEventsChange(item);
              eventIndex = events.findIndex(function (e) {
                return e.id === (item === null || item === void 0 ? void 0 : item.id);
              });
              if (eventIndex !== -1) {
                oldObject = Object.assign({}, events[eventIndex]);
                if (alertState !== null && alertState !== void 0 && alertState.showNotification && !alertState.open) {
                  setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
                    open: true,
                    message: "\n            ".concat(item === null || item === void 0 ? void 0 : item.label, " successfully moved from ").concat(oldObject === null || oldObject === void 0 ? void 0 : oldObject.date, "\n            ").concat(oldObject === null || oldObject === void 0 ? void 0 : oldObject.startHour, " to ").concat(item === null || item === void 0 ? void 0 : item.date, " ").concat(item === null || item === void 0 ? void 0 : item.startHour, "\n          ")
                  }));
                  setTimeout(function () {
                    setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
                      open: false,
                      message: ''
                    }));
                  }, alertState.delay);
                }
              }
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function handleEventsChange(_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    React.useEffect(function () {
      if (isMonthMode) {
        setState(_objectSpread(_objectSpread({}, state), {}, {
          columns: getMonthHeader(),
          rows: getMonthRows()
        }));
      }
      if (isWeekMode) {
        setState(_objectSpread(_objectSpread({}, state), {}, {
          columns: getWeekHeader(),
          rows: getWeekRows()
        }));
      }
      if (isDayMode) {
        setState(_objectSpread(_objectSpread({}, state), {}, {
          columns: getDayHeader(),
          rows: getDayRows()
        }));
      }
      if (isTimelineMode) {
        setState(_objectSpread(_objectSpread({}, state), {}, {
          columns: getDayHeader(),
          rows: getTimeLineRows()
        }));
      }
      // eslint-disable-next-line
    }, [mode, weekDays, daysInMonth, selectedDay, selectedDate, dateFnsLocale, i18n.language, startWeekOn]);
    React.useEffect(function () {
      if (locale$2 !== i18n.language) {
        //localStorage.getItem('i18nextLng')
        localStorage.setItem('i18nextLng', locale$2.toLowerCase());
        i18n.changeLanguage(locale$2.toLowerCase());
        updateWeekDays();
      }
    }, [locale$2]);
    React.useEffect(function () {
      if ((options === null || options === void 0 ? void 0 : options.defaultMode) !== mode) {
        setMode(options === null || options === void 0 ? void 0 : options.defaultMode);
      }
    }, [options === null || options === void 0 ? void 0 : options.defaultMode]);
    React.useEffect(function () {
      if ((options === null || options === void 0 ? void 0 : options.startWeekOn) !== startWeekOn) {
        setStartWeekOn(options === null || options === void 0 ? void 0 : options.startWeekOn);
      }
      updateWeekDays();
    }, [options === null || options === void 0 ? void 0 : options.startWeekOn]);
    return /*#__PURE__*/React__default["default"].createElement(material.Paper, {
      variant: "outlined",
      elevation: 0,
      sx: {
        p: 0
      }
    }, /*#__PURE__*/React__default["default"].createElement(DateFnsLocaleContext.Provider, {
      value: dateFnsLocale
    }, /*#__PURE__*/React__default["default"].createElement(SchedulerToolbar, {
      today: today,
      events: events,
      locale: locale$2,
      switchMode: mode,
      options: options,
      alertProps: alertState,
      toolbarProps: toolbarProps,
      onDateChange: handleDateChange,
      onModeChange: handleModeChange,
      onSearchResult: onSearchResult,
      onAlertCloseButtonClicked: onAlertCloseButtonClicked
    }), /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      container: true,
      spacing: 0,
      alignItems: "center",
      justifyContent: "start"
    }, isMonthMode && /*#__PURE__*/React__default["default"].createElement(TransitionMode, {
      "in": true
    }, /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 12
    }, /*#__PURE__*/React__default["default"].createElement(MonthModeView, {
      locale: locale$2,
      options: options,
      date: selectedDate,
      rows: state === null || state === void 0 ? void 0 : state.rows,
      columns: state === null || state === void 0 ? void 0 : state.columns,
      legacyStyle: legacyStyle,
      onTaskClick: onTaskClick,
      onCellClick: onCellClick,
      searchResult: searchResult,
      onDateChange: handleDateChange,
      onEventsChange: handleEventsChange
    }))), isWeekMode && /*#__PURE__*/React__default["default"].createElement(TransitionMode, {
      "in": true
    }, /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 12
    }, /*#__PURE__*/React__default["default"].createElement(WeekModeView, {
      locale: locale$2,
      events: events,
      options: options,
      date: selectedDate,
      rows: state === null || state === void 0 ? void 0 : state.rows,
      columns: state === null || state === void 0 ? void 0 : state.columns,
      onTaskClick: onTaskClick,
      onCellClick: onCellClick,
      searchResult: searchResult,
      onDateChange: handleDateChange,
      onEventsChange: handleEventsChange
    }))), isDayMode && /*#__PURE__*/React__default["default"].createElement(TransitionMode, {
      "in": true
    }, /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 12
    }, /*#__PURE__*/React__default["default"].createElement(DayModeView, {
      locale: locale$2,
      events: events,
      options: options,
      date: selectedDate,
      rows: state === null || state === void 0 ? void 0 : state.rows,
      columns: state === null || state === void 0 ? void 0 : state.columns,
      onTaskClick: onTaskClick,
      onCellClick: onCellClick,
      searchResult: searchResult,
      onDateChange: handleDateChange,
      onEventsChange: handleEventsChange
    })))), isTimelineMode && /*#__PURE__*/React__default["default"].createElement(TransitionMode, {
      "in": true
    }, /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      container: true,
      spacing: 2,
      alignItems: "start"
    }, /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 12
    }, /*#__PURE__*/React__default["default"].createElement(TimeLineModeView, {
      events: events,
      locale: locale$2,
      options: options,
      date: selectedDate,
      rows: state === null || state === void 0 ? void 0 : state.rows,
      columns: state === null || state === void 0 ? void 0 : state.columns,
      onTaskClick: onTaskClick,
      onCellClick: onCellClick,
      searchResult: searchResult,
      onDateChange: handleDateChange,
      onEventsChange: onEventsChange
    }))))));
  }
  Scheduler.propTypes = {
    events: PropTypes__default["default"].array,
    options: PropTypes__default["default"].object,
    alertProps: PropTypes__default["default"].object,
    toolbarProps: PropTypes__default["default"].object,
    onEventsChange: PropTypes__default["default"].func,
    onCellClick: PropTypes__default["default"].func,
    onTaskClick: PropTypes__default["default"].func,
    onAlertCloseButtonClicked: PropTypes__default["default"].func
  };
  Scheduler.defaultProps = {
    locale: 'en',
    legacyStyle: false
  };

  return Scheduler;

}));
