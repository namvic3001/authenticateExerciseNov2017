import mongoose from 'mongoose'



//get the Schema class from mongoose module
//so we can create an instance of schema
let Schema = mongoose.Schema

//To create a model, which is what we need to create documents and 
//collections, we need to pass to it a schema. Here, we define
//a schema for mongoose to use to create a model

//create a new instance of the Schema class with parameter as an
//object, containg key:value pairs as info to pass into shema
let UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        unique: false
    },
    favoriteBook: {
        type: String,
        trim: true,
        required: false,
        unique: false
    },
    password: {
        type: String,
        trim: false,
        required: true,
        unique: false
    }

})





//The schema above is information needed to create a Model, which
//is what we really need. Schema is supporting info to create a 
//model.
//now we create a model which we need in order to create a new document,
//ie a new user. we use this model ie variable UserModel which is a 
//class definition, to create a new document instance when we want to create
//a new user. First argument specifies a collection will be created
// in the database called  
//'Users', this is the first argument. 2nd argument passed the Schema
// defined above, as a basis to create new document belonging to the 'Users' 
//collection
let UserModel = mongoose.model('UsersCollection', UserSchema)





module.exports =  UserModel

