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

function displayWorld(){
    var output= '';
    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
            output += "\n\t<div class='brick'></div>";
            else if(world[i][j] == 1)
            output += "\n\t<div class='coin'></div>";
            if(world[i][j] == 0)
            output += "\n\t<div class='empty'></div>";
        }
        output+= "\n</div>"
    }
    document.getElementById('world').innerHTML = output;
}

displayWorld();