let express = require('express')
let bcrypt = require('bcryptjs')
let UserModel = require('../models/UserModel.js')
//the model UserModel allows us to create new document (ie user) and 
//UserModel also allows us to access the database collection to 
//find and retrieve documents (ie users)

let mid = require('../middleware') //this is same as ./middleware/index.js coz
                                        //index.js is default





let router = express.Router()
 


 //route for presenting / ie home (index) page
router.get('/', (req, res) => {//this is for site.com/ path

    // res.send('hello there, this is /home path inside router.js file')
    res.render('index.ejs', {

    })
})


//route for presenting /about page
router.get('/about', (req, res) => {//for site.com/about path
    res.send('hello there, this is /about inside router.js file')
})


//route for presenting /contact page
router.get('/contact', (req, res) => {
    res.send('hello there, this is /contact path inside router.js file')
})


//route for presenting the /register page
router.get('/register', mid.alreadyLoggedIn, (req, res) => {
    // res.send('hello there, this is /register path inside router.js file')
    res.render('register.ejs', {
        title: "Register Page"
    })
})


//destination route for register page's POST method,
//as specified in the 'action='/register' method="post" 
//in the html (ejs) register page.
// ie for retrieving and processing the data from the user
//forms after he presses 'submit'
router.post('/register', (req, res, next) => {
    // res.send('hello there, this is POST /register path inside router.js file')
    let name = req.body.name
    let email = req.body.email
    let favoriteBook = req.body.favoriteBook
    let password = req.body.password
    let confirmPassword = req.body.confirmPassword

    if (name && email && favoriteBook && password) {//if all exist
        if (password != confirmPassword) {
            let err = new Error('error, PASSWORD AND CONFIRM PASSWORD DO NOT MATCH')
            err.status = 400
            return (next(err))
        }

        //if gets here, user has filled out all the forms\

        //now create object with user data, so can pass the object to model
        //to create new document (ie new user)
        var userData = {
            name: name,
            email: email,
            favoriteBook: favoriteBook,
            password: password
        }


        //create a new user based on the UserModel Schema using the data
        //from the data input from the user as collect in the browser
        //forms (see above code)
        let newUser = new UserModel(userData)


        //hash the password
        //10 is the number of hash passes, larger means more secure
        bcrypt.hash(newUser.password, 10, (err, hash) => {
            if (err) {
               return next(err)
            }
            

            console.log('PASSWORD PLAINTEXT BEFORE HASHING IS ' + newUser.password)

            //replace plain text password with hashed password
            newUser.password = hash //now this hash can be saved to database

            console.log('PASSWORD AFRTER HASHED IS ' + newUser.password)
            // console.log('PASSWORD AFRTER HASHED and AFTER OUT OF LOOP IS ' + newUser.password)
            
            
            //when gets to here, the hashing is complete, now
            //. newuser's password is now hashed. so now 
            // can save new user to database
            newUser.save((err) => {
                if(err) {
                    console.log('ERROR SAVING USE TO DATABASE')
                    return next(err)
                }
                
                console.log('SUCCESS, SAVED NEW USER TO DATABASE, password is', newUser.password)

            })//save 
            

            //session object is always sent with, inside the request object
            //here we assign a unique id to property of session which
            //we created (ie userId)
            req.session.userId = newUser._id //._id is mongodb's id for this document

            //realistically, need to see if user already previously registered, 
            //display message of success, etc... but here, just redirect to members area 
            //for now
            res.redirect('/members/profile')//redirects to 'site.com/members/   path
       
        })//bcrypt
    
    }//if input fields present and valid
    else {
        let err = new Error('all fields required')
        err.status = 400
        return next(err)
    }
})//register.POST route



//route for presenting /login page
router.get('/login', mid.alreadyLoggedIn, (req, res) => {
    res.render('login.ejs', {
        title: 'Login'
    })
})


router.post('/login', (req, res, next) => {
    console.log('password from login is ', req.body.password)

    if(req.body.email && req.body.password) {//valid if both exist

        console.log('GOT TO INSIDE LOGIN POST ROUTE')

        UserModel.findOne({email: req.body.email}).exec()
        .then((dbresult)=>{
            bcrypt.compare(req.body.password, dbresult.password, (err, match) =>{
                if(err) {
                    console.log('ERROR IN COMPARING PASSWORD WITH DATABASE PASSWORD')
                    return next(err)
                }

                if(match) {//match is boolean result passed in by bcrypt.compare
                    console.log('LOGIN SUCCESS: INPUT PASSWORD MATCHED DATABSE')
                    
                    //session object is always sent with, inside the request object
                    //here we assign a unique id to property of session which
                    //we created (ie userId)
                    req.session.userId = dbresult._id //._id is mongodb's id for this document
                    res.redirect('/members/profile')
                }
                else {//no match, password does not match one in database
                    console.log('LOGIN PASSWORD NO MATCH')
                    res.redirect('/')
                }
            })
        })
           
    }
    else {//both fields not filled out, error
            err = new Error('Both fields need to be filled')
            err.status = 401 //401 is code for authentication error
            return next(err)
    }

     
})


router.get('/logout', (req, res) => {

    if(req.session) {
        req.session.destroy((err) => {
            if(err) {
                return next(err)
            }
            else {
                res.render('loggedout.ejs', {
                    title: 'Logged Out'
                })
            }
        })
    }
    
})




module.exports = router