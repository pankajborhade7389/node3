const express = require("express")

const app = express()

// creating middleware first
const middleware1 = function (req, res, next) {
    console.log("middleware1");
    next()
}
// creating middleware second
const middleware2 = function (req, res, next) {
    console.log("middleware2");
    next()
}

// This middleware for Global
app.use(middleware2);

// Now we are going to create route-

app.get("/page1", middleware1, function (req, res) {
    res.send(" <h1>this is contact page by using middleware 1</h1>" )
})

app.get("/page2", middleware1, function (req, res) {
    res.send(" <h1>this is page 2 by using middleware 1</h1> ")
})

app.get("/page3", function (req, res) {
    res.send("<h1>this is a page 3 by using middleware 2</h1>")
})

app.get("/", function (req, res) {
    res.send("<h1>this is a home page by using middleware 2</h1>")
})

// creating port for use in browser
app.listen(6066);