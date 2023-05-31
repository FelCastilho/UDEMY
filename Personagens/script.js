const btn = document.querySelector('#container button')

function criarPersonagens(){
    let dbz = ['Goku', 'Vegeta', 'Gohan', 'Goten', 'Videl'];
    let naruto = ['Naruto', 'Itachi', 'Sasuke', 'Tobirama', 'Hashirama'];
    let kimetsu = ['Tanjiro', 'Tomioka', 'Uzui', 'Rengoku', 'Yorichi'];


    //Recebendo todos os animes em um unico array
    let animes = [...dbz, ...naruto, ...kimetsu];

    /*Sorteando um personagem
    let personagemAleatório = Math.floor(Math.random(animes) * animes.length)
    console.log(animes[personagemAleatório])
    */

    function gerarAleatorio(){

    //Sorteando um personagem
    let personagemAleatório = Math.floor(Math.random(animes) * animes.length)
 

    }

    gerarAleatorio()

}

btn.onclick = criarPersonagens;

//Criar os personagens
//Criar função que pega valores aleatórios
//Criar texto dos personagens