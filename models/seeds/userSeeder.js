const mongoose = require('mongoose')
const User = require('../user')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/password-checking-practice', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})

const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

// create 的用意是什麼?
db.once('open', () => {
  User.create(users)
  console.log('done')
})