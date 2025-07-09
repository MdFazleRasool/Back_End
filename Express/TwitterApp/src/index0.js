import express from 'express'
import morgan from 'morgan'
// create a new express app/server
const app = express()

 
//console.log(dirname(fileURLToPath(import.meta.url)));
 


app.set('views', import.meta.dirname + '/views');  

app.set('view engine', 'ejs');    

// for req body
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use(morgan('combined'));


app.get('/',(req,res) => {
    res.render('home',{name : 'mfrasool'});
});







function mid1(req,res,next){
    console.log('mid1',next);
    next();
}
function mid2(req,res,next){
    console.log('mid2',next);
    next();
}
function mid3(req,res,next){
    console.log('mid3',next);
    next();
}

function commonMiddleware(req,res,next){
    console.log('commonMiddleware',next);
    next();
}

app.use(commonMiddleware); // it will always get executed   



// what to do if someOne  makes a  GET request to /ping
app.get('/ping',[mid1,mid3,mid2], (req,res) => {
    console.log(req.query);
    
    return res.json({
        message:'pong'
    });
}); 

const middlewares = [mid1,mid3,mid2];
app.post('/hello',middlewares, (req,res) => {
    console.log("query params",req.query);
    console.log("req body" , req.body);
    return res.json({
        message:'world'
    });
}); 


app.get('/tweet/:tweet_id/comment/:comment_id',(req,res) =>{
    console.log(req.params);
    return res.json({
        message:'tweet details'
    }); 
});

// app.all('*',(req,res) => {
//     return res.status(404).json({
//         message : "Not Found" 
//     }); 
// });

//define a port and attach it to the express app
app.listen(3000,() =>{
    console.log("Server is running on port 3000");
})
