describe ("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  it ("instructs plane to land and confirms it", function() {
    expect(airport.landPlane(plane)).toEqual(true);

  });

  it("stores the plane in the hangar", function() {
    airport.landPlane(plane);
    expect(airport.hangar).toEqual([plane]);
  });

  it("instructs a plane to take off and confirms it", function() {
    expect(airport.takeOff(plane)).toEqual(true);
  });

});
