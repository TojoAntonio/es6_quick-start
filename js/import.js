var sum = (a, b = 6) => (a + b);

var square = (b) => {
    return b * b;
};

var variable = 8;

class MyClass {
    constructor(informations) {
        this.name = informations.name;
        this.phoneNo = informations.phoneNo
    }
    getName() {
        return this.name;
    }
    getPhoneNo() {
        return this.phoneNo;
    }
}

export { sum, square, variable, MyClass };