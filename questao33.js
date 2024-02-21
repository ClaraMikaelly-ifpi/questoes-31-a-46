import{question} from 'readline-sync'
console.log(`.... A soma entre o inverso de um numero ....`)

//Entrada
const numero = Number(question('numero:  '))

//Processamento
const centenas = Math.floor(numero / 100)
const resto = numero % 100

const dezenas = Math.floor(resto / 10)
const unidades = resto % 10

const inverso = unidades*100 + dezenas*10 + centenas

const soma = numero + inverso

//Saída
console.log(` A soma do inverso é: ${soma}`)