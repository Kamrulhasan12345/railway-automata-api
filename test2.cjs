var Agent = require('socks5-http-client/lib/Agent');
var request = require('request')

request({
	url: 'http://railspaapi.shohoz.com',
	agentClass: Agent,
	agentOptions: {
		socksHost: '115.127.172.70', // Defaults to 'localhost'.
		socksPort: 5678 // Defaults to 1080.
	}
}, function(err, res) {
	console.log(err || res.body);
});
