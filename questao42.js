import{question} from 'readline-sync'
console.log(`.... Distancia entre dois pontos no plano cartesiano ....`)

//Entrada
const ponto1_X = Number(question('X1 no plano cartesiano:   '))
const ponto1_Y = Number(question('Y1 no plano cartesiano:    '))
const ponto2_X = Number(question('X2 no plano cartesiano:   '))
const ponto2_Y = Number(question('Y2 no plano cartesiano:    '))

//Processamento
const difer_X = (ponto2_X - ponto1_X) ** 2
const difer_Y = (ponto2_Y - ponto1_Y) ** 2
const distancia_pontos = Math.sqrt(difer_X + difer_Y)

//Saída
console.log(` A distancia do entre o (${ponto1_X}, ${ponto1_Y}) e (${ponto2_X}, ${ponto2_Y}) no plano é: ${distancia_pontos.toFixed(2)}`)