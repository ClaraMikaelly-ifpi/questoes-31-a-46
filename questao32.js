import{question} from 'readline-sync'
console.log(`.... A diferenca entre o inverso de um numero ....`)

//Entrada
const numero = Number(question('Numero:  '))

//Processamento
const centenas = Math.floor(numero / 100)
const resto = numero % 100

const dezenas = Math.floor(resto / 10)
const unidades = resto % 10

const inverso = unidades*100 + dezenas*10 + centenas

const diferenca = numero - inverso

//Saída
console.log(` O inverso é: ${inverso}`)
console.log(` A diferenca do inverso é: ${diferenca}`)