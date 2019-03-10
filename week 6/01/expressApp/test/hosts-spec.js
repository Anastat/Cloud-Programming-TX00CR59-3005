const frisby = require('frisby')

/*  // globalSetup defines any settigs used for ALL requests */
frisby.globalSetup({
  request: {
    headers: {'Authorization': 'Basic dGVzdHVzZXI6cDQ1NXcwcmQ=','Content-Type': 'application/json'}
  }
})

frisby.create('get list of all hosts')
    .get('http://localhost:3000/hosts')
    .expectStatus(200)
    .expectHeaderContains('Content-Type', 'application/json')
    .toss()

frisby.create('get list for location Barcelona')
    .get('http://localhost:3000/hosts/find/barcelona')
    .expectStatus(200)
    .expectHeaderContains('Content-Type', 'application/json')
    .expectHeaderContains('Content-Length', '391')
    .toss()

frisby.create('get host by id')
    .get('http://localhost:3000/hosts/5bb10fd140cceb2c98ba5975')
    .expectStatus(200)
    .expectHeaderContains('Content-Type', 'application/json')
    .expectHeaderContains('Content-Length', '328')
    .toss()