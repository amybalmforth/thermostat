// < 18 is low-usage
// < 25 is medium-usage
// anything else is high-usage

function Thermo() {
  this.degrees = 20;
  this.MIN_DEGREES = 10;
  this.MAX_DEGREES = 25;
  this.powerSaving = true;
  this.energy = 'medium';
};
Thermo.prototype.up = function() {
  thermo.degrees += 5;
  if (thermo.degrees > 18) {
    thermo.energy = 'medium'
  }
  if (thermo.degrees > 25) {
    thermo.energy = 'high'
  };
};
Thermo.prototype.down = function() {
  if (thermo.degrees === thermo.MIN_DEGREES) {
    thermo.degrees = 10;
  }
  else {
    thermo.degrees -= 5;
  }
  if (thermo.degrees < 25) {
    thermo.energy = 'medium'
  }
  if (thermo.degrees < 18) {
    thermo.energy = 'low'
  }
};
Thermo.prototype.turnOffPowerSave = function() {
  thermo.MAX_DEGREES = 32;
};
Thermo.prototype.reset = function() {
  thermo.degrees = 20;
};
