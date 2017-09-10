const express = require('express');
const app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.html')
})


app.listen(3000, function() {
  console.log('listening on 3000')
})


