function Airport() {
  this.hangar = [];
}
Airport.prototype.landPlane = function(plane) {
  plane.land();
  this.hangar.push(plane);
  return plane.isLanded;
}
Airport.prototype.takeOff = function(plane) {
  plane.takeOff();
  return !plane.isLanded;
}
