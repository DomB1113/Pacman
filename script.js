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
function displayScore(){
    document.getElementById('score').innerHTML = score;
}

displayWorld();
displayPacman();
displayScore();

document.onkeydown = function(e){
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

