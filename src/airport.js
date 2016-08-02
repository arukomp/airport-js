function Airport() {
  }
Airport.prototype.land_plane = function(plane) {
  plane.land();
  return plane.isLanded;
}
