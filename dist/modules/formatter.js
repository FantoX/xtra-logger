"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var textFormatter = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    brightblack: "\x1b[90m",
    brightred: "\x1b[91m",
    brightgreen: "\x1b[92m",
    brightyellow: "\x1b[38;5;226m",
    brightblue: "\x1b[94m",
    brightmagenta: "\x1b[95m",
    brightcyan: "\x1b[96m",
    brightwhite: "\x1b[97m",
    darkyellow: "\x1b[93m",
    darkgreen: "\x1b[38;5;100m",
    lightred: "\x1b[38;5;9m",
    lightgreen: "\x1b[38;5;10m",
    lightyellow: "\x1b[38;5;11m",
    lightblue: "\x1b[38;5;12m",
    lightmagenta: "\x1b[38;5;13m",
    lightcyan: "\x1b[38;5;14m",
    lightwhite: "\x1b[38;5;15m",
    gold: "\x1b[38;5;214m",
    skyblue: "\x1b[38;5;117m",
    pink: "\x1b[38;5;213m",
    orange: "\x1b[38;5;208m",
    darkorange: "\x1b[38;5;202m",
    violet: "\x1b[38;5;135m",
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    italic: "\x1b[3m",
    underline: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    strikethrough: "\x1b[9m",
    boldOff: "\x1b[22m",
    underlineOff: "\x1b[24m",
    reverseOff: "\x1b[27m",
    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m",
    bgBrightblack: "\x1b[100m",
    bgBrightred: "\x1b[101m",
    bgBrightgreen: "\x1b[102m",
    bgBrightyellow: "\x1b[103m",
    bgBrightblue: "\x1b[104m",
    bgBrightmagenta: "\x1b[105m",
    bgBrightcyan: "\x1b[106m",
    bgBrightwhite: "\x1b[107m",
};
/**
 *
 */
var logger = new Proxy({}, {
    get: function (target, prop) {
        return function (text) {
            var formatter = textFormatter[prop];
            if (formatter) {
                return "".concat(formatter).concat(text).concat(textFormatter.reset);
            }
            else {
                throw new Error("Unknown formatter '".concat(prop, "'"));
            }
        };
    },
});
exports.default = logger;
