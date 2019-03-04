
var fs = require('fs')
var rewire = require('rewire')
var taxi = rewire('../modules/taxi')

describe('Short Route', function () {

	/* the routedata comes from an external API that is not guaranteed to return consistent data. We substitute a different function for testing that returns a fixed object. */
	/*taxi.__set__('getRouteData', function(start, end) {
		console.log('MOCK 2')
		const data = fs.readFileSync('spec/routedata/cov_uni_cat.json', "utf8")
		return JSON.parse(data)
	})*/

	it('should set Gulson Road, Coventry as the current location', function(done) {
		taxi.setHome('Gulson Road, Coventry', function(data) {
			expect(data.lat).toEqual(52.405851)
			expect(data.lng).toEqual(-1.496185)
			done()
		})
	})

	it('should calculate the fare to Coventry Cathedral', function(done) {
		taxi.getFare('Coventry Cathedral', function(data) {
			expect(data.distance).toEqual(1666)
			expect(data.duration).toEqual(303)
			expect(data.cost).toEqual(2.62)
			done()
		})
	})

})
