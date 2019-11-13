function Thermo() {
  this.degrees = 20;
  this.MIN_DEGREES = 10;
  this.MAX_DEGREES = 25;
  this.powerSaving = true;
};
Thermo.prototype.up = function() {
  thermo.degrees += 5;
};
Thermo.prototype.down = function() {
  if (thermo.degrees === thermo.MIN_DEGREES) {
    thermo.degrees = 10;
  }
  else {
    thermo.degrees -= 5;
  }
};
Thermo.prototype.turnOffPowerSave = function() {
  thermo.MAX_DEGREES = 32;
};
Thermo.prototype.reset = function() {
  thermo.degrees = 20;
}
