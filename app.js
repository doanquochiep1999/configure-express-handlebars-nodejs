const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

//Use custom helper
const hbs = exphbs.create({
    defaultLayout: 'main',
    // layoutsDir: 'views/mainLayouts',
    // partialsDir: 'views/pieces'
    extname: '.hbs',
    helpers: {
        list: function (context, options) {
            var ret = "<ul>";
            context.forEach((person) => {
                ret += "<li>" + options.fn(person) + "</li>"
            })
            return ret += "</ul>";
        }
    }
})

app.use(express.static('public'));

//Set our engine to use our handlebars engine and set view engine to handlebars
app.engine('.hbs', hbs.engine);

app.set('view engine', '.hbs');


// Routing
app.get('/', (req, res) => {
    res.render('index', {
        style: 'home.css',
        title: 'Home Page',
        name: 'Hoai Thien',
        age: 5,
        isDisplayNamed: false,
        isAgeEnabled: true,
        people: [
            {
                firstName: "Yehuda",
                lastName: "Katz"
            },
            {
                firstName: "Carl",
                lastName: "Lerche"
            },
            {
                firstName: "Alan",
                lastName: "Johnson"
            }
        ],
        test: '<h3> Welcome to my home page </h3>'
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        style: 'about.css',
        title: 'About Me',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, animi? Facere repellat alias exercitationem quibusdam expedita voluptatibus non. Sed, explicabo cumque facere ratione libero iste nostrum officia eius iusto iure numquam culpa quaerat dolores atque mollitia? Harum repudiandae obcaecati ullam.'
    });

})

app.get('/each/helper', (req, res) => {
    res.render('contact', {
        people: [
            "James",
            "Peter",
            "Sadrack",
            "Morrisa"
        ],
        user: {
            username: "hiep",
            age: 20,
            phone: 123456
        },
        list: [
            {
                items: ['Mango', 'Banana', 'Pineapple']
            },
            {
                items: ['Potatoes', 'Manioc', 'Avocado']
            }
        ]

    });
})
app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        style: 'dashboard.css',
        isListEnabled: true,
        author: {
            firstName: 'Peter',
            lastName: 'James',
            project: {
                name: "Build Random Quote"
            }
        }
    })
})

app.get('/look', (req, res) => {
    res.render('lookup', {
        user: {
            username: "hiep",
            age: 20,
            phone: 123456
        },
        people: [
            "James",
            "Peter",
            "Sadrack",
            "Morrisa"
        ]
    })
})

app.listen(3000, () => {
    console.log('Server is starting at port', 3000);
})