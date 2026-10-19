const http = require('http');
const server = http.createServer((req,res)=>{
res.writeHead(200, {'Content-Type':'text/html'});
res.end('<html><body style="text-align:center;padding-top:80px;font-family:Arial"><h1>BuyEarn Ghana - LIVE!</h1><h2>GHS 299</h2><button onclick="pay()" style="padding:20px 40px;background:black;color:white;font-size:20px;border-radius:10px">Pay Now</button><script src="https://js.paystack.co/v1/inline.js"></script><script>function pay(){var e=prompt("Enter email"); if(!e) return; PaystackPop.setup({key:"pk_test_5e1f462e255725f9845d892e519636bc1a699da8",email:e,amount:29900,currency:"GHS",callback:function(r){alert("PAID! Ref:"+r.reference)}}).openIframe();}</script></body></html>');
});
server.listen(3000, ()=>{ console.log('BuyEarn LIVE on localhost:3000'); });
