(function(){
  'use strict';

  var chai = require('jasmine'); 

var Laptop = require('../oop/oop.js')

  describe("Laptop Class: Buy a laptop of choice", function() {

    it("The Laptop should be a type of `object`, and an instance of the `Laptop` class", function() {
      var Hp = new Laptop('Hp');
      expect(typeof Hp).toEqual(typeof {});
      expect(Hp instanceof Laptop).toBeTruthy();
    });

    it("The Laptop should be called 'General' if no name is passed as a parameter", function() {
      var gm = new Laptop();
      expect(gm.name).toEqual('General');
      expect(gm.model).toBe('GM');
    });

    it("The Laptop should be powered off by default until powered on", function() {
      var Apple  = new Laptop('macbook air', 'macbook pro');
      expect(laptop.isPowerOn).toBe(false);
      expect(laptop.isAndroid).not.toBeTruthy();
      expect(laptop.isIphone).toBeTruthy();
      Laptop.powerOn();
      expect(laptop.isPowerOn).toBeTruthy();
      laptop.powerOff();
      expect(laptop.isPowerOn).not.toBeTruthy();
    });
})();