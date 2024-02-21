import{question} from 'readline-sync'
console.log(`.... Custo de um carro para o consumidor ....`)

//Entrada
const custo_fabrica = Number(question('Custo de fabrica:   '))
const porcentagem_distribuidor = Number(question('Porcentagem do distribuidor: ')) / 100
const impostos = Number(question('Porcentagem dos impostos:   ')) / 100

//Processamento
const custo_consumidor = custo_fabrica + (custo_fabrica * porcentagem_distribuidor) + (custo_fabrica * impostos)

//Saída
console.log(` O custo de um carro para o consumidor é: ${custo_consumidor.toFixed(2)}`)