function makeCar() {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];
    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5);
    var rand6 = Math.floor(Math.random() * 2);
    var car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0,
        engine: makeEngine()
    };
    return car;
}
function displayCar(car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model + 
        "engine: " + car.engine.cylinders + " cylinders, " + car.engine.ccVolume + " cc volume, " + 
        car.engine.fuelType + " fuel type, " + car.engine.maxTorque + " max torgue");
}
function makeEngine () {
    let cylinders = [2, 3, 4, 5, 6, 8];
    let ccVolume = [1000, 1500, 1800, 2000, 2500];
    let fuelType = ["diesel", "petrol", "electric"];
    let maxTorque = [100, 180, 222, 240, 369];
    let randCylinders = Math.floor(Math.random() * cylinders.length);
    let randVolume = Math.floor(Math.random() * ccVolume.length);
    let randFuel = Math.floor(Math.random() * fuelType.length);
    let randTorgue = Math.floor(Math.random() * maxTorque.length);

    let engine = {
        cylinders: cylinders[randCylinders],
        ccVolume: ccVolume[randVolume],
        fuelType: fuelType[randFuel],
        maxTorque: maxTorque[randTorgue]
    }
    return engine;
}
var carToSell = makeCar();
displayCar(carToSell);