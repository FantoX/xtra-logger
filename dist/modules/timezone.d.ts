/**
 *
 */
declare class TimeLogger {
    private timezone?;
    constructor();
    timeZone(tz: string): void;
    /**
     * @author FantoX
     * @description Logs current system time in DD.MM.YY - HH:MM:SS format
     * @returns
     */
    logtime(): string;
}
declare const _default: TimeLogger;
export default _default;
