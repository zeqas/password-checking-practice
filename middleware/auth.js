module.exports = {
  // 驗證使用者是否登入
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }
}