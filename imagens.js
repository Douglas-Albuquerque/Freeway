//Imagens e Sons do Jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let somDaTrilha;
let somDosPontos;
let somDaColisao;


function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro, imagemCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDosPontos = loadSound("sons/pontos.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");
}

 
  