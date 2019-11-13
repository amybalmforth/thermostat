describe('Thermo', function() {

  beforeEach(function() {
    thermo = new Thermo();
  });

  it('thermo starts at 20 degrees', function() {
    expect(thermo.degrees).toEqual(20);
  });

  it('up function raises temp by 1 degree', function() {
    thermo.up();
    expect(thermo.degrees).toEqual(21);
  });

  it('down function lowers temp by 1 degree', function() {
    thermo.down();
    expect(thermo.degrees).toEqual(19);
  });

});
