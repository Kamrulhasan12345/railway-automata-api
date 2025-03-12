import https from 'https';
import { HttpProxyAgent } from 'socks5-http-client';

const agent = new HttpProxyAgent(
	'http://115.127.88.137:8080'
);

https.get('https://eticket.railway.gov.bd', { agent }, (res) => {
	res.pipe(process.stdout);
});
