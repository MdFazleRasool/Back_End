import express from 'express'
import morgan from 'morgan'
import { PORT } from './config/serverConfig.js';

import apiRouter from './routes/apiRouter.js'
import connectDB from './config/dbConfig.js';

const app = express()

// for req body
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use(morgan('combined'));

app.use('/api',apiRouter) ; // if the request url starts with  / api ,use the api Router

app.get('/',(req,res) => {
    res.render('home',{name : 'mfrasool'});
});

// what to do if someOne  makes a  GET request to /ping
app.get('/ping', (req,res) => {
    console.log(req.query);
    
    return res.json({
        message:'pong'
    });
}); 

//define a port and attach it to the express app
app.listen(PORT,() =>{
    console.log(` server is running on port ${PORT}`);
    connectDB();
})