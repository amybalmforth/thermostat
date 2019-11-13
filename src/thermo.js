function Thermo() {
  this.degrees = 20;
  this.MIN_DEGREES = 10;
};
Thermo.prototype.up = function() {
  thermo.degrees += 10;
};
Thermo.prototype.down = function() {
  if (thermo.degrees === thermo.MIN_DEGREES) {
    thermo.degrees = 10;
  }
  else {
    thermo.degrees -= 10;
  }
};
