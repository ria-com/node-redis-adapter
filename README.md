# node-redis-adapter

## Installing
Add to you `package.json` file:
```javascript
{
  "dependencies": {
    "node-redis-adapter": "git://github.com/ria-com/node-redis-adapter.git",
  }
}
```

Then use add to your config file:
```
module.exports = {
    redis: {
        port: 6379,
        host: '127.0.0.1',
        database: 3
    }
}
```

And use:
```javascript
var redis = require('node-redis-adapter');

redis.get('someKey', function(err, value){
    /* some code here */
})
```

List of methods look [here](https://github.com/mranney/node_redis).