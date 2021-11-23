const {
    startClientPC,
    startSatelite,
    stopClientPC,
    stopEarthServer,
    stopSatelite,
    stopMarsServer,
    startEarthServer,
    startMarsServer,
    sendMessage,
    assertResponse
} = require('./stubs/messageservice.stubs');

describe('Sending message from PC Client', function() {

  context('to the Earth', function() {
    let earthToken;
    function startEarthNodes() {
        startClientPC();
        const earthToken = startEarthServer();
        return earthToken;
    }
    function stopEarthNodes() {
        stopEarthServer();
        stopClientPC();
    }
    
    beforeEach('Starting Client PC and Earth server', function(){
        earthToken = startEarthNodes();
    })

    afterEach('Stopping Client PC and Earth server', function(){
        stopEarthNodes();
    })

    it ('Should send message to the Earth server without error', function() {
        const response = sendMessage('Hello', 'Earth', earthToken);
        assertResponse(response, 'Success');
    })

    it ('Should send message to the Earth with invalid token => Security Error', function() {
        const response = sendMessage('Hello', 'Earth', 'M4444');
        assertResponse(response, 'Security Error');
    })
  })

  context('to the Mars', function() {
    let marsToken;
       function startMarsNodes() {
        startClientPC();
        startSatelite();
        const marsToken = startMarsServer();
        return marsToken;
    }
    function stopMarsNodes() {
        stopMarsServer();
        stopSatelite();
        stopClientPC();
    }

    beforeEach('Starting Client PC, Satellite, and Mars server', function(){
        marsToken = startMarsNodes();
    })

    afterEach('Stopping Client PC, Satellite, and Mars server', function(){
        stopMarsNodes();
    })

    it ('Should send message to the Mars server without error', function() {
        const response = sendMessage('Hello', 'Mars', marsToken);
        assertResponse(response, 'Success');
    })

    it ('Should send message to the Mars with invalid token => Security Error', function() {
        const response = sendMessage('Hello', 'Mars', 'E6666');
        assertResponse(response, 'Security Error');
    })

    it ('Should send message to the Mars when satellite is offline => Service Unavailable', function() {
        stopSatelite();
        const response = sendMessage('Hello', 'Mars', marsToken);
        assertResponse(response, 'Service is unavailable');
    })

    it ('Should send message to the Mars with invalid token when satellite is offline => Service Unavailable', function() {
        stopSatelite();
        const response = sendMessage('Hello', 'Mars', 'E6666');
        assertResponse(response, 'Service is unavailable');
    })
  })
})


/*
describe('Sending message to the Earth', function() {
    let earthToken;

    function startEarthNodes() {
        startClientPC();
        const earthToken = startEarthServer();
        return earthToken;
    }

    function stopEarthNodes() {
        stopEarthServer();
        stopClientPC();
    }
    
    beforeEach('Starting Client PC and Earth server', function(){
        earthToken = startEarthNodes();
    })

    afterEach('Stopping Client PC and Earth server', function(){
        stopEarthNodes();
    })

    it ('Should send message to the Earth server without error', function() {
        const response = sendMessage('Hello', 'Earth', earthToken);
        assertResponse(response, 'Success');
    })

    it ('Should send message to the Earth with invalid token => Security Error', function() {
        const response = sendMessage('Hello', 'Earth', 'M4444');
        assertResponse(response, 'Security Error');
    })
})

describe('Sending message to the Mars', function() {
    let marsToken;
    
    function startMarsNodes() {
        startClientPC();
        startSatelite();
        const marsToken = startMarsServer();
        return marsToken;
    }

    function stopMarsNodes() {
        stopMarsServer();
        stopSatelite();
        stopClientPC();
    }
    
    beforeEach('Starting Client PC, Satellite, and Mars server', function(){
        marsToken = startMarsNodes();
    })

    afterEach('Stopping Client PC, Satellite, and Mars server', function(){
        stopMarsNodes();
    })

    it ('Should send message to the Mars server without error', function() {
        const response = sendMessage('Hello', 'Mars', marsToken);
        assertResponse(response, 'Success');
    })

    it ('Should send message to the Mars with invalid token => Security Error', function() {
        const response = sendMessage('Hello', 'Mars', 'E6666');
        assertResponse(response, 'Security Error');
    })

    it ('Should send message to the Mars when satellite is offline => Service Unavailable', function() {
        stopSatelite();
        const response = sendMessage('Hello', 'Mars', marsToken);
        assertResponse(response, 'Service is unavailable');
    })

    it ('Should send message to the Mars with invalid token when satellite is offline => Service Unavailable', function() {
        stopSatelite();
        const response = sendMessage('Hello', 'Mars', {mars : 'E4444'});
        assertResponse(response, 'Service is unavailable');
    })
}) 
*/
