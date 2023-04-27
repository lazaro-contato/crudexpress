const fs = require( 'fs')

const path = require('path')


//criar pasta

fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if (err) {
        return console.log('Error', err)
    }
    console.log('Pasta criada com sucesso')
})


//criar arquivo

fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello node', (err) => {
    if (err){
       return  console.log(err)
    }
    console.log('Arquivo criado com sucesso')

    //adicionar a um arquivo

    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'hello world', (err) => {
        if (err) {
            return console.log(err)
        }
        console.log('arquivo modificado')
    })

    //ler arquivo

    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf-8', (err, data) => {
        if (err) {
            return console.log(err)
        }
        console.log(data)
    })
})




