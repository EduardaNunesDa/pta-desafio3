/* Como getElementsByClassName() retorna um vetor de objetos com todos os elementos filhos que posssuem o nome da classe "Character", a const character guarda o primeiro elemento já que usamos o [0] para termos  apenas o 1° elemento*/

const character = document.getElementsByClassName("character")[0];
/* Novamento, usando o getElementsByClassName() temos um vetor com todos os elementos filhos da classe com nome "container-character" e, outra vez, queremos apenas o primero elemento ([0])*/ 
const containerCharacter = document.getElementsByClassName("container-character")[0];

/* criamos aqui uma variável VELOCITY com valor constante de 10*/ 
const VELOCITY = 10;
/*agora, aqui estamos criando duas variáveis para detectar o tamanho da tela que o usuário está usando*/
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

/*Como estamos usando o let, aqui criamos duas variáveis com valores mutáveis*/
let xPosition = 500;
let yPosition = 300;

/*Aqui criamos dois arrays constantes contento cada um infromações sobre as ações que poderão ocorrer com o boneco*/
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

/*Chegamos na parte em que serão feitas as "perguntas" relacionados ao movimento do boneco, se tivermos as setas do teclado ativadas entramos nesta função*/
window.addEventListener("keydown", (event) => {
    /*Criamos aqui uma constane para sabermos o evento atual das teclas do teclado*/
    const key  = event.key;
    /* O evento keypress é disparado quando uma tecla que produz um valor do tipo caractere é pressionada*/
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })
    /*Caso não dispare, apenas retorne */
    if(!keyPressedAvaiable) return;
    /*o forEache percorre todo o array direction, e então caso o array tenha um elemento do array direction ele é removido */
    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    /*Aqui usamos os ifs para verificar a direção pressionada no momento*/
    /*Aqui, se o if for verdadeiro, então o boneco está indo para cima e diminuimos o tmanho da posição y dele para que posso subir */
    if(key === "ArrowUp"){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    /*Já se este if for verdadeiro o boneco andará pra baixo e somaremos na sua posição y*/

    if(key === "ArrowDown"){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }
    /*Se este if for verdadeiro, então o boneco andará para esquerda e sua posição x irá diminuir para que ele consiga se movimentar */
    if(key === "ArrowLeft"){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }
    /*Agora, com este if verdadeiro o boneco irá se movimentar para direita já que estamos dua posição em x*/
    if(key === "ArrowRight"){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }
    /*usamos para atualizar a posição do boneco após encerrar os ifs, mudando sua posição top e left*/
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
