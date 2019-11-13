function Thermo() {
  this.degrees = 20;
};
Thermo.prototype.up = function() {
  thermo.degrees += 1;
};
Thermo.prototype.down = function() {
  thermo.degrees -= 1;
}
