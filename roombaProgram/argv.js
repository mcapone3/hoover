const filename = process.argv[2]; //getting file name from command line

const fs = require('fs'); //requiring fs module gains us access to tools

//line serpating list of content from input.txt
var myArray = fs.readFileSync(filename, 'utf8').split('\n');

//removing /r from the end of array Elemnts
for (var i = 0; i < myArray.length; i++){

    myArray[i] = myArray[i].replace('\r',' ');
}

let size = myArray.length;

//create vars for room size, starting position and directions
// leaving myArray as just the spots w dirt
let instruct = myArray.splice(size-1, 1); //we know its always the last element, it will be in the 5th not 6th position
let roomSize = myArray.splice(0,1);
let hooverP = myArray.splice(0,1);
//staying w splice bc it easily removes elements to give stand alone variables to refer


//now we need a looop w a list
//need to create 2d array
//need to convert it into a string to two numbers
let sizeSplitArray = roomSize[0].split(" ");
let int1 = parseInt(sizeSplitArray[0], 10);
let room = new Array(int1);
let int2 = parseInt(sizeSplitArray[1], 10);

//creates 2nd dimension of room array
for (var i = 0; i < room.length; i++){
    room[i] = new Array(int2);
}
//initialize every index to be clean in room
for (var i = 0; i < int1; i++){
    for(var j = 0; j < int2; j++){
        room[i][j] = "Clean";
    }
}
// now need to fill in dirt patches
//create another for loop 
for ( var i = 0; i < myArray.length; i++){
    //take each item and insert into the room array
let tempArray = myArray[i].split(" ");
let x = parseInt(tempArray[0], 10);
let y = parseInt(tempArray[1], 10);

room[x][y] = "Dirty";
}

//splitting direction string in an array of characters
let instructArray = instruct[0].split("");
let hooverPSplit = hooverP[0].split(" ");
let currentX = parseInt(hooverPSplit[0], 10);
let currentY = parseInt(hooverPSplit[1], 10);
//now we have current position of hoover

let dirtCount = 0;
//now we can enter our while loop that does most of the work
while (instructArray.length > 0){
    //by splicing 0 as element we get the current direction/instruction
    let direction = instructArray.splice(0, 1);
    // now need 4 if statements
    if (direction[0] == "N") {
        if (currentY != 4) {
            currentY++;
        }
        //check for dirt
        if (room[currentX][currentY] == "Dirty"){
            room[currentX][currentY] = "Clean";
            dirtCount++;
        }
    }
    if (direction[0] == "S") {
        if (currentY != 0) {
            currentY--;
        }
        //check for dirt
        if (room[currentX][currentY] == "Dirty"){
            room[currentX][currentY] = "Clean";
            dirtCount++;
        }
    }
    if (direction[0] == "E") {
        if (currentX != 4) {
            currentX++;
        }
        //check for dirt
        if (room[currentX][currentY] == "Dirty"){
            room[currentX][currentY] = "Clean";
            dirtCount++;
        }
    }
    if (direction[0] == "W") {
        if (currentX != 0) {
            currentX--;
        }
        //check for dirt
        if (room[currentX][currentY] == "Dirty"){
            room[currentX][currentY] = "Clean";
            dirtCount++;
        }
    }

}
//print ggwp
console.log(currentX,currentY);
console.log(dirtCount);

//while it has another letter, we -1 letter from the front and we read and send it to the loop
// = not == clean because not a boolean check