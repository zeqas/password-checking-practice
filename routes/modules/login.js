const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
  return res.redirect('/login')
})

router.get('/login', (req, res) => {
  return res.render('login')
})

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email })
    .lean()
    .then(user => {
      if (!user || (user.password !== req.body.password)) {
        return res.render('login', { alert: true })
      }
      return res.redirect(`/authorized/${user._id}`)
    })
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