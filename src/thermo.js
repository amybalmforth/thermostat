function Thermo() {
  this.degrees = 20;
  this.MIN_DEGREES = 10;
  this.MAX_DEGREES = 25;
  this.powerSaving = true;
  this.energy = 'medium';
};
Thermo.prototype.up = function() {
  this.degrees += 5;
  if (this.degrees > 18) {
    this.energy = 'medium';
  };
  if (this.degrees > 25) {
    this.energy = 'high';
  };
};
Thermo.prototype.down = function() {
  if (this.degrees === this.MIN_DEGREES) {
    this.degrees = this.MIN_DEGREES;
  }
  else {
    this.degrees -= 5;
  };
  if (this.degrees < 25) {
    this.energy = 'medium';
  };
  if (this.degrees < 18) {
    this.energy = 'low';
  };
};
Thermo.prototype.turnOffPowerSave = function() {
  this.powerSaving = false;
  this.MAX_DEGREES = 32;
};
Thermo.prototype.turnOnPowerSave = function() {
  this.powerSaving = true;
  this.MAX_DEGREES = 25;
};
Thermo.prototype.reset = function() {
  this.degrees = 20;
};
