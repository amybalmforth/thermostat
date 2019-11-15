describe('Thermo', function() {

  beforeEach(function() {
    thermo = new Thermo();
  });

  describe('default mode', function() {

    beforeEach(function() {
      thermo = new Thermo();
    });

    it('thermo starts at 20 degrees', function() {
      expect(thermo.degrees).toEqual(20);
    });

    it('has min temp of 10 degrees', function() {
      expect(thermo.MIN_DEGREES).toEqual(10);
    });

    it('power saving mode is on by default', function() {
      expect(thermo.powerSaving).toEqual(true);
    });

    it('can turn power saving mode off', function() {
      thermo.turnOffPowerSave();
      expect(thermo.powerSaving).toEqual(false);
    });

  });

  describe('turning temp up and down and reset', function() {

    beforeEach(function() {
      thermo = new Thermo();
    });

    it('up function raises temp by 5 degrees', function() {
      thermo.up();
      expect(thermo.degrees).toEqual(25);
    });

    it('down function lowers temp by 5 degrees', function() {
      thermo.down();
      expect(thermo.degrees).toEqual(15);
    });

    it('after resetting temp', function() {
      thermo.down();
      thermo.reset();
      expect(thermo.degrees).toEqual(20);
    });

  });

  describe('when powersaving on', function() {

    it('has max degrees of 25 when powersaving on', function() {
      expect(thermo.MAX_DEGREES).toEqual(25);
    });

  });

  describe('when powersaving off', function(){

    it('can turn power saving mode on', function(){
      thermo.turnOnPowerSave();
      expect(thermo.powerSaving).toEqual(true);
    });

    it('has max degrees of 32 when powersaving off', function() {
      thermo.turnOffPowerSave();
      expect(thermo.MAX_DEGREES).toEqual(32);
    });

  });

  describe('energy usage', function() {

    it('can advise it has medium energy usage', function() {
      expect(thermo.energy).toEqual('medium');
    });

    it('can advise it has high energy usage', function() {
      thermo.up();
      thermo.up();
      expect(thermo.energy).toEqual('high');
    });

    it('can advise it has low energy usage', function() {
      thermo.down();
      expect(thermo.energy).toEqual('low');
    });

    it('can advise it is back to medium energy usage after high', function() {
      thermo.up();
      thermo.up();
      thermo.down();
      thermo.down();
      expect(thermo.energy).toEqual('medium');
    });

    it('can advise it is back to medium energy usage after low', function() {
      thermo.down();
      thermo.up();
      expect(thermo.energy).toEqual('medium');
    });

  });

  describe('min max temp', function() {

    it('will not allow temp of lower than 10 degrees', function() {
      thermo.down();
      thermo.down();
      thermo.down();
      expect(thermo.degrees).toEqual(10);
    });

  });

});
