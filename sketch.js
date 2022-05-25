// Variáveis do programa
let xTela = 700;
let yTela = 600;
// Bolinha Básica
let xBolinha = xTela/2;
let yBolinha = yTela/2;
let dBolinha = 30;
let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;
let raioBolinha = dBolinha/2;
// Raquete
let larguraRaquete = 15;
let alturaRaquete = 75;
let xMinhaRaquete = 10;
let yRaquete = (yTela/2)-(alturaRaquete/2);
let yORaquete = (yTela/2)-(alturaRaquete/2);
let xOponenteRaquete = xTela - larguraRaquete - 10;
let colidiu = false;
let meusPontos = 0;
let oponentePontos = 0;

function setup() {
  createCanvas(xTela, yTela);

}

function draw() {
  background('purple');
  criaBolinha();
  movimentoBolinha();
  colisaoBolinha();
  criaRaquete(xMinhaRaquete, yRaquete);
  criaRaquete(xOponenteRaquete, yORaquete);
 // movimentaMinhaRaqueteF();
  movimentaMinhaRaquete();
 // movimentaORaqueteF();
  movimentaORaquete();
  colisaoORaquete(xMinhaRaquete, yRaquete);
  colisaoORaquete(xOponenteRaquete, yORaquete);
  mostraPlacar();
  
}

function criaBolinha() {
  circle(xBolinha, yBolinha, dBolinha);
}

function movimentoBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinha() {
  if (xBolinha + raioBolinha > xTela || xBolinha - raioBolinha < 0) {
  velocidadeXBolinha *= -1;
}
  if (yBolinha + raioBolinha > yTela || yBolinha - raioBolinha < 0) {
  velocidadeYBolinha *= -1;
}
}

function criaRaquete (posicaoX, posicaoY) {
  
  rect(posicaoX, posicaoY , larguraRaquete, alturaRaquete);
  
}

//Está desativado
function movimentaMinhaRaqueteF () {
  
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
  
  yORaquete = yBolinha - alturaRaquete/2;
    
}

function movimentaMinhaRaquete () {
  
  if (keyIsDown(87)) {
    yRaquete -= 10;
  }
  
  if (keyIsDown(83)) {
    yRaquete += 10;
  }
  
  yORaquete = yBolinha - alturaRaquete/2;
  
}
// Antiga colisão da Minha Raquete
function colisaoRaquete () {
  
  if (xBolinha - raioBolinha < xMinhaRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){
  velocidadeXBolinha *= -1;
  }
  
}

//Está desativado
function movimentaORaqueteF () {
  
  if(keyIsDown(event = 87)) {
     yORaquete -= 10;
  }
  if(keyIsDown(event = 83)) {
    yORaquete += 10;
  }
  
}

function movimentaORaquete () {
  
  if(keyIsDown(event = UP_ARROW)) {
     yORaquete -= 10;
  }
  if(keyIsDown(event = DOWN_ARROW)) {
    yORaquete += 10;
  }
  
}

function colisaoORaquete (posicaoX, posicaoY) {
  
  colidiu = collideRectCircle(posicaoX, posicaoY, larguraRaquete, alturaRaquete, xBolinha, yBolinha, dBolinha);
 
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
  
}

function mostraPlacar(){
  
  fill(255);
  textSize(32);
  text(meusPontos, 175, 50);
  text(oponentePontos, 525, 50);
  
}

function marcaPontos(){
  
  if (xBolinha < xMinhaRaquete) {
}
}