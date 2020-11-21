const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors')
const path = require('path')
const morgan = require('morgan')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const app = express()
connectDB()


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())


dotenv.config()

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)




app.get('/api/config/paypal', (req, res) => res.send("AXAR3IJpBxSS2s9c2T10TKiwrQvHxv5BRsNusosrBKKXE3LUWOql0TcDcIHVqeDe9z803NgZ5op2Z4Ek"))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('Server running')
    })
}

app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')))

app.use(notFound)

app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('API Is running...')
})



const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on Port: ${PORT}`.yellow.inverse)
})