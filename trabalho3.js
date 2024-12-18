// 1. Par ou Ímpar
// Crie uma função chamada `parOuImpar` que recebe um número (tipo: Number).
// Utilize o operador de mod (%) e uma estrutura condicional `if` para retornar "Par" ou "Ímpar".
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}
console.log(parOuImpar(4))

// 2. Maior de Três
// Crie uma função chamada `maiorDeTres` que recebe três números (tipo: Number).
// Crie uma lógica de programação para retornar o maior número.
function maiorDeTres(num1, num2, num3) {
    if (num1 > num2 && num1 > num3)
        return num1
}
console.log(maiorDeTres(10, 3, 2))

// 3. Verificação de Idade
// Crie uma função chamada `verificaIdade` que recebe a idade (tipo: Number).
// Utilize uma estrutura condicional `if` para retornar "Menor de idade" ou "Maior de idade".
function verificaIdade(idade) {
    if (idade < 18) {
        return "Maior de Idade"
    } else {
        return "Menor de idade"
    }
}
console.log(verificaIdade(15))

// 4. Classificação de Notas
// Crie uma função chamada `classificaNota` que recebe uma nota (tipo: Number).
// Utilize `if`, `else if` e `else` para retornar "Aprovado", "Recuperação" ou "Reprovado".
function classificaNota(nota){
    if (nota >= 7) {
        return "Aprovado"
    } else if (nota >= 6) {
        return "Recuperacao"
    } else {
        "Reprovado"
    }
}
    console.log(classificaNota(6))


     // 5. Dia da Semana
    // Crie uma função chamada `diaDaSemana` que recebe um número (tipo: Number) de 1 a 7.
    // Utilize uma estrutura `switch` para retornar o nome do dia da semana correspondente.
function diaDaSemana(Dias){
switch(Dias){
    case 1:
 return "Domingo!"
 case 2:
 return "Segunda-Feira!"
 case 3:
    return "Terça-Feira!"
    case 4:
    return "Quarta-Feira!"
case 5:
    return "Quinta-Feira!"
    case 6:
        return "Sexta-Feira!"
        case 7:
            return "Sabado!"
            default:
            return "Número inválido. Por favor, escreva um número de 1 a 7."
}
} 
console.log(diaDaSemana(4))


    // 6. Classificação de Animal
    // Crie uma função chamada `classificaAnimal` que recebe uma string representando um animal dentre os seguintes: cachorro, gato, passarinho, salmão, lagarto.
    // Utilize uma estrutura `switch` para retornar se é "Mamífero", "Ave", "Anfíbio", "Peixe".

function classificaAnimal(animal) {
    switch (animal) {
        case 'cachorro':
            return 'Mamífero'
        case 'passarinho':
            return 'Ave'
        case 'salmão':
            return 'Peixe'
        case 'Martelo':
            return 'Réptil'
            default:
            return 'Animal não classificado'
            }
    }
    classificaAnimal('cachorro')


    // 7. Calculadora Simples
    // Crie uma função chamada `calculadora` que recebe dois números e uma string representando uma operação (soma, subtração, multiplicação, divisão).
    // Utilize uma estrutura `switch` para retornar o resultado da operação.
function calculadora(num1, num2, operação){
switch (operação){
    case 'soma':
        return num1 + num2
    case 'subtracao':
        return num1 - num2
    case 'multiplicacao':
        return num1 * num2
    case 'divisao':
        return num1 / num2
    default :
        return 'Operação inválida.'
}
}
console.log(calculadora(10, 5, "subtracao"))


// 9. Mensagem de Boas-Vindas
// Crie uma função chamada `mensagemBoasVindas` que recebe um nome (tipo: String) e um horário (tipo: Number).
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar uma mensagem apropriada: "Bom dia", "Boa tarde" ou "Boa noite".
function mensagemBoasVindas(nome, horario){
   if (horario >= 5 && horario < 12) {
       console.log(`Bom dia, ${nome}!`)
    } else if (horario >= 12 && horario < 18) {
      console.log(`Boa tarde, ${nome}!`)
    } else {
       console.log(`Boa noite, ${nome}!`)
    }
}
mensagemBoasVindas("Ana", 16)

// 10. Classificação de Filmes
// Crie uma função chamada `classificaFilme` que recebe uma nota (tipo: Number) de um filme.
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar "Excelente" (nota 8 ou mais),
// "Bom" (nota de 5 a 7) ou "Ruim" (nota abaixo de 5).

function classificaFilme(nota){
    if(nota>=8){
        console.log(`O filme recebeu ${nota} e eh exelente`)
    } else if(nota < 8 && nota >= 5){
console.log(`O filme recebeu nota ${nota} e eh bom`)
    } else {
        console.log(`O filme recebeu ${nota} e eh ruim`)
    }
}
classificaFilme(8.9)

