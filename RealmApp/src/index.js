
const express = require('express')

const app = express()


app.get('/', (req, res)=>{
  res.send('hi there this is radhey')
})
app.listen(8081, ()=>{
  console.log('Listening on port 3000')
})