"use client";

import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { pickersLayoutClasses } from "@mui/x-date-pickers/PickersLayout";

function CalendarProject() {
  const hideSelectDateRangeStyles = `
    .MuiTypography-root.MuiTypography-overline {
      display: none;
    }
  `;

  const hideSelectedDateStyles = `
    .MuiStaticDateRangePicker-toolbarTitle {
      display: none;
    }
  `;

  const hideToolbarStyles = `
  .MuiPickersToolbar-root {
    display: none;
  }
`;

  const hideButtonsStyles = `
    .MuiDialogActions-root {
      display: none;
    }
    .css-nk89i7-MuiPickersCalendarHeader-root{
      margin-top:8px;
    }
  `;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <style>{hideSelectDateRangeStyles}</style>
      <style>{hideSelectedDateStyles}</style>
      <style>{hideToolbarStyles}</style>
      <style>{hideButtonsStyles}</style>
      <StaticDateRangePicker
        defaultValue={[dayjs(), dayjs().add(7,"day")]}
        sx={{
          [`.${pickersLayoutClasses.contentWrapper}`]: {
            alignItems: "center",
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default CalendarProject;
