import{question} from 'readline-sync'
console.log(`.... Media de Três numeros ....`)

//Entrada
const numero1 = Number(question('Numero 1:   ')) 
const numero2 = Number(question('Numero 2:   '))
const numero3 = Number(question('Numero 3:   '))

//Porcessamento
const media_numeros = (numero1 + numero2 + numero3) / 3


//Saída
console.log(` A média de ${numero1}, ${numero2} e ${numero3} é igual a: ${media_numeros}`)