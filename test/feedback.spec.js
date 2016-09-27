var request = require('request');
var http    = require('http');
var chai = require('chai');
chai.use(require('chai-json-schema'));
var expect = chai.expect;
var assert = chai.assert;
var server  = require('../libs/server');

describe('Feedback', function() {
    var testServer;
    
    /*beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
   
    it('should be hidden first time', function(done) {
        browser.visit(url, function(err) {
        var a = browser.document.querySelector('#info');
         var classes = a.className;
            expect(classes).toEqual('hidden');
        });

        done();
    });

    it('should be reset hidden', function(done) {
        browser.visit(url, function(err) {
        browser.document.grid = data;
        var b = browser.document.querySelector('#info');
         var classes = b.className;
            expect(classes).toEqual('data');
        });
            done();
        });

     it('should start with css class free', function(done) {
        browser.visit(url, function(err) {
        var a = browser.document.querySelector('#gate1');
         var classes = a.className;
            expect(classes).toEqual('free');
        });

        done();
    });

    it('should have its css class contain occupied', function(done) {
        browser.visit(url, function(err) {
        var b = browser.document.querySelector('#gate1');
         var classes = b.className;
            expect(classes).toEqual('occupied');
        });
            done();
        });*/
    });