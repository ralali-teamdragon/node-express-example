var request = require('request');
var http    = require('http');
var chai = require('chai');
chai.use(require('chai-json-schema'));
var expect = chai.expect;
var assert = chai.assert;
var server  = require('../libs/server');

describe('Multiple entries', function() {
    var testServer;

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });


    it('should be accept a GET request with several numbers', function(done) {
        request('http://localhost:7000/primeFactors?number=300&number=120&number=hello', function(error, response, body) {
            assert.jsonSchema(JSON.parse(body), [
    {
        "number" : 300,
        "decomposition" : [ 2, 2, 3, 5, 5 ]
    },
    {
        "number" : 120,
        "decomposition" : [ 2, 2, 2, 3, 5 ]
    },
    {
        "number" : "hello",
        "error" : "not a number"
    },
]);
            done();
        });
    });
})
