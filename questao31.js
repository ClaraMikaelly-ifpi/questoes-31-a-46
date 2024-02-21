import{question} from 'readline-sync'
console.log(`.... Numeros binarios em base decimal ....`)

//Entrada
const binario = Number(question(' 4 Digitos Binario:  '))

//Processamento
const milhar = Math.floor(binario / 1000)
let resto = binario % 1000
const centena = Math.floor(resto / 100)
resto = resto % 100
const dezena = Math.floor(resto / 10)
const unidade = resto % 10

const decimal = milhar*8 + centena*4 + dezena*2 + unidade*1

//Saída
console.log(`O numero binario em decimal é: ${decimal}`)

