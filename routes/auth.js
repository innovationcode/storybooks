const express = require('express');
const passport = require('passport')
const router = express.Router()

//Desc -- Auth with google
//route -- GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))

//Desc -- Google auth callback
//route -- GET /auth/google/callback
//on login failed will redirect to /login  on success will go to /dashboard
router.get('/google/callback', 
           passport.authenticate('google', {failureRedirect: '/login'}),
           (req, res) => {
                  res.redirect('/dashboard')
            }
)
 
module.exports = router;
