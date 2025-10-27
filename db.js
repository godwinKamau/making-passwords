//========================CONNECTOR TO DATABASE=================================//
//                          1.)Import Mongoose
//                   2.) Use a function to connect to db
//           3.)Export that function so the rest of the server can reach it.

const mongoose = require('mongoose')

//changed uri to name the db 
const mongoURI = 'mongodb+srv://jjsway:btYNmK22zrAarZtB@newcluster.j2xaefz.mongodb.net/bonsai?appName=NewCluster'

const connectMongo = async() => {
    try {
        await mongoose.connect(mongoURI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('ERROR: ' ,error.message)
    }
}

module.exports = connectMongo