var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {

	var number = request.query['number'];
    console.log('Prime Factors Challenge Number: ' + number);

    var decomposition = primeFactorsOf(number);

  	response.setHeader('Content-Type', 'application/json');

    var error = number > 1e6 ? "too big number (>1e6)" : "not a number";

    isNaN(number) || number > 1e6 ? response.send({ number: number, error: error }) : response.send({ number: number, decomposition: decomposition });
};

module.exports = primeFactors;
