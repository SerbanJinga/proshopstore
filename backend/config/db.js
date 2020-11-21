const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://dbUser:parola@cluster0.fak7d.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(err){
        console.error(`Error: ${err.message}`)
        process.exit()
    }
}

module.exports = connectDB