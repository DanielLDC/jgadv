// variáveis
const screen1 = document.querySelector(".screen1") // peguei no documento, fiz a pesquisa pelo seletor de class .screen1
const screen2 = document.querySelector(".screen2") // peguei no documento, fiz a pesquisa pelo seletor de class .screen2
const btnTry = document.querySelector("#btnTry") // peguei no documento, fiz a pesquisa pelo seletor do id #btnTry (botão screen 1)
const btnReset = document.querySelector("#btnReset") // peguei no documento, fiz a pesquisa pelo seletor do id #btnReset (botão screen 2)
let randomNumber = Math.round(Math.random() * 10) // criação de um numero random
let xAttempts = 1 // variavel de controle, para mostrar a quantidade de tentativas, começa em 1

// Eventos
btnTry.addEventListener('click', handleTryClick) // quando clicar no botão da screen1, executa a função handleTryClick, chama a função de volta(callback)
btnReset.addEventListener('click', handleResetClick) //quando clicar no botão da screen2, executa a função handleResetClick, chama a função de volta(callback)
document.addEventListener('keydown', pressEnter) // quando precionar a tecla a baixo execute a função
    
// funções
function handleTryClick(event) {
    event.preventDefault() // não faca o padrao(um botão dentro de um formulário = enviar o formulário)

    const inputNumber = document.querySelector("#inputNumber") // capturar o numero digitado pelo usuario no input
                                                              //peguei no documento, fiz a pesquisa pelo seletor do id #inputNumber
    verifyInput(inputNumber) //vai executar a função verifyInput

    if(Number(inputNumber.value) == randomNumber) { //se o numero digitado for igual o numero gerado random faça isso
        toggleScreen() // vai executar a função toggleScreen
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas` // vai colocar no h2 o tanto de tentativas
    }
    inputNumber.value = "" // sempre que fizer a tentativa (clicar no botão da screen1) limpar o campo
    xAttempts++ // toda vez que tentar acrecenta + 1 tentativa
}

function handleResetClick() {
    toggleScreen() // vai executar a função toggleScreen
    xAttempts = 1  // voltar o numero de tentativas para 1
    randomNumber = Math.round(Math.random() * 10) // gerar um novo numero randomNumber depois que vc acertar
}

function toggleScreen() {
    screen1.classList.toggle("hide") // vai adicionar a classe hide no screen1, faz sumir a primeira tela
    screen2.classList.toggle("hide") // vai remover a classe hide do screen2, faz aparecer a segunda tela
}                                    // o ( toggle) adiciona ou remove, se não tiver adiciona, se tiver remove

function pressEnter(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')) { // se a tecla for igual a (Enter) e o screen1 tiver com a classe .hide
        handleResetClick() //executar a função                  // ou seja, quando o screen1 estiver escondido. Qnd estiver no screen2
}}

function verifyInput (inputNumber){ // se o campo do imput estiver vazio dá invalido
    if(inputNumber.value == "") { //se o campo do imput estiver vazio dá invalido
        alert("Tentativa inválida")
        inputNumber.value = "" // limpa o campo
        xAttempts-- //tira um tentativa
    } else
    if(inputNumber.value <= 0 || inputNumber.value > 10) { //verificar se é um numero valido entre 0 e 10
        alert("Tentativa inválida")
        inputNumber.value = "" // limpa o campo
        xAttempts-- //tira um tentativa
    }
}