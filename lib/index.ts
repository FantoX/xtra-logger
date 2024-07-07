import formatter from "./modules/formatter";
import TimeLogger from "./modules/timezone";

TimeLogger.timeZone("America/New_York");

// import logger from "./modules/formatter";

// console.log(logger.bold(logger.red("Some text")));
// // console.log(logger.bgRed("Some text with red background"));
// console.log(
//   logger.bold(logger.strikethrough(logger.green("Some text in bold yellow")))
// );
// console.log(logger.lightblue("Some text in light blue"));
// console.log(logger.bgBrightcyan(logger.italic("Some italic text")));

import logger from "./modules/timezone";

// logger.timeZone("America/New_York");

// Get current time in specified format
const currentTime = logger.logtime();
console.log(currentTime); // Example output: 05.12.2024 - 12:34:10

// [ 07.07.2024 - 07:12:40 ] - [ INFO ]
