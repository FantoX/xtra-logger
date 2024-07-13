import formatter from "./modules/formatter";
import TimeLogger from "./modules/timezone";

/**
 * @description Logging options ( info, warn, success, warn, error )
 * @see {@link https://github.com/FantoX/lyrics-scraper} Documentation on GitHub
 * @author FantoX
 */
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

/**
 * @description Text formatter.
 * Available styles and colors:
 * - Colors: "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white",
 *   "brightblack", "brightred", "brightgreen", "brightyellow", "brightblue", "brightmagenta",
 *   "brightcyan", "brightwhite", "darkyellow", "darkgreen", "lightred", "lightgreen", "lightyellow",
 *   "lightblue", "lightmagenta", "lightcyan", "lightwhite", "gold", "skyblue", "pink", "orange",
 *   "darkorange", "violet", "reset".
 * - Text styles: "bold", "dim", "italic", "underline", "blink", "reverse", "hidden", "strikethrough",
 *   "boldOff", "underlineOff", "reverseOff".
 * - Background colors: "bgBlack", "bgRed", "bgGreen", "bgYellow", "bgBlue", "bgMagenta", "bgCyan",
 *   "bgWhite", "bgBrightblack", "bgBrightred", "bgBrightgreen", "bgBrightyellow", "bgBrightblue",
 *   "bgBrightmagenta", "bgBrightcyan", "bgBrightwhite".
 * @see {@link https://github.com/FantoX/lyrics-scraper} Documentation on GitHub
 * @author FantoX
 */
export const format = formatter;
