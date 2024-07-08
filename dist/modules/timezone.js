"use strict";
/**
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TimeLogger = /** @class */ (function () {
    function TimeLogger() {
        this.timezone = undefined;
    }
    TimeLogger.prototype.timeZone = function (tz) {
        this.timezone = tz;
    };
    /**
     * @author FantoX
     * @description Logs current system time in DD.MM.YY - HH:MM:SS format
     * @returns
     */
    TimeLogger.prototype.logtime = function () {
        var now = new Date();
        var options = {
            timeZone: this.timezone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        };
        var formatter = new Intl.DateTimeFormat("en-GB", options);
        var _a = formatter.formatToParts(now), day = _a[0].value, month = _a[2].value, year = _a[4].value, hour = _a[6].value, minute = _a[8].value, second = _a[10].value;
        return "".concat(day, ".").concat(month, ".").concat(year, " - ").concat(hour, ":").concat(minute, ":").concat(second);
    };
    return TimeLogger;
}());
exports.default = new TimeLogger();
