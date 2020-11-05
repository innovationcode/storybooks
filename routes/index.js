const express = require('express');
const router = express.Router()

//Desc -- Login/Landing page
//route -- GET /
router.get('/login', (req,res) => {
      res.render('login', {
            layout: 'login',
      })
})

//Desc -- Dashboard
//route -- GET /dashboard
router.get('/dashboard', (req,res) => {
      res.render('dashboard')
})
 
module.exports = router;
