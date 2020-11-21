const bcrypt = require('bcryptjs')
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Normal User',
        email: 'normal@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

module.exports = users