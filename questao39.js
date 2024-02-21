import{question} from 'readline-sync'
console.log(`.... Três numeros inteiros e calcule a expressão ....`)

//Entrada
const numero_A = Number(question('Numero A:   ')) 
const numero_B = Number(question('Numero B:   '))
const numero_C = Number(question('Numero C:   '))

//Processamento
const R = (numero_A + numero_B) ** 2
const S = (numero_B + numero_C) ** 2
const D = (R + S) / 2

//Saída
console.log(` A constante A: ${numero_A}, B: ${numero_B} e C: ${numero_C} é igual a: ${D.toFixed(2)}`)