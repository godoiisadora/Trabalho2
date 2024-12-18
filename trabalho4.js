// 1. Crie uma função que receba um número e retorne a soma de todos os números de 1 até o número informado usando um laço `while`.
function numero(n) {
    let soma = 0
    let i = 1
    while (i <= n) {
        soma += i


        i++
    }
    return soma
}

console.log(numero(6))


// 2. Crie uma função que receba um array de números e retorne a soma de todos os números maiores que 10 usando um laço `for`.
function somas(num) {
    let soma = null
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 10) {
            soma += num[i]
        }
    }
    return soma
}
const numeros = [5, 12, 3, 17, 8, 14]
const resultado = somas(numeros)
console.log(resultado)


// 3. Crie uma função que, dado um array de filmes, retorne o nome do primeiro filme cujo título tem mais de 5 letras usando o `for...of`.
function Encontrar(filmes) {
    for (let filme of filmes)
        if (filme.length > 5) {
            return filme
        }
}
const filmes = ['Avatar', 'Star Wars', 'Wall-e']
console.log(Encontrar(filmes))


// 4. Crie uma função que receba um array de nomes de personagens de *Hunter x Hunter* com os personagens "Gon Freecss", "Killua Zoldyck", "Leorio Paradinight" e um array de números representando a força de cada personagem, respectivamente 180, 195, 140. A função deve retornar um terceiro array com o nome dos personagens cuja força seja superior a 150, utilizando um laço `for`.


function personagensForca(personagens, forcas) {
    let personagensFortes = []

    for (let i = 0; i < personagens.length; i++) {
        if (forcas[i] > 250) {
            personagensFortes.push(personagens[i])
        }
    }

    return personagensFortes
}

const personagens = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"]
const forcas = [180, 295, 140]

console.log(personagensForca(personagens, forcas))


// 5. Crie uma função que receba um array de números e retorne a quantidade de números negativos presentes no array, usando um laço `while`.
function numerosNegativos(numeros) {
    let i = 0
    let conta = 0
    while (i < numeros.length) {
        if (numeros[i] < 0) {
            conta++
        }
        i++
    }
    return conta
}

console.log(numerosNegativos(["-3", "6", "-5", -"8"]))


// 6. Crie uma função que receba uma string, converta-a para um array e retorne a quantidade de vezes que a letra "a" aparece nela.
function contarA(string) {
    const caracteres = string.split('')
    let contador = 0
    let i = 0
    while (i < caracteres.length) {
        if (caracteres[i].toLowerCase() === 'a') {
            contador++
        }
        i++
    }

    return contador
}
console.log(contarA("Ana comedora de bolacha"))


// 7. Crie uma função que percorra um array de filmes e retorne um novo array com os filmes que têm o nome começando com a letra "S" usando o laço `for...of`.
function filmesComS(filmes) {
    let filmesComS = []
    for (let filme of filmes) {
        if (filme[0].toUpperCase() === 'S') {  
            filmesComS.push(filme);
        }
    }
    
    return filmesComS
}
const filmes4 = ["Star Wars", "Spider-Man", "Shrek", "Superman"]
const filmesComSResult = filmesComS(filmes4)
console.log(filmesComSResult)


// 8. Crie uma função que receba um array de strings e retorne a maior substring (palavra) encontrada no array.
function maiorPalavra(palavras){
    let maior= ""
for (let palavra of palavras){
    if(palavra.length > maior.length){
        maior= palavra
    }
}
return maior
}
const palavras = ["Godoi", "Maria", "Ana","Japones"]
console.log(maiorPalavra(palavras))


// 9. Crie uma função que calcule o fatorial de um número utilizando um laço `for`.
function fatorial(num1){
    let resultado = 1
    for(let i = 1; i< num1; i++){
        resultado *=i
    }
    return resultado
}
console.log(fatorial(7))


// 10. Crie uma função que receba um número e retorne uma string que contém esse número repetido, separado por vírgulas, utilizando um laço `while`.
function numerorepetido(numero, vezes){
    let resultado = ''
    let i = 0
    while (i< vezes){
        if(i >0){
            resultado += ','
        }
        resultado += numero
        i++
    }
    return resultado
}
console.log(numerorepetido(12, 4))
