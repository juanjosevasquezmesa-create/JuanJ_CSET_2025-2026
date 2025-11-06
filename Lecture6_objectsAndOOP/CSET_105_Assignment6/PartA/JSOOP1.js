//simple class
class Address {
    constructor(streetNum, streetName, city, state, zipcode) {
        this.streetNum = streetNum;
        this.streetName = streetName;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }

    fullAdress() {
        console.log(this.streetNum + " " + this.streetName + ", " + this.city + ", " + this.state + " " + this.zipcode);
    }
}

let RHS = new Address(801, "N 13th St", "Reading", "PA", 19604);

RHS.fullAdress();
//801 N 13th St, Reading, PA 19604