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

  it('up function raises temp by 10 degrees', function() {
    thermo.up();
    expect(thermo.degrees).toEqual(30);
  });

  it('down function lowers temp by 10 degrees', function() {
    thermo.down();
    expect(thermo.degrees).toEqual(10);
  });

  it('will not allow temp of lower than 10 degrees', function() {
    thermo.down();
    thermo.down();
    expect(thermo.degrees).toEqual(10);
  });

});
