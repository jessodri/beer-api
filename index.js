const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// config
const PORT = 3000 // TODO: make env variable 

// routes
const authRouter = require('./auth/authRouter')
const accountRouter = require('./accounts/accountRouter')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/account', accountRouter)

app.listen(PORT, () => {
    console.info(`listening on port ${PORT}`)
})