// Load the module dependencies
const mongoose = require('mongoose');
const Ring = mongoose.model('Ring');

// Create a new error handling controller method
const getErrorMessage = function(err) {
    if (err.errors) {
        for (const errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

// Create a new controller method that creates new articles
exports.create = function(req, res) {
    // Create a new article object
    const ring = new Ring(req.body);

    // Set the article's 'creator' property
    ring.creator = req.user;

    // Try saving the article
    ring.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(ring);
        }
    });
};

// Create a new controller method that retrieves a list of articles
exports.list = function(req, res) {
    // Use the model 'find' method to get a list of articles
    Ring.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, rings) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(rings);
        }
    });
};
