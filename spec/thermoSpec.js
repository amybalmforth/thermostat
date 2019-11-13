// describe('Airport', function() {
//
//   beforeEach(function() {
//     airport = new Airport();
//     plane = new Plane();
//   });
//
//   it('has no planes by default', function() {
//     expect(airport.hanger).toEqual([]);
//   });
//
// });
describe('Thermo', function() {

  beforeEach(function() {
    thermo = new Thermo();
  });

  it('thermo starts at 20 degrees', function() {
    expect(thermo.degrees).toEqual(20);
  });

});
