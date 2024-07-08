import { error, warn } from "console";
import formatter from "./modules/formatter";
import TimeLogger from "./modules/timezone";

export const logger = {
  // Forward the timeZone method
  timeZone: (tz: string) => TimeLogger.timeZone(tz),

  // Log methods
  warn: (logText: any = "") => {
    if (!logText) {
      console.log(
        formatter.red("[ LOG ERROR ] - ") +
          formatter.cyan("No text provided to log!")
      );
    } else {
      const currentTime = TimeLogger.logtime();
      const txt_formatter =
        formatter.brightblack(`[ ${currentTime} ]`) +
        " - " +
        formatter.brightyellow("[ WARNING ]") +
        " - " +
        logText;

      console.log(txt_formatter);
    }
  },

  info: (logText: any = "") => {
    if (!logText) {
      console.log(
        formatter.red("[ LOG ERROR ] - ") +
          " - " +
          formatter.cyan("No text provided to log!")
      );
    } else {
      const currentTime = TimeLogger.logtime();
      const txt_formatter =
        formatter.brightblack(`[ ${currentTime} ]`) +
        " - " +
        formatter.darkyellow("[ INFO ]") +
        " - " +
        logText;

      console.log(txt_formatter);
    }
  },

  debug: (logText: any = "") => {
    if (!logText) {
      console.log(
        formatter.red("[ LOG ERROR ] - ") +
          formatter.cyan("No text provided to log!")
      );
    } else {
      const currentTime = TimeLogger.logtime();
      const txt_formatter =
        formatter.brightblack(`[ ${currentTime} ]`) +
        " - " +
        formatter.orange("[ DEBUG ]") +
        " - " +
        logText;

      console.log(txt_formatter);
    }
  },

  success: (logText: any = "") => {
    if (!logText) {
      console.log(
        formatter.red("[ LOG ERROR ] - ") +
          formatter.cyan("No text provided to log!")
      );
    } else {
      const currentTime = TimeLogger.logtime();
      const txt_formatter =
        formatter.brightblack(`[ ${currentTime} ]`) +
        " - " +
        formatter.brightgreen("[ SUCCESS ]") +
        " - " +
        logText;

      console.log(txt_formatter);
    }
  },

  error: (logText: any = "") => {
    if (!logText) {
      console.log(
        formatter.red("[ LOG ERROR ] - ") +
          formatter.cyan("No text provided to log!")
      );
    } else {
      const currentTime = TimeLogger.logtime();
      const txt_formatter =
        formatter.brightblack(`[ ${currentTime} ]`) +
        " - " +
        formatter.darkorange("[ ERROR ]") +
        " - " +
        logText;

      console.log(txt_formatter);
    }
  },
};

export const format = formatter;
