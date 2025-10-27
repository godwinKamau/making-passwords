const connectToMongo = require('./db')
const express = require('express')
const app = express()
const port = 3300


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


connectToMongo()

require('./routes.js')(app);


app.use('/auth',require('./auth'))


app.set('viewengine','ejs')

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Running on localhost:${port}`)
})