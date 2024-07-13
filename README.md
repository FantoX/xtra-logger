<div align="center">
  <a href="#">
    <img src="https://github.com/user-attachments/assets/cd203167-3d1d-4114-981f-014f1044142c" alt="xtra-logger logo">
  </a>

  <h1 align="center">XTRA-LOGGER</h1>

  <p align="center">
    <h3>A lightweight logger, console text coloriser and text formatter with highest formatting options written in <a href="https://www.typescriptlang.org/docs/handbook/intro.html">Typescript </a> </h3>
  </p>
</div>

<br>

## Compatibility:

| Version        | Compatibility                |
| -------------- | ---------------------------- |
| Es5 Javascript | <div align="center">✅</div> |
| Es6 Javascript | <div align="center">✅</div> |
| Typescript     | <div align="center">✅</div> |

<br>

## Features:

| Feature             | Availability                    |
| ------------------- | ------------------------------- |
| Logging             | <div align="center">✅</div>    |
| Text Formatting     | <div align="center">✅</div>    |
| Console Colorize    | <div align="center">✅</div>    |
| Combined Formatting | <div align="center">✅</div>    |
| Size                | <div align="center">17 kb</div> |

<br>

## Installation:

Node Package Manager (NPM)

```bash
npm i xtra-logger
```

Yet Another Resource Navigator (YARN)

```bash
yarn add xtra-logger
```

<br>

## Importing:

For Es5 Js

```js
const { logger, format } = require("xtra-logger");
```

For Es6 Js / Typescript

```js
import { logger, format } from "xtra-logger";
```

<br>

## Usage Examples:

**_Logging features:_**

- 5 Log methods available ( info, warn, success, warn, error )
- Changable timezome for Docker / Remote servers ( Search your time zome name from [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). )
- Log format : `[ DD.MM.YY - HH:MM:SS ] - [ TYPE ] - MESSAGE`

_Example :_

```js
import { logger, format } from "xtra-logger";

// Changing the timezone of logger [ optional ] (By default it will use system time)
logger.timeZone("Asia/Kolkata");

// Logging options
logger.info("Starting the server...");
logger.warn("Using node v:18.6");
logger.success("Server started successfully.");
logger.debug("NPM update available.");
logger.error("An error occurd in the server.");
```

_Output :_

<a href="#">
    <img src="https://github.com/user-attachments/assets/68f7fd75-ff9f-454a-8f6f-851add11255c" alt="Formatting example output">
</a>

<br>

**_Text formatting features:_**

- 50+ text formatting / colorizing options available.
- Multiple formatting can be combined together to create new style.

_Example :_

```js
import { logger, format } from "xtra-logger";

// Only bold text
console.log(format.bold("This is a Bold text\n"));

// Combining colours + multiple formatting
console.log(
  format.bold(
    format.italic(format.cyan("This is a Bold + Italic + Cyan colour text \n"))
  )
);

console.log(
  format.bgBrightmagenta(
    format.strikethrough(
      format.lightwhite(
        "This is a strikethrough + light white text with bright magenta background"
      )
    )
  )
);
```

_Output :_

<a href="#">
    <img src="https://github.com/user-attachments/assets/6dca26ee-0929-4405-869a-b81513b0a2a1" alt="Formatting example output">
</a>

<br>
<br>

## Contributing:

I don't have any contributors in this project yet. Feel free to contribute and making it better.

- Coded by [FantoX](https://github.com/FantoX)
- - Written in [Typescript](https://www.typescriptlang.org/docs/handbook/intro.html)
- License [GNU General Public License v3.0](https://github.com/FantoX/xtra-logger/blob/main/LICENSE)

<br>
<br>
