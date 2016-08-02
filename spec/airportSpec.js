describe ("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  describe("when not stormy", function() {

    beforeEach(function() {
      airport.isStormy = function() { return false; }
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

    it ("makes sure that plane leaves the hanger", function() {
      airport.landPlane(plane);
      airport.takeOff(plane);
      expect(airport.hangar).toEqual([]);
    });

  })

  describe("when stormy", function() {

    beforeEach(function() {
      airport.isStormy = function() { return true; }
    });

    it ("prevents plane from taking off if stormy", function(){
      airport.isStormy = function() {
        return true;
      }
      expect(airport.takeOff(plane)).toEqual(false);
    });

    it ("prevents plane from landing if stormy", function() {
      airport.isStormy = function() { return true; };
      expect(airport.landPlane(plane)).toEqual(false);
    })
  })
});
