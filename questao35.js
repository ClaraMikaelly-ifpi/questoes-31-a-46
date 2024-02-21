import{question} from 'readline-sync'
console.log(`.... Soma dos elementos que compõem ....`)

//Entrada
const numero1 = Number(question('Numero 1:   ')) 
const numero2 = Number(question('Numero 2:   '))
const numero3 = Number(question('Numero 3:   '))
const numero4 = Number(question('Numero 4:   '))

//Processamento
const soma = numero1 + numero2 + numero3 + numero4

//Saída
console.log(` A soma dos numeros é: ${soma}`)