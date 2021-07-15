const User = require('../user')
const db = require('../../config/mongoose')

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


db.once('open', () => {
  console.log('mongodb connected!')
})

// 登入需要CRUD? -> 不用
// 但是創建使用者和設定就要