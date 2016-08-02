function Airport(capacity = 10) {
  this.hangar = [];
  this.CAPACITY = capacity;
}
Airport.prototype.landPlane = function(plane) {
  if (this.isStormy() || this.isFull() ) {
    return false;
  }
  else {
    plane.land();
    this.hangar.push(plane);
    return plane.isLanded;
  }
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

Airport.prototype.isFull = function() {
  if (this.hangar.length < this.CAPACITY) {
      return false;
  }
  else {return true;}
}
