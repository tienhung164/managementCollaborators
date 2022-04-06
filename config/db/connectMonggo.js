const ACCEES_PASSWORD_MONGODB = process.env.ACCEES_PASSWORD_MONGODB
const mongoose = require('mongoose')

const connect = ()=>{   
    
    mongoose.connect(`mongodb+srv://tienhung1:${ACCEES_PASSWORD_MONGODB}@pallgree.be2rz.mongodb.net/pallgree_dev?retryWrites=true&w=majority`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
}
module.exports={connect}