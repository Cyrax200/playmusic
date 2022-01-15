let musicas = [
{titulo:'Bleeding Heart',artista:'Angra', src:'musicas/11-Bleeding Heart.mp3', img:'img/Angra - Rebirth.jpg'},

{titulo:'Not Afraid',artista:'Eminem', src:'musicas/Eminem - Not Afraid.mp3', img:'img/eminem.jpg'},

{titulo:'Creep',artista:'radiohead', src:'musicas/Radiohead_-_Creep.mp3', img:'img/radiohead.jpg'},
];
let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')
renderizarMusica(indexMusica)

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
// eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.bt-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate',atualizarBarra);

document.querySelector('.anterior').addEventListener('click',() =>{
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;
    }
renderizarMusica(indexMusica);
musica.play();

});
document.querySelector('.proxima').addEventListener('click',() =>{
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    musica.play();
    document.querySelector('.bt-pause').style.display = 'block';
});



//Funções

function renderizarMusica(index){
musica.setAttribute('src',musicas[index].src);
musica.addEventListener('loadeddata',() =>{
  nomeMusica.textContent = musicas[index].titulo;
  nomeArtista.textContent = musicas[index].artista;
  imagem.src = musicas[index].img  
  duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

})
}



function tocarMusica(){
musica.play();
document.querySelector('.bt-pause').style.display = 'block';
document.querySelector('.botao-play').style.display = 'none';


}


function pausarMusica(){
    musica.pause();
    document.querySelector('.bt-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';


}


function atualizarBarra(){
   let barra = document.querySelector('progress');
  barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100)+ "%";
  let tempoDecorrido = document.querySelector('.inicio')
  tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}


function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60)
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0'+ campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}

