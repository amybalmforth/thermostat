describe('Thermo', function() {

  beforeEach(function() {
    thermo = new Thermo();
  });

  it('thermo starts at 20 degrees', function() {
    expect(thermo.degrees).toEqual(20);
  });

  it('has min temp of 10 degrees', function() {
    expect(thermo.MIN_DEGREES).toEqual(10);
  });

  it('up function raises temp by 5 degrees', function() {
    thermo.up();
    expect(thermo.degrees).toEqual(25);
  });

  it('down function lowers temp by 5 degrees', function() {
    thermo.down();
    expect(thermo.degrees).toEqual(15);
  });

  it('will not allow temp of lower than 10 degrees', function() {
    thermo.down();
    thermo.down();
    thermo.down();
    expect(thermo.degrees).toEqual(10);
  });

  it('power saving mode is on by default', function() {
    expect(thermo.powerSaving).toEqual(true);
  });

  it('has max degrees of 25 when powersaving on', function() {
    expect(thermo.MAX_DEGREES).toEqual(25);
  })

  it('has max degrees of 32 when powersaving off', function() {
    thermo.turnOffPowerSave();
    expect(thermo.MAX_DEGREES).toEqual(32);
  })

  it('after resetting temp', function() {
    thermo.down();
    thermo.reset();
    expect(thermo.degrees).toEqual(20);
  })

});
