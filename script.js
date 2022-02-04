// list of features to build 
// 1) have js disply the world of brickcoinect DONE!
// 2) have the pacman move up and down 

var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,1,2,1,2,1,2],
    [2,1,2,1,1,2,1,2,1,2],
    [2,1,2,1,1,2,1,2,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x:0,
    y:0
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
            if(world[i][j] == 0)
            output += "<div class='empty'></div>";
        }
        output+= "\n</div>"
    }
    console.log(output)
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20 + "px"
    document.getElementById('pacman').style.left = pacman.x*20 + "px"
}

displayWorld();
displayPacman();

document.onkeydown = function(e){
    if(e.keyCode == 37){ //left
        pacman.x--;
    }
    else if(e.keyCode == 39){//right
        pacman.x ++;
    }
    else if(e.keyCode == 38){// top
        pacman.y --;
    }
    else if(e.keyCode == 40){// bottom
        pacman.y ++;
    }
    
    console.log(e.keyCode)
    displayPacman();
}