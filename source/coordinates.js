/* Makara API JS - Coordinates Class */

class Coordinates {

    constructor(longitude, latitude) {
        this._longitude = longitude;
        this._latitude = latitude;
        return;
    }

    get longitude() { return this._longitude; }
    get latitude() { return this._latitude; }

    static _decode(data) {
        return new Coordinates(
            data['longitude'],
            data['latitude']
        );
    }
}
