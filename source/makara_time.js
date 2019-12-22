/* Makara API JS - MakaraTime Class */

class MakaraTime {

    // API time format: yyyy-MM-dd_HH:mm:ss.SSSSSS

    constructor(
        year,
        month,
        day,
        hour,
        minute,
        second,
        millisecond
    ) {

        this._year = year;
        this._month = month;
        this._day = day;
        this._hour = hour;
        this._minute = minute;
        this._second = second;
        this._millisecond = millisecond;

        return;

    }

    get year() { return this._year; }
    get month() { return this._month; }
    get day() { return this._day; }
    get hour() { return this._hour; }
    get minute() { return this._minute; }
    get second() { return this._second; }
    get millisecond() { return this._millisecond; }

    static decode(data) {
        throw Error('Not implemented');
    }

}