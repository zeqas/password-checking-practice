const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Account = require('../models/user')

module.exports = (app) => { 
  // 匯出並使用 passport.js
  app.use(passport.initialize())
  app.use(passport.session())
  // 設定 passport local strategy
  passport.use(
    new LocalStrategy(
      // 作為驗證欄位
      { usernameField: 'email' }, (email, password, done) => {
        Account.findOne({ email })
        .then(user => {
          // 使用者不存在
          if (!user) return done(null, false)
          // 密碼輸入錯誤 
          if (user.password !== password) return done(null, false)
          // 回傳成功，回傳使用者資訊
          return done(null, user) 
      })
      // 回傳伺服器錯誤
      .catch(err => done(err, false))
  }))

  // 存放資料
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  // 透過 UserID 找回資料，並且儲存在 req.user
  passport.deserializeUser((id, done) => {
    Account.findById(id)
      .lean()
      .then((user) => done(null, user))
      .catch((err) => done(err, null))
  })
}