'use strict';

function Laptop(name,model,os) {			//defined my laptop class here
	this.name = name || "computer";		//assigned the parameter name to the variable this.name, in the case where a name isn't defined i made sure "computer" was assigned to this.name variable
	this.model = model || "GM"; //assigned the parameter model to the variable this.model or assign "GM" to it if no argument is passed.
	this.os = os || "HP/Dell/Apple"; //assigned tne argument passed in place of the parameter os to this.os and assigned "HP/Dell/Apple" if no argument is passed.

	if (this.name  === 'HP' || this.name === "Dell") { 	//i want to make sure HP and Dell laptops are treated differently, because they have peculiar properties
	  	this.os = "windows";		    //HP or Dell laptops usually operate windows
	  	this.battery = true;			//a class variable to store a boolean to know if the phone uses a battery.
	  	this.isApple = false;			// a class variable used to store a boolean to describe if a laptop is apple or not.
	  	this.isCharging = false;		// a class variable used to store a boolean to know if the laptop is charging or not, a laptop is usually not charging by default.
	 	this.charge = function() {		// this is a function call to charge the laptop
			this.isCharging = true;		// we change the .isCharging variable to indicate that the laptop is charging
		};
		this.stopCharge = function() {	//this is a function call to stop the laptop from charging
			this.isCharging = false;	// we change the .isCharging variable to indicate that the laptop has stopped charging
		};
		this.isPowerOn = false;			//a variable used to store a boolean that indicates if the laptop is powered on.
		this.powerOn = function() {		//this is a function to power on the laptop, it changes the boolean value of this.isPowerOn to show that the laptop is on.
			this.isPowerOn = true;		//boolean value of this.isPowerOn is set to true to indicate that the laptop is powered on.
		};
		this.powerOff = function() {	//this is a function to power off the laptop, it changes the boolean value of this.isPowerOff to show that the laptop is off.
			this.isPowerOn = false;		//boolean value of this.isPowerOn is set to true to indicate that the laptop is powered off.
		};
	}
	
	else {			//if the name of the laptop isn't HP or Dell, it should implement the following lines of code
		 	this.CPU = "Apple";		        // assign the string "Apple" to the variable this.CPU
		  	this.isApple = true;			// a class variable used to store a boolean to describe if a laptop is an Apple or not.
		  	this.battery = true;			//a class variable to store a boolean to know if the laptop uses a battery
		  	this.isCharging = false;		// a class variable used to store a boolean to know if the laptop is charging or not, a laptop is usually not charging by default.
		 	this.charge = function() {		// this is a function call to charge the laptop
				this.isCharging = true;		// we change the .isCharging variable to indicate that the laptop is charging
			};
			this.stopCharge = function() {	//this is a function call to stop the laptop from charging
				this.isCharging = false;	// we change the .isCharging variable to indicate that the laptop has stopped charging
			};
			this.isPowerOn = false;			//a variable used to store a boolean that indicates if the laptop is powered on.
			this.powerOn = function() {		//this is a function to power on the laptop, it changes the boolean value of this.isPowerOn to show that the laptop is on.
				this.isPowerOn = true;		//boolean value of this.isPowerOn is set to true to indicate that the laptop is powered on.
			};
			this.powerOff = function() {	//this is a function to power off the laptop, it changes the boolean value of this.isPowerOff to show that the laptop is off.
				this.isPowerOn = false;		//boolean value of this.isPowerOn is set to true to indicate that the laptop is powered off.
			};
		
		}
	}

module.exports = Laptop;