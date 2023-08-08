const express = require('express')
// Bringing in Express / Import 

const app = express()
// connects express instance to the variable 'app'

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
  });



const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

const dougItems = ['High Resolution Monitor', 'Road Bike', 'Dyneema Backpack', "Dyneema Tent",'New Car', 'Forced Air Furnace', 'Protein Powder', "Shredded Cheese",'Eggs', 'Ice Cream'];

// const PORT = 3000


// app.set("view engine", "jsx");
// app.engine("jsx", require("express-react-views").createEngine());



app.get('/home',(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get('/about',(req,res)=>{
    res.send("<h1>Here is About Page</h1>")
})

// app.get('/contacts',(req,res)=>{
//     res.send("<h1>Contacts</h1>")
// })

// app.get('/something',(req,res)=>{
//     res.send("<h1>Something</h1>")
// })


// app.get('/:indexOfPlantsArray', (req, res) => {
//     res.send(plants[req.params.indexOfPlantsArray]);
// });


// Doug array 
app.get('/:indexOfDougsArray', (req, res) => {
    res.send(dougItems[req.params.indexOfDougsArray]);
});


// app.get('/howdy/:firstName', function(req, res) {
//     console.log(req.params);
//     console.log(req.query);
//     res.send('hello ' + req.query.title + ' ' + req.params.firstName);
//   });




// app.get('/', (req, res) => {
//     res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
//   })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
  })
  



//   app.get('/another-one', (req, res) => {
//     res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
//   })



app.listen('3000',(req, res)=>{
    console.log("server is now listening on port 3000")
})
// Creates the Server based on PORT value 




// add this     "start": "node index.js"
// in package .json 
// under "test"