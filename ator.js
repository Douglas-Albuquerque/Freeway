//Ator
let xAtor = 100;
let yAtor = 366;
let colisão = false;
let meusPontos = 0;


function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor,30,30);
} 

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 5;    
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 5;
    }
  }
}
function verificarColisao(){
  for (i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros,alturaCarros, xAtor, yAtor, 15)
    if(colisao){
      colidiu();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos -=1
      }
    }
  }
}
function colidiu(){
  yAtor = 366;
}
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(127,255,12)
  text(meusPontos, width /5, 27);
}
function marcaPonto(){
  if(yAtor < 15){
    meusPontos +=1;
    somDosPontos.play();
    colidiu();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0
}
function podeSeMover(){
  return yAtor < 366;
}