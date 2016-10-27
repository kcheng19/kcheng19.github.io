    var player; 
    var playerImage;
    var isGameOver;
    var enemy;
    var enemy2;
    var enemyImage;
    var bullet;
    var isScore;
    var started=false;
    var bullet2;
    var bullet3;
    var enemy3;
function preload(){
    playerImage = loadImage("fly.gif");
    enemyImage = loadImage("asteroid 2.png");
    backgroundImage = loadImage("notebook-paper.jpg");
    enemy2Image = loadImage("asteroidA.gif");
    enemy3Image = loadImage("asteroidC.gif");
}
function setup() {
    createCanvas(1000,800);
    player = createSprite(width/2, height-125, 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 3.0;
    isGameOver = false;
    bullet = createSprite(width/2, 0, 10, 30);
    enemy2 = createSprite(2*width/7, 0, 0, 0);
    enemy2.addImage(enemy2Image);
    enemy2.rotationSpeed = 4.0;
    bullet2 = createSprite(width/2, 0, 10, 30);
    bullet3 = createSprite(width/2, 0, 10, 30);
    isScore = 0;
    enemy3 = createSprite(6*width/7, 0, 0, 0);
    enemy3. addImage(enemy3Image);
    enemy3.rotationSpeed = 5.0;
}
$("#start").on("click",new_game);
function draw() {

     if (enemy.position.y > 800) {
            gameOver();
        }else if(started){
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
    enemy.position.x = random(100, width-100);
    isScore = isScore + 1;
    }
    
    if (isScore>20){
        enemy.position.y = enemy.position.y + 2;
        enemy2.position.y = enemy2.position.y + 2;
        enemy3.position.y = enemy3.position.y + 2;
        if (keyDown(RIGHT_ARROW) && player.position.x<(width-(playerImage.width/2))) {
        player.position.x = player.position.x + 7;
        }
        if (keyDown(LEFT_ARROW) && player.position.x>playerImage.width/2 ) {
        player.position.x = player.position.x - 7;
        }
        bullet.position.y = bullet.position.y - 7
        bullet2.position.y = bullet2.position.y - 17
        if(bullet2.position.y < 0 ){
            bullet2.position.y = 600;
            bullet2.position.x = player.position.x - 50;
        }
        bullet3.position.y = bullet3.position.y - 17
        if(bullet3.position.y < 0 ){
            bullet3.position.y = 600;
            bullet3.position.x = player.position.x + 50;
        }
    }
    if (enemy.overlap(bullet2)) {
            enemy.position.y = 0;
            enemy.position.x = random(100, width-100);
            isScore = isScore + 1;
            }
    if (enemy.overlap(bullet3)) {
            enemy.position.y = 0;
            enemy.position.x = random(100, width-100);
            isScore = isScore + 1;
            }

    bullet.position.y = bullet.position.y - 10
    if(bullet.position.y < 0 ){
        bullet.position.y = 600;
        bullet.position.x = player.position.x;
        }
    }
    if (enemy2.position.y > 800) {
            gameOver();
        }else{
            if(enemy2.overlap(player)){
                isGameOver=true
            }
        enemy2.position.y = enemy2.position.y + 2
        if (enemy2.overlap(bullet)) {
        enemy2.position.y = 0;
        enemy2.position.x = random(100, width-100);
        isScore = isScore + 1;
        }
    }
    if (enemy3.position.y > 800) {
            gameOver();
        }else{
            if(enemy3.overlap(player)){
                isGameOver=true
            }
        enemy3.position.y = enemy3.position.y + 2
        if (enemy3.overlap(bullet)) {
        enemy3.position.y = 0;
        enemy3.position.x = random(100, width-100);
        isScore = isScore + 1;
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
    fill("black");
    text(isScore,  800,100);
}
function new_game(){
    started=true;
}
function touchStarted(){
    mouseClicked()
}