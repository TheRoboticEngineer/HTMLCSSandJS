class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return ("Beep!");
    }

    toString(){
        return (`The vehicle is a ${this.make}, ${this.model} from ${this.year}.`);
    }

    numWheels() {

        }
    }

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcyle extends Vehicle {
    constructor(make, model, year){
        super(make,model,year);
        this.numWheels = 2;
    }

    revEngine(){
        return ("VROOM");
    }
}

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed here!";
        }
        if (this.vehicles.length > this.capacity){
            return "Sorry, we are full!";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added. The capacity has also been adjusted.";
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk()); // "Beep!"
console.log(myFirstVehicle.toString())// This vehicle is a Honda, Monster Truck from 1999. 
console.log(myFirstVehicle.numWheels()) // 4
let garage = new Garage(2);
console.log(garage.vehicles) // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // Vehicle added. The capacity has also been adjusted.
console.log(garage.vehicles)

