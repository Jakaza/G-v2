const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const User = require('../models/user')

const initDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL,
      {
        dbName: 'portfolio',
        autoIndex: true, 
      })
    console.log('DB Connected.')

    const existingUser = await User.findOne({ email: process.env.EMAIL });

    if(!existingUser){
        const password = await hashPassword(process.env.PASSWORD);
        const userData = {
            email : process.env.EMAIL,
            password: password
        }
        const newUser = new User(userData);
        await newUser.save();
        console.log(`Inserted user`);
    }
    console.log(`Default user EXISTS`);

  } catch (error) {
    console.error(error)
  }
}

const hashPassword = async (plainPassword)=>{
    const saltRounds = 10;

    const hashed = await bcrypt.hash(plainPassword, saltRounds);

    return hashed;
}




module.exports = initDb;