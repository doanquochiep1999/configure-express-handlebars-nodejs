const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

//Set our engine to use our handlebars engine and set view engine to handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Routing
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about');
})



app.listen(3000, () => {
    console.log('Server is starting at port', 3000);
})