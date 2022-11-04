// initializing an object with certain properties

let car = {
    brand: "Toyota",
    variant: "Wigo",
    transmission: "Automatic",
    lights: {
        front: "LED",
        rear: "LED/Bulb",
        signal: "Bulb"
    },

// adding a function to an object

    displayBrand(){
        alert(this.brand);
        document.writeln(this.transmission);
    }
}

// creating a class with a constructor

class myCar {
    constructor (brand, variant, transmission) {
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}

// abstraction

function vehicle (){
    this.vehicletype ="vehicletype";
}
vehicle.prototype.display=function(){
    return "The brand is: "+ this.vehicletype;
}
function MyCar(vehicletype){
    this.vehicletype = vehicletype;
}
MyCar.prototype=Object.create(vehicle.prototype);

var mycar = new MyCar("Toyota");

// encapsulation
class myRide {
    constructor(){
        var brand;
        var variant;
    }

    getName(){
        return this.brand;
    }

    setName(brand){
        this.brand = brand;
    }

    getVariant(){
        return this.variant;
    }

    setVariant(variant){
        this.variant = variant;
    }
}

var Rides = new myRide();
Rides.setName("Toyota");
Rides.setVariant("Wigo");

// inheritance

    class myToy {
        constructor(){
            this.brand = "Toyota";
        }
    }

    class Vehicle extends myToy {
        constructor(model, variant){
            super();
            this.model = model;
            this.variant = variant;
        }
    }

    var v = new Vehicle("2022","Wigo");

    // polymorphism

    class brandA {
        display(){
            document.writeln("Brand A: Toyota");
        }
    }

    class brandB extends brandA {
        display(){
            document.writeln("Brand B: Honda");
        }
    }

    var a = [new brandA(), new brandB()];

