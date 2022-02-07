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

// document.onkeydown = function(r){  //rotationing pacman on input
//     if(r.keyCode == 37){ //left
//         // pacman.style.transform = "rotate(180deg)"
//     }
//     else if(r.keyCode == 39){//right
        
//     }
//     else if(r.keyCode == 38){// top
//         pacman.y --;
//     }
//     else if(r.keyCode == 40){// bottom
//         pacman.y ++;
//     }
// }


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

var ofset = 0;
document.addEventListener(`keydown`, function(R){ //rotate
    if(R.keyCode == 37){ //left
        ofset = 0
        ofset += 0;
    }
    else if(R.keyCode == 39){//right
        ofset = 0
        ofset += 180;
    }
    else if(R.keyCode == 38){// top
        ofset = 0
        ofset+= 90;
    }
    else if(R.keyCode == 40){// bottom
        ofset = 0
        ofset += 270;
    }
    document.getElementById("pacman").style.transform = `rotate(${ofset}deg)`
    
})
// document.addEventListener(`keydown`, function(r){ //reset
//     if(r.keyCode == 37){ //left
    
//     }
//     else if(r.keyCode == 39){//right
        
//     }
//     else if(r.keyCode == 38){// top
        

//     }
//     else if(r.keyCode == 40){// bottom
        
//     }
//     document.getElementById("pacman").style.transform = `rotate(${ofset}deg)`
// })




console.log(`fuck you world`)
