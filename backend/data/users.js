import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@shop.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: bcrypt.hashSync('123456')
    },
    {
        name: 'Jane Doe',
        email: 'jane@gmail.com',
        password: bcrypt.hashSync('123456')
    }
]

export default users