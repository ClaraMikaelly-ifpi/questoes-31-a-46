import{question} from 'readline-sync'
console.log(`.... Calculo de peso de zinco e cobre do latão `)

//Entrada
const peso_latao = Number(question('Peso do latão:  '))

//Processamento
const cobre_latao = peso_latao * 0.70
const zinco_latao = peso_latao * 0.30

//Saída
console.log(` para ter ${peso_latao} Kg de latão é necessario ${cobre_latao.toFixed(2)} Kg de cobre e ${zinco_latao.toFixed(2)} Kg de zinco.`)