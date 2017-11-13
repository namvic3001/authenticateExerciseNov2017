let express = require('express')
let UserModel = require('../models/UserModel.js')
let mid = require('../middleware')


let router = express.Router()
 

router.get('/profile',mid.requiresLogin, (req, res, next) => {//this is for site.com/members/ path
    //console.log(req.session.userId)
    if(!req.session.userId) {//userId not exist, user not logged in
        let err = new Error('YOU ARE NOT AUTHORIZED, NO USERID')
        err.status = 403
        return next(err)
    }
    
    //if gets here, userid exists, check if it matches with 
    //this user
    UserModel.findById(req.session.userId).exec((err, user) => {
        if(err) {//userid exists in session object,  but userid not match this user
            return next(err)
        }
        else {//found matching userId in session object
            console.log('NOW ABOUT TO RENDER PROFILE.EJS PAGE')
            res.render('profile.ejs', {
                name: user.name,
                email: user.email,
                book: user.favoriteBook
            })
        }
    })//usermodel


})
 

// router.get('/profile', (req, res) => {//this is for site.com/members/profile path
    
//     console.log(req.session.userId)
//     res.send('profile.ejs')
//     // res.render('index.ejs', {
    
//     // })
// })
 

module.exports = router