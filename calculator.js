/* Collection of the id`s of each button */

let id = [];
let button = [];

/* Adittion of the event listeners to the tiles */

for(let i = 0; i < 18; i++){ 

    let str1 = "button";

    id[i] = str1.concat(i.toString()); // I concatenate "button" and each number

    button[i] = document.getElementById(id[i]);

    button[i].addEventListener("click", function(){writeScreen(i)}); 

}


/* Function that shows on the screen the tile you just pressed 
   It also manages the special characters, like +, -, =, AC... */

function writeScreen(i) {

    operate(i);
    
    document.getElementById("screen").innerHTML = screenValue;

}
