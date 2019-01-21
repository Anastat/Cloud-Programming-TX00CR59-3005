var fiat = { 
    make: "Fiat",
    model: "500",
    year: 1957, 
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
	fuel: 0,
    started: false,
    start: function() {
		if (this.fuel == 0) {
			console.log("The car is on empty, fill up before starting!");
		} else {
			this.started = true;
		}
	},
    stop: function() {
		this.started = false;
	},
	drive: function() {
        let updateFuel = () => this.fuel = this.fuel - 1;
		if (this.started) {
			if (this.fuel > 0) {
				console.log(this.make + " " +
				      this.model + " goes zoom zoom!");
				updateFuel();
			} else {
				console.log("Uh oh, out of fuel.");
				this.stop();
			} 
		} else {
			console.log("You need to start the engine first.");
        };    
	},
	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}
};
fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
//console.log(fiat.fuel);
fiat.drive();
//console.log(fiat.fuel);
fiat.drive();
fiat.stop();