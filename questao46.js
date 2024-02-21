import{question} from 'readline-sync'
console.log(`.... Valor de entrada e das duas prestacões ....`)

//Entrada 
const valor_produto = Number(question(' Valor do Produto:   '))

//Processamento
const valor_parcelas = Number.parseInt(valor_produto / 3)
const valor_entrada = valor_parcelas + (valor_produto % 3)

//Saída
console.log(` Valor da entrada é: ${valor_entrada.toFixed(2)}
Valor das 2 parcelas: ${valor_parcelas.toFixed(2)} `)