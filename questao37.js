import{question} from 'readline-sync'
console.log(`.... Idade em dias expressa em anos, meses e dias ....`)

//Entrada
const idade_dias = Number(question('Idade em dias:   '))

//Processamento
const idade_anos = Math.floor(idade_dias / 365)
const idade_meses = Math.floor((idade_dias % 365) / 30)
const resto_dos_dias = Math.floor((idade_dias % 365) % 30)

//Saída
console.log(`A sua idade de ${idade_dias} é:
Ano(s): ${idade_anos}
Mes(s):${idade_meses}
Dia(s):${resto_dos_dias}`)