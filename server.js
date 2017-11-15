import express from 'express'
import bodyParser from 'body-parser'
import publicAreaRouter from './routes/publicAreaRoutes.js'
import membersAreaRouter from './routes/membersAreaRoutes.js'
import mongoose from 'mongoose'
import session from 'express-session'
import mongoStore from 'connect-mongo'


let MongoStore = mongoStore(session)





let server = express()



//connect via mongoose.connect method, it takes 2 argument,
//1. a string url, 2. object with data to pass to it

//connect to database via connect() method, this will return a 
//'connection' object that we will use.
//this also creates the bookworm database to use (ie > use bookworm)
//in the database
mongoose.connect('mongodb://localhost:27017/bookworm', {
    useMongoClient: true
})

//store the returned connection object in a variable so we can refer to it
var db = mongoose.connection



//set up session middleware for use
server.use(session({//takes 3 arguments, first arg is required, last 2 optional
    secret: 'phuoc loc tho', //required field, random string used to sign
    //cookie for extra layer of security
    resave: true,//optional field, forces a resave to session store
    //whether there are any changes to session or not
    saveUninitialized: false,//optional field, dont save for unused sessions
    
    //use mongo as session store, need to pass in the mongodb handle to 
    //the store
    store: new MongoStore({
        mongooseConnection: db

    })
}))


//make the session object available to the view templates
//by copying userId to the locals object inside the response object.
//so now we can refer to res.locals.userId by just userId .
//so now all response.locals objects, property will have userId value
server.use((req, res, next) => {
    res.locals.userId = req.session.userId
    next()
})



//check if connection was error
db.on('error', console.error.bind(console, 'database connection error'))

//ckeck if connection was a success
db.once('open', () => {
    console.log('SUCCESS, CONNECTED TO DATABSE')
    
})




//this is middleware, it intercepts transmission from 
//browser and takes content of forms and wraps them as
//parameters inside 'body' object.
//so receiver can access via e.g req.body.password
//Need this body parser to pass user input via POST to
// express server, wrapped inside the 'body' object
//. so receiver can access via e.g req.body.password
//This middleware works for ALL routes from the browser.
server.use(bodyParser.urlencoded({extended: true}))
//server.use(bodyParser.json())  //is for json data


server.set('template engine', 'ejs')
server.set('views', __dirname + '/views')

let port = process.env.PORT || 8080

server.listen(port, () => {
    console.log('listening on port', port)
})

 
//specify where to find static files such as css , jpeg etc...
//use middleware to specify the folder in which to find static
//files such as css, img, png, etc...
//here, we tell express to look inside the public folder
server.use(express.static(__dirname + '/public'))

//also use middleware to direct browser path requests to
//correct router for the path

//for site.com/members/* browser path
server.use('/members', membersAreaRouter)//for site.com/members/* path

//for site.com/*  browser paths
server.use('/', publicAreaRouter)//for site.com/* paths  , need to have this after
                                //the members routes, coz if this is first, this will
                                //be actioned and wont get to membersArearoutes
 

