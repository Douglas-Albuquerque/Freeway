//código do carro

let yCarros = [40, 96, 150,210, 270, 318];
let xCarros = [600,600,600,600,600,600];
let velocidadeCarros = [2.6, 3, 4, 5, 3.5, 2.5];
let comprimentoCarros = 50;
let alturaCarros = 40;

 
function mostraCarro(){
     for(let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros , alturaCarros);
  
  }
}  
function movimentaCarro(){
  for(let i = 0; i< imagemCarros.length; i = i + 1){
   xCarros[i] -= velocidadeCarros[i];
    } 
}
function voltaPosicaoInicial(){
    for(let i = 0; i< imagemCarros.length; i = i + 1){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}
  
function passouTodaATela(xCarros){
  return xCarros < -50;
}  