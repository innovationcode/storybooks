const express = require('express');
const router = express.Router()

//Desc -- Login/Landing page
//route -- GET /
router.get('/login', (req,res) => {
      res.send('Login')
})

//Desc -- Dashboard
//route -- GET /dashboard
router.get('/dashboard', (req,res) => {
      res.send('Dashboard')
})
 
module.exports = router;
