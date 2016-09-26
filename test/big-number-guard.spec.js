var request = require('request');
var http    = require('http');
var chai = require('chai');
chai.use(require('chai-json-schema'));
var expect = chai.expect;
var assert = chai.assert;
var server  = require('../libs/server');


describe('Big Number Guard:', function() {
	
	var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
	it('should be error if to big number', function(done) {
        request('http://localhost:7000/primeFactors?number=1000001', function(error, response, body) {
            assert.jsonSchema(JSON.parse(body), { "number" : 1000001,"error" : "too big number (>1e6)" });
            done(); 
        });
    });
})