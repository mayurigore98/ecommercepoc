const mongoose =require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema( {
    name : {
    type: String,
   // required :true,
    trim:true
    },
    lastname : {
        type: String,
       // required : true,
        trim : true
    },
    email: {
        type: String,
        required : true,
        unique: true,
        trim : true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    // username : {
    //     type: String,
    //     //required : true,
    //     unique: true,
    //     trim : true,
    //     lowercase: true
    // },
    password:{
        type: String, 
        required : true,
        trim: true
    },
    
     street: {
            type:String
        },
        city: {
            type:String
        },
        state: {
            type: String
        },
        pin:{
            type:String
        },
    
    status : {
        type:String,
        trim : true
     }
     ,
     tokens: [{
        token: {
             type: String,
            required: true
         }
     }]
})

userSchema.methods.generateAuthToken = async function () {
     const user = this
     const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, config.JWT_SECRET, {
        expiresIn: '48h'
      })

     user.tokens = user.tokens.concat({ token })
    await user.save()

     return token
 }

userSchema.statics.findByCredentials = async (email , password) =>{
    const user = await User.findOne({email})

    if(!user){
        throw new Error('unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('unable to login')
    }

    return user
}

//hashing password
userSchema.pre('save' , async function(next) {
    const user =this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password , 8)
    }
    next()
} )

const User = mongoose.model('user' ,userSchema)
module.exports =User

