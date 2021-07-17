const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
  return res.redirect('/login')
})

router.get('/login', (req, res) => {
  return res.render('login')
})


// 利用 passport 驗證
router.post('/login', passport.authenticate('local', 
  { failureRedirect: '/login' }), (req, res) => {
    return res.redirect(`/authorized/${req.user._id}`)
})

router.get('/authorized/:id', (req, res) => {
  const id = req.params.id
  return User.findById(id)
    .lean()
    .then(user => {
      res.render('authorized', { user })
    })
})

module.exports = router