const express = require('express');
const router = express.Router()
const { ensureGuest, ensureAuth } = require('../middleware/auth')

//Desc -- Login/Landing page
//route -- GET /
router.get('/login', ensureGuest, (req,res) => {
      res.render('login', {
            layout: 'login',
      })
})

//Desc -- Dashboard
//route -- GET /dashboard
router.get('/dashboard', ensureAuth, (req,res) => {
      res.render('dashboard')
})
 
module.exports = router;
