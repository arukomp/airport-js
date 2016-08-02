function Airport() {
  this.hangar = [];
}
Airport.prototype.landPlane = function(plane) {
  plane.land();
  this.hangar.push(plane);
  return plane.isLanded;
}
Airport.prototype.takeOff = function(plane) {
  if (this.isStormy()) {
    return false
  }
  else {
    plane.takeOff();
    this.hangar.pop(plane);
    return !plane.isLanded;
  }
}

Airport.prototype.isStormy = function() {
  number = Math.random();
  if (number < 0.3) {
    return true;
  }
  else {
    return false;
  }

}
