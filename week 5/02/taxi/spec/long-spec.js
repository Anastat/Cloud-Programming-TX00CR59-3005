
var fs = require('fs')
var rewire = require('rewire')
var taxi = rewire('../modules/taxi')

describe('Long Length Route', function () {

	/* the routedata comes from an external API that is not guaranteed to return consistent data. We substitute a different function for testing that returns a fixed object. */
	taxi.__set__('getRouteData', function(start, end) {
		console.log('MOCK 1')
		const data = fs.readFileSync('spec/routedata/long.json', "utf8")
		return JSON.parse(data)
	})

	it('should set Coventry Cathedral as the current location', function(done) {
		taxi.setHome('Coventry Cathedral, Coventry', function(data) {
			expect(data.lat).toEqual(52.408579)
			expect(data.lng).toEqual(-1.5071)
			done()
		})
	})

	it('should calculate the fare to Moresby Park, Whitehaven', function(done) {
		taxi.getFare('Moresby Park', function(data) {
			expect(data.distance).toEqual(378821)
			expect(data.duration).toEqual(15291)
			expect(data.cost).toEqual(596.57)
			done()
		})
	})

})
