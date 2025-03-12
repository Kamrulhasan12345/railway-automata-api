import * as https from 'https'
import {SocksProxyAgent} from 'socks-proxy-agent'; // For SOCKS proxies

const agent = new SocksProxyAgent("socks://45.251.57.49:4153");

const postData = "{\"hash\":\"\",\"eticket\":true,\"shohoz\":false,\"trainBkash\":false,\"trainNagad\":false}"

const req = https.request(
  {
    hostname: "railspaapi.shohoz.com",
    path: "/v1.0/web/handshake",
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "content-length": postData.length,
      "sec-ch-ua": "\"Not;A=Brand\";v=\"24\", \"Chromium\";v=\"128\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "x-requested-with": "XMLHttpRequest",
      "Referer": "https://eticket.railway.gov.bd/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    method: "POST",
    agent: agent
  }, (res)=>{
    let responseData = ''; // Accumulate the response data

    res.on('data', (chunk) => {
      responseData += chunk; // Append each chunk of data as it arrives
    });
  
    res.on('end', () => {
      // All data has been received
      console.log('Response Body:', responseData);
  
      
    });
  
    res.on('error', (error) => {
      console.error('Response Error:', error); // Handle errors during the response
    });})

req.write(postData);
req.end()