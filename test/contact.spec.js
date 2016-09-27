var request = require('request');
var http    = require('http');
var chai = require('chai');
var expect = chai.expect;
var server  = require('../libs/server');

describe('Include contact me:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
   it('answers with text/html header', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(response.headers['content-type']).to.equal('text/html');
            done(); 
        });
    });

   
    it('returns the expected contact me', function(done) {
        request('http://localhost:7000', function(error, response, body) {
            expect(body.replace(/\r?\n|\r|\s/g,"")).to.contain('<html><body><h1>HelloYose</h1><ul><li><aid="repository-link"href="https://github.com/jpartogi/node-express-example">SourceRepository</a></li><li><aid="ping-challenge-link"href="ping">PingMe</li><li><aid="contact-me-link"href="contact">ContactInformation</li></ul></body></html>');
            done(); 
        });
    });
   
});