// Modo Antigo
// const fs = require('fs') // importa o módulo File System (fs), que é nativo do Node.js. Ele permite ler, escrever, apagar, criar ou manipular arquivos no disco.
// fs.writeFileSync('file.txt', 'Olá me chamo kaike') //Esse comando cria um arquivo chamado file.txt ou sobrescreve se ele já existir, e escreve dentro dele o texto "Olá me chamo kaike".

// const arquivo = fs.readFileSync('file.txt', 'utf-8') //Aqui o programa lê o conteúdo do arquivo file.txt e armazena na variável arquivo.
// console.log(arquivo); //Imprime no console o conteúdo lido do arquivo:


//mostra a  data
const moment = require('moment')
const time = new Date()

const timeConvertido = moment(time).format('h:mm:ss')

console.log(timeConvertido);
