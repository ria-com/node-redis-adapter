"use strict";

(function(){
    var redis = require('redis'),
        config = require('config'),
        client = redis.createClient(config.redis.port, config.redis.host);

    client.select(config.redis.database);
    client.on('error', function(err){
        throw err;
    });

    module.exports = client
}());