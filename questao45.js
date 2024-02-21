import{question} from 'readline-sync'
console.log(`.... Caixa Eletronico ....`)

//Entrada
const quantia_dinheiro = Number(question(' Quantia de dinheiro para o saque:  '))

//Processamento
const notas_200 = Number.parseInt(quantia_dinheiro / 200)
let resto_notas = quantia_dinheiro % 200
const notas_100 = Number.parseInt(resto_notas / 100)
resto_notas = resto_notas % 100
const notas_50 = Number.parseInt(resto_notas / 50)
resto_notas = resto_notas % 50
const notas_20 = Number.parseInt(resto_notas / 20)
resto_notas = resto_notas % 20
const notas_10 = Number.parseInt(resto_notas / 10)
resto_notas = resto_notas % 10
const notas_5 = Number.parseInt(resto_notas / 5)
resto_notas = resto_notas % 5
const notas_1 = Number.parseInt(resto_notas / 1)

//Saída
console.log(` A distriuição da ${quantia_dinheiro} é:
200 -> ${notas_200}
100 -> ${notas_100}
50  -> ${notas_50}
20  -> ${notas_20}
10  -> ${notas_10}
5   -> ${notas_5}
1   -> ${notas_1}`)