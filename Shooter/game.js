    var player; 
    var playerImage;
    var isGameOver;
    var enemy;
    var enemyImage;
    var bullet;
    var isScore;
function preload(){
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
  enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
   backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}
function setup() {
    createCanvas(256,256);
    player = createSprite(width/2, height-25, 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    isGameOver = false;
    bullet = createSprite(width/2, 0, 10, 30);
    isScore = 0;
}

function draw() {

     if (enemy.position.y > 256) {
            gameOver();
        }else{
            if(enemy.overlap(player)){
                isGameOver=true
            }
                background(backgroundImage);
    drawSprites();
     if (keyDown(RIGHT_ARROW) && player.position.x<(width-(playerImage.width/2))) {
    player.position.x = player.position.x + 5;
  }
    if (keyDown(LEFT_ARROW) && player.position.x>playerImage.width/2 ) {
    player.position.x = player.position.x - 5;
  }
    score();
  enemy.position.y = enemy.position.y + 2
  if (enemy.overlap(bullet)) {
  enemy.position.y = 0;
  enemy.position.x = random(5, width-5);
  isScore = isScore + 1;
}
        bullet.position.y = bullet.position.y - 5
        if(bullet.position.y < 0 ){
            bullet.position.y = 256;
            bullet.position.x = player.position.x;
        }
    }


}
function gameOver() {
  background(0);
  textAlign(CENTER);
  textFont("Georgia");
  fill("white");
  text("Game Over!", width/2, height/2);
  text("Your score was", width/2, 5*height/8);
  text(isScore, width/2, 6*height/8);
  text("Click anywhere to try again", width/2, 7*height/8);
}

 
function mouseClicked(){
    isGameOver=false;
    player.position.x = width/2;
    player.position.y = height-(playerImage.height/2);
    enemy.position.x = width/2;
    enemy.position.y = 0;
}

function score(){
    textFont("Arial");
    fill("white");
     text(isScore,  70*width/100, 10*height/100);
}