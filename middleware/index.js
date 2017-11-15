let alreadyLoggedIn =  (req, res, next) => {
    console.log('got to mialreadyLoggedIn')
    
    if(req.session && req.session.userId) {//so if user is logged in, and goes to
                                            // login or register path, where we
                                            //will put this middleware, then profile
                                            //page is shown instead
        console.log('got to middlware.alreadyLoggedIn CALLING REDIRECT')
                                            
        res.redirect('/members/profile')
    }
    else {
        console.log('got to middlwarealreadyLoggedIn CALLING NEXT()')
        
        next()
    }
}


let requiresLogin = (req, res, next) => {
    console.log('got to middleware.requiresLogin')

    if (req.session && req.session.userId) { 
        console.log('calling NEXT() AS ALREADY LOGGED IN')
       next()
    }
    else {
       //USER NEEDS TO LOGIN, RETURN AN ERROR WHICH WILL GET HANDLED BY
       //ERROR MIDDLEWARE
       let err = new Error('You are not logged in')
       err.status = 401
       next(err)//go to next middleware, eventually will get to error
       // habdling middleware
    }
}

module.exports.alreadyLoggedIn = alreadyLoggedIn
module.exports.requiresLogin = requiresLogin







