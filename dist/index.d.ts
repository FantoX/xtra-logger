/**
 * @description Logging options ( info, warn, success, warn, error )
 * @see {@link https://github.com/FantoX/lyrics-scraper} Documentation on GitHub
 * @author FantoX
 */
export declare const logger: {
    timeZone: (tz: string) => void;
    warn: (logText?: any) => void;
    info: (logText?: any) => void;
    debug: (logText?: any) => void;
    success: (logText?: any) => void;
    error: (logText?: any) => void;
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
export declare const format: Record<"black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "brightblack" | "brightred" | "brightgreen" | "brightyellow" | "brightblue" | "brightmagenta" | "brightcyan" | "brightwhite" | "darkyellow" | "darkgreen" | "lightred" | "lightgreen" | "lightyellow" | "lightblue" | "lightmagenta" | "lightcyan" | "lightwhite" | "gold" | "skyblue" | "pink" | "orange" | "darkorange" | "violet" | "reset" | "bold" | "dim" | "italic" | "underline" | "blink" | "reverse" | "hidden" | "strikethrough" | "boldOff" | "underlineOff" | "reverseOff" | "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgBrightblack" | "bgBrightred" | "bgBrightgreen" | "bgBrightyellow" | "bgBrightblue" | "bgBrightmagenta" | "bgBrightcyan" | "bgBrightwhite", (text: string) => string>;
