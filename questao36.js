import{question} from 'readline-sync'
console.log(`.... Idade de uma pessoa em anos, meses e dias expressa em dias ....`)

//Entrada
const idade_anos = Number(question('Anos:  '))
const idade_meses = Number(question('Meses:  '))
const idade_dias = Number(question('Dias:   '))

//Processamento
const idade_total_dias = (idade_anos * 365) + (idade_meses * 30) + idade_dias

//Saída
console.log(`A conversao de ${idade_anos} anos, ${idade_meses} meses, ${idade_dias} dias é igual a: ${idade_total_dias} dias de idade`)