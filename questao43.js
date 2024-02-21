import{question} from 'readline-sync'
console.log(`.... Sistema de equações lineares ....`)

//Entrada
const valor_A = Number(question(' Valor de A:  '))
const valor_B = Number(question('Valor de B:   '))
const valor_C = Number(question('Valor de C:   '))
const valor_D = Number(question('Valor de D:   '))
const valor_E = Number(question('Valor de E:   '))
const valor_F = Number(question('Valor de F:   '))

//Processamento
const denominador = valor_A * valor_E - valor_B * valor_D
const valor_X = (valor_C * valor_E - valor_B * valor_F) / denominador
const valor_Y = (valor_A * valor_F - valor_C * valor_D) / denominador

//Saída 
console.log(`Valor de X: ${valor_X.toFixed(2)}`)
console.log(`Valor de Y: ${valor_Y.toFixed(2)}`)