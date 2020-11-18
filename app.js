const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

//Set our engine to use our handlebars engine and set view engine to handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Routing
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        name: 'Hoai Thien',
        age: 5,
        isDisplayNamed: false,
        isAgeEnabled: true
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, animi? Facere repellat alias exercitationem quibusdam expedita voluptatibus non. Sed, explicabo cumque facere ratione libero iste nostrum officia eius iusto iure numquam culpa quaerat dolores atque mollitia? Harum repudiandae obcaecati ullam.'
    });

})


app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        isListEnabled: true
    })
})

app.listen(3000, () => {
    console.log('Server is starting at port', 3000);
})