describe ("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  it ("instructs plane to land and confirms it", function() {
    expect(airport.land_plane(plane)).toEqual(true);

  });




});
