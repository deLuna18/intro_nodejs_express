const express = require('express')
const app = express();
const port = 3000;

//Serve static files from the "public" folder
app.use(express.static('public'));

app.use (express.json());

app.post('submit',(req, res)=> {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

// Define a route for the home page
app.get('/',(req, res)=> {
    res.send('Hello, World!');
});

app.get('/about',(req, res)=> {
    res.send('About Us');
});
//Start the server
app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`);
});
