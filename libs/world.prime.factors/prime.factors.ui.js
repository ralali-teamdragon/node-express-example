var form = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.render('form.html');
};

module.exports = form;
