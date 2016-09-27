var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {

    var qnumber = request.query['number'];

    if(!Array.isArray(qnumber)) {
        finResult = qresponse(qnumber);
    } else {
        finResult = [];
        for (i = 0; i < qnumber.length; i++) {
            console.log(qnumber[i], 'qnumber');
            finResult[i] = qresponse(qnumber[i]);
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.send(finResult);
};

var qresponse = function(number) {
    var result = primeFactorsOf(number);
    var error  = number > 1e6 ? "too big number (>1e6)" : "not a number";

    return ( isNaN(number) || number > 1e6 ? { number: number, error: error } : { number: number, decomposition: result } );
}

module.exports = primeFactors;
