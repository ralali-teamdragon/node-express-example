var request = require('request');
var http    = require('http');
var chai = require('chai');
chai.use(require('chai-json-schema'));
var expect = chai.expect;
var assert = chai.assert;
var server  = require('../libs/server');

describe('String Guard make it accept a GET request with a string as parameter and make it respond a JSON containing the "not a number" error message.:', function() {
    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
   
    it('should be error if not a number', function(done) {
        request('http://localhost:7000/primeFactors?number=hello', function(error, response, body) {
            assert.jsonSchema(JSON.parse(body), { "number" : "hello", "error" : "not a number" });
            done();
        });
    });
})