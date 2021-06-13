const express = require('express');
// import bodyParser from "body-parser";

const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const static = express.static("public");

app.use(static);



app.use(bodyParser.json());
// app.use((req,res,next) =>{
//     console.log("we intercepted the req");
//     next();
// })

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

app.post('/admin/urls/', (req, res) => {
    console.log(req.body);
    res.send('Hello from another!');
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})