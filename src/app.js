const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 8010


// Public Static Path
// console.log(path.join(__dirname, "../public"))
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

// using handlebars
app.set('view engine', 'hbs')
app.set('views', template_path);
hbs.registerPartials(partials_path);

// using static path for static code
app.use(express.static(static_path));




app.get("/", (req, res)=>{
    res.render('index')
})
app.get("/about", (req, res)=>{
    res.render('about');
})
app.get("/weather", (req, res)=>{
    res.render('weather');
    // res.send("Hello Weather Page ");
})
app.get("*", (req, res)=>{
    res.render('404error');
})

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`)
})