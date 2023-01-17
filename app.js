const express = require('express')
const app = express()
const port = process.env.PORT || 9000

app.get('/', (req, res) => {
    console.log('GET /')
    res.send('Hello World!')
})

app.get('/orgs', (req, res) => {
    console.log('GET /orgs')
    res.send({ id: 1, name: 'nullstone' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
