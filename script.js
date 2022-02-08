// list of features to build 
// 1) have js disply the world of brickcoinect DONE!
// 2) have the pacman move up and down 

var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [2,1,0,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,1,1,1],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,3,2,1,1,1,1],
    [2,1,2,1,1,1,2,1,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1],
    [2,3,2,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1],
    [2,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1],
    [2,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,3,1,2,1,1,1,1,1],
    [2,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1],
    [2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1],
    [2,1,2,2,2,2,2,2,2,2,2,1,1,1,3,3,3,1,1,1,2,1,1,1,2,1,1,1,1,1],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2,3,1,1,1,1,1,3,1,1,1,1,1,1,1],
    [2,1,2,2,2,2,2,2,2,2,2,1,1,1,3,3,3,1,1,1,2,1,1,1,2,1,1,1,1,1],
    [2,3,1,1,1,1,1,1,1,3,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1],
    [2,1,2,1,1,1,1,1,1,3,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1],
    [2,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1],
    [2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3,2,2,2,1,1,1,1],
    [2,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1],
    [2,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1],
    [2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1],
    [2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1],
    [2,1,3,1,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,1,1],
    [2,1,2,1,2,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,2,1,1,1,2,2,1,1,1,1],
    [2,1,1,1,2,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,1,1],
    [2,3,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,1,1],
    [2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,3]
];

var score = 0;
var pacman = {
    x:2,
    y:2
};
var ghost1 = { //bomb walking
    x:15,
    y:18
}
var ghost2 = { //ghost float
    x:16,
    y:20
}
var ghost3 = { //angry bomb
    x:14,
    y:20
}

function displayWorld(){
    var output= '';
    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
            output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
            output += "<div class='coin'></div>";
            else if(world[i][j] == 3)
            output += "<div class='cherry'></div>";
            if(world[i][j] == 0)
            output += "<div class='empty'></div>";
        }
        output+= "\n</div>"
    }
    // console.log(output)
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*30 + "px"
    document.getElementById('pacman').style.left = pacman.x*30 + "px"
}

function displayGhost1(){
    document.getElementById('ghost1').style.top = ghost1.y*30 + "px"
    document.getElementById('ghost1').style.left = ghost1.x*30 + "px"
}
function displayGhost2(){
    document.getElementById('ghost2').style.top = ghost2.y*30 + "px"
    document.getElementById('ghost2').style.left = ghost2.x*30 + "px"
}
function displayGhost3(){
    document.getElementById('ghost3').style.top = ghost3.y*30 + "px"
    document.getElementById('ghost3').style.left = ghost3.x*30 + "px"
}


function displayScore(){
    document.getElementById('score').innerHTML = score;
}
displayGhost3();
displayGhost2();
displayGhost1();
displayWorld();
displayPacman();
displayScore();



document.onkeydown = function(e){ //pacman movement
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] !=2){ //left
        pacman.x--;
        
    }
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] !=2 ){//right
        pacman.x ++;
        
    }
    else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] !=2){// top
        pacman.y --;
    }
    else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] !=2){// bottom
        pacman.y ++;
    }
    
    if(world[pacman.y][pacman.x]==1){
        world[pacman.y][pacman.x] = 0;
        score += 10;
    
        displayWorld();
        displayScore();
    }
    if(world[pacman.y][pacman.x]==3){
        world[pacman.y][pacman.x] = 0;
        score += 50;
    
        displayWorld();
        displayScore();
    }

    displayPacman();
}

var ofset = 0;
document.addEventListener(`keydown`, function(R){ //rotate
    if(R.keyCode == 37){ //left
        ofset = 0;
        ofset += 0;
    }
    else if(R.keyCode == 39){//right
        ofset = 0;
        ofset += 180;
    }
    else if(R.keyCode == 38){// top
        ofset = 0;
        ofset+= 90;
    }
    else if(R.keyCode == 40){// bottom
        ofset = 0;
        ofset += 270;
    }
    document.getElementById("pacman").style.transform = `rotate(${ofset}deg)`
})



console.log(`fuck you world`)
