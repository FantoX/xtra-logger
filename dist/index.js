"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.logger = void 0;
var formatter_1 = __importDefault(require("./modules/formatter"));
var timezone_1 = __importDefault(require("./modules/timezone"));
/**
 * @description Logging options ( info, warn, success, warn, error )
 * @see {@link https://github.com/FantoX/lyrics-scraper} Documentation on GitHub
 * @author FantoX
 */
exports.logger = {
    // Forward the timeZone method
    timeZone: function (tz) { return timezone_1.default.timeZone(tz); },
    // Log methods
    warn: function (logText) {
        if (logText === void 0) { logText = ""; }
        if (!logText) {
            console.log(formatter_1.default.red("[ LOG ERROR ] - ") +
                formatter_1.default.cyan("No text provided to log!"));
        }
        else {
            var currentTime = timezone_1.default.logtime();
            var txt_formatter = formatter_1.default.brightblack("[ ".concat(currentTime, " ]")) +
                " - " +
                formatter_1.default.brightyellow("[ WARNING ]") +
                " - " +
                logText;
            console.log(txt_formatter);
        }
    },
    info: function (logText) {
        if (logText === void 0) { logText = ""; }
        if (!logText) {
            console.log(formatter_1.default.red("[ LOG ERROR ] - ") +
                " - " +
                formatter_1.default.cyan("No text provided to log!"));
        }
        else {
            var currentTime = timezone_1.default.logtime();
            var txt_formatter = formatter_1.default.brightblack("[ ".concat(currentTime, " ]")) +
                " - " +
                formatter_1.default.darkyellow("[ INFO ]") +
                " - " +
                logText;
            console.log(txt_formatter);
        }
    },
    debug: function (logText) {
        if (logText === void 0) { logText = ""; }
        if (!logText) {
            console.log(formatter_1.default.red("[ LOG ERROR ] - ") +
                formatter_1.default.cyan("No text provided to log!"));
        }
        else {
            var currentTime = timezone_1.default.logtime();
            var txt_formatter = formatter_1.default.brightblack("[ ".concat(currentTime, " ]")) +
                " - " +
                formatter_1.default.orange("[ DEBUG ]") +
                " - " +
                logText;
            console.log(txt_formatter);
        }
    },
    success: function (logText) {
        if (logText === void 0) { logText = ""; }
        if (!logText) {
            console.log(formatter_1.default.red("[ LOG ERROR ] - ") +
                formatter_1.default.cyan("No text provided to log!"));
        }
        else {
            var currentTime = timezone_1.default.logtime();
            var txt_formatter = formatter_1.default.brightblack("[ ".concat(currentTime, " ]")) +
                " - " +
                formatter_1.default.brightgreen("[ SUCCESS ]") +
                " - " +
                logText;
            console.log(txt_formatter);
        }
    },
    error: function (logText) {
        if (logText === void 0) { logText = ""; }
        if (!logText) {
            console.log(formatter_1.default.red("[ LOG ERROR ] - ") +
                formatter_1.default.cyan("No text provided to log!"));
        }
        else {
            var currentTime = timezone_1.default.logtime();
            var txt_formatter = formatter_1.default.brightblack("[ ".concat(currentTime, " ]")) +
                " - " +
                formatter_1.default.darkorange("[ ERROR ]") +
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
exports.format = formatter_1.default;
