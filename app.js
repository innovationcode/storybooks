const path = require('path');
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db');

//Load config
dotenv.config({path: '.env'})

//passport config
require('./config/passport')(passport) // need to pass another argument passport

connectDB();

const app = express()

//logging
if(process.env.NODE_ENV === 'development') {
      app.use(morgan('dev'))
}

//Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs')

//Sessions
app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized:false
}))

//passport middleware
app.use(passport.initialize());
app.use(passport.session())

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
      res.send("Server running ... 👍 😃😓")
})

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))