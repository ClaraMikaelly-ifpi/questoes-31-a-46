import { question } from "readline-sync"
console.log('.... Total de cigarros fumados ....')

//entrada
const anos_fumo = Number(question('Anos de fumo: '))
const cigarros_dia = Number(question('Cigarros por dia fumados: '))
const preco_carteira = Number(question('Preço da carteira[20 cigarros]: '))
//processamento

const tempo_total = anos_fumo * 365
const preco_do_cigarro  = preco_carteira / 20
const total_cigarros = tempo_total * cigarros_dia
const preco_total = total_cigarros * preco_do_cigarro

//saída
console.log(` O valor de gastos com cigarro em ${anos_fumo} anos é de R$ ${preco_total.toFixed(2)}`)