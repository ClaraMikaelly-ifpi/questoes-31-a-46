import{question} from 'readline-sync'
console.log(`.... Soma das fraçães em forma de fração ....`)

//Entrada
const numerador_fracao1 = Number(question('Numerador fração 1:   '))
const denominador_fracao1 = Number(question('Denominador fração 1:  '))
const numerador_fracao2 = Number(question('Numerador fração 2:  '))
const denominador_fracao2 = Number(question('Denominador fração 2:   '))

//Processamento
const denominador_soma = denominador_fracao1 * denominador_fracao2
const numerador_soma = (numerador_fracao1 * denominador_fracao2) + (numerador_fracao2 * denominador_fracao1)
const soma_fracao = 0

//Saída
console.log(` A soma da fração: [${numerador_fracao1} / ${denominador_fracao1}] mais a fração: [${numerador_fracao2} / ${denominador_fracao2}] é igual a: [${numerador_soma} / ${denominador_soma}]`)