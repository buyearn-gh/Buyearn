const express = require('express')
const app = express()
app.get('/', (req.res) => res.send('<h1>BuyEarn LIVE</h1>'))
app.listen(3000, ()=> console.log('BuyEarn 	LIVE on 3000'))