let express = require('express');
let app = express();
let http = require('http').Server(app);
let twig = require('twig');
let bodyParser = require('body-parser');
let session = require('express-session');
// const mongoose = require('mongoose');
// const mongooseUniqueValidator = require('mongoose-unique-validator');


// global.userModel = require('./models/user').createSchema(mongoose, mongooseUniqueValidator);

// // NOTE MongoDB Connection
// mongoose.connect('mongodb://boosthelper:' + DbPassword + '@ds139193.mlab.com:39193/boosthelper', {useNewUrlParser: true, useCreateIndex: true})
//     .then(() => {
//       console.info('Connecté au serveur MongoDB');
//     }).catch((err) => console.error(err));
// mongoose.set('useFindAndModify', false);

app.set('views', 'views');
app.set('view engine', 'html');
app.engine('html', twig.__express);
app.set('twig options', {
    strict_variables: false,
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false,
}));


// parse application/json
app.use(bodyParser.json());

app.use('/vendor', express.static('public/vendor'));
app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));
app.use('/img', express.static('public/img'));
app.use('/assets', express.static('public'));

// initialise une session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 60000
    }
}))


// ROUTES
require('./routes/index').init(app, session, http);

// ALL OTHER ROUTES REDIRECT TO '/'
app.get('*', function (req, res) {
    res.redirect('/');
});



client.login(config.token);


module.exports = http;

