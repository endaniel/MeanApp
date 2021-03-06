var User = require('./models/user');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/users', function(req, res) {
        // use mongoose to get all nerds in the database
        User.find(function(err, users) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(users); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('./public/index.html'); // load our public/index.html file
    });

};