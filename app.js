const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const usePassport = require('./config/passport')

const app = express()
const port = 3000

const routes = require('./routes')

require('./config/mongoose')

app.engine('hbs', exphbs({ 
  defaultLayout: 'main',
  extname: '.hbs' 
}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

// session data 並不會儲存在 cookie 裡，cookie 存的是 sessionID

app.use(session({
  secret: 'LoginPractice', // 必填: 用來簽 sessionID 的cookie
  resave: false, // session 存回 session store
  saveUninitialized: true // 將 " 新的 " session 存回 session store
}))

usePassport(app) //

app.use(routes)

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}/login`)
})