const express = require('express')
const app = express()
const $path = require('path')
const port = 5000
const dataPath = $path.resolve(./data)

app.get('/', (req, res) => {
  console.log('Requested path: ' req.path);
  const theFile = $path.join(dataPath, 'message.json');
  res.sendFile(theFile);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

