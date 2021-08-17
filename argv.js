const filename = process.argv[2];

const fs = require('fs');
const argz = [];

//list of everything
var myArray = fs.readFileSync(filename, 'utf8').split('\n');

for (var i = 0; i < myArray.length; i++){

    myArray[i] = myArray[i].replace('\r',' ');
}

let size = myArray.length;

//create vars for room size, starting position and directions
let instruct = myArray.splice(size-1, 1); //we know its always the last element, it will be in the 5th not 6th position
let roomSize = myArray.splice(0,1);
let hooverP = myArray.splice(0,1);
//myArray now only contains patches of dirt

size = myArray.length;

//now we need a looop w a list
//need to create 2d array
//need to convert it into a string to two numbers
let sizeSplitArray = roomSize[0].split(" ");
let int1 = parseInt(sizeSplitArray[0], 10);
let room = new Array(int1);
let int2 = parseInt(sizeSplitArray[1], 10);

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

//room[x][y] = "Dirty";
}
room[2][0] = "Dirty";

for (var i = 0; i < int1; i++){
    for(var j = 0; j < int2; j++){
        console.log(room[i][j] + " ");

    }
}
console.log("Hello");

//to do: fix dirty input & starting location for Hoover & give directions to hoover

//looking up how to remove elements from an array and return from array, need seperate splices
