/* Makara API JS - Certification Class */


class Certification {

    constructor(
        name
    ) {
        this._name = name;
    }

    get name() { return this._name; }

    static decode(data) {
        return new Certification(
            data['name']
        );
    }

}