const express = require('express')
const app = express()
const port = process.env.PORT || 9000

app.get('/', (req, res) => {
    console.log('GET /')
    res.send('Hello World! (Auto-deployed)')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
