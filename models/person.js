const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Define the person schema

const personSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true  
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum: ['chef' , 'waiter','manager'],
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required : true,
        unique: true
        },
        address:{
            type : String
        },
        salary:{
            type: Number,
            required: true
        },
        username:{
            required : true,
            type: String
        },
        password:{
            required : true,
            type : String
        }
});

personSchema.pre('save',async function(next){
    const person = this;
    //hash the password  only if it has been modified (or is new)
    if (!person.isModified('password')) return next();
    try{
// hash password generation 
const salt = await bcrypt.genSalt(10);

// hash password 
 const hashedPassord = await bcrypt.hash(person.password,salt);

 // override the plain pasword into hased password
 person.password = hashedPassord;
        next();
    }catch(err){
 return next(err);
    }
})

personSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        //used bcrypt to compare the provide  password with the hased password
        const isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    } catch (error) {
        throw err;
    }
    
}

// sujal ----> ddbjkdjkddkdlkdnsadnnlkndsa
// login ----> arawal

//ddbjkdjkddkdlkdnsadnnlkndsa --> extract salt
// salt+arawal --> hash --> ffddgakdwdwwgdwdwdgddhkjsdh


//Create person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;