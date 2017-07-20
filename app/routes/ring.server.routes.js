const users = require('../../app/controllers/users.server.controller');
const rings = require('../../app/controllers/rings.server.controller');

module.exports = function(app) {
    app.route('/api/rings')
        .get(rings.list)
        .post(users.requiresLogin, rings.create);
    };
