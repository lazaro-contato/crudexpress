const mongoose = require('mongoose').default

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejscurso.5r8kbgg.mongodb.net/?retryWrites=true&w=majority`).catch((e) => console.log(e))
    return console.log('Conexão ao banco de dados realizada com sucesso')
}

module.exports = connectToDataBase