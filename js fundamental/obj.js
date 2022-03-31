//super untuk mengambil method maupun properti dari parentt class
//dalam membuat subclass kita harus memberi extends ke parent 
class Vehicle {
    constructor(licensePlate, manufacture) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }
    
    startEngines() {
        console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
    }
    
    info() {
        console.log(`Nomor Kendaraan: ${this.licensePlate}`);
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Mesin: ${this.engineActive ? "Active": "Inactive"}`);
    }
    
    parking() {
        console.log(`Kendaraan ${this.licensePlate} parkir!`);
    }
}

class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheels) {
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }
    
    droveOff() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }
    
    openDoor() {
        console.log(`Membuka pintu!`);
    }

    info() {
    super.info();
        console.log(`Jumlah roda: ${this.wheels}`);
    }
}

const car = new Car("H121S", "Honda", 4);
// car.startEngines();
// car.droveOff()
car.info()
