var Hapi = require('hapi');
var Good = require('good');

var serverOptions = {};
var serverOptions = {
    files: { relativeTo: './static'}
};

var server = new Hapi.Server(3000, 'localhost', serverOptions);

server.route({
    method: 'GET',
    path: '/static/{path*}',
    handler: function (request, reply) {
        console.log('PATH >>> ' + request.params.path);
        reply.file(request.params.path);
    }
});

server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: function (request, reply) {
        reply.file(__dirname + '/static/favicon.ico');
    }
});

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: function (request, reply) {
        console.log('PATH >>> ' + request.params.path);
        reply.file('index.html');
    }
});

module.exports = {
    start: function start() {
        server.pack.register(Good, function (err) {
            if (err) {
                throw err; // something bad happened loading the plugin
            }

            server.start(function () {
                server.log('info', 'Web development server running at: ' + server.info.uri);
            });
        });
    }
};
