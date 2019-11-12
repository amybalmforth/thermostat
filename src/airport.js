// class Airport
//
//   DEFAULT_CAPACITY = 20
//
//   attr_reader :planes
//   attr_accessor :capacity
//
//   def initialize(capacity=DEFAULT_CAPACITY)
//     @capacity = capacity
//     @planes = []
//   end
//
//   def land(plane)
//     raise "cannot land the plane: airport at capacity!" if full?
//     raise "cannot land the plane: weather is stormy!" if stormy?
//     @planes << plane
//   end
//
//   def take_off(plane)
//     raise "cannot take off: weather is stormy!" if stormy?
//     @planes
//   end
//
//   def stormy?
//     rand(1..6) > 4
//   end
//
//   def full?
//     @planes.length >= @capacity
//   end
// end

function Plane() {

};

function Airport() {
  this.capacity = 2;
};
Airport.prototype.isFull = function() {
  planes.length >= airport.capacity
  throw "cannot land the plane: airport at capacity!";
};
Airport.prototype.land = function(plane) {
  planes.push(plane);
  return plane;
};
Airport.prototype.takeOff = function(plane) {
  planes.pop();
  return plane;
};

var airport = new Airport();
var plane = new Plane();
var planes = []

airport.land(plane);
airport.takeOff(plane);
