/**
 *
 */

class TimeLogger {
  private timezone?: string;

  constructor() {
    this.timezone = undefined;
  }

  public timeZone(tz: string): void {
    this.timezone = tz;
  }

  /**
   * @description Logs current system time in DD.MM.YY - HH:MM:SS format
   * @returns
   */
  public logtime(): string {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: this.timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const formatter = new Intl.DateTimeFormat("en-GB", options);
    const [
      { value: day },
      ,
      { value: month },
      ,
      { value: year },
      ,
      { value: hour },
      ,
      { value: minute },
      ,
      { value: second },
    ] = formatter.formatToParts(now);

    return `${day}.${month}.${year} - ${hour}:${minute}:${second}`;
  }
}

export default new TimeLogger();
