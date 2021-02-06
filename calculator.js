/* Collection of the id`s of each button */

let id = [];
let button = [];
let numbers = []; // array that will contain the digits
let operators = []; // array that will contain the partial results
let result = ""; // this variable will keep the partial results
let finalResult = ""; // this variable will keep the final solution




let prev_i;







for(let i = 0; i < 19; i++){ 

    let str1 = "button";

    id[i] = str1.concat(i.toString()); // I concatenate "button" and each number

    button[i] = document.getElementById(id[i]);

    button[i].addEventListener("click", function(){writeScreen(i)}); 

}


/* Function that shows on the screen the tile you just pressed */

function writeScreen(i) {

    //let prev_i;

    if (i < 11) { // if the input is a number, we add it to the array

        if(!(numbers.length == 0 && i == 0)){ // this avoids the screen get 000000
            
            numbers.push(button[i].title);
            result += numbers[numbers.length - 1]; // i concatenate the last value of the array
        }
    }

    if (i < 15 && i > 10){ // if input is {+, -, *, /} 

        operators.unshift(parseFloat(result)); // I could do a 'push', but later I'm gonna pop() the results i dont need

        numbers = []; // emptying the array

        result = 0;

        if(operators.length == 2){

            switch (prev_i){ // this will select whether we are adding, multiplying, ....

                case 11:
                    operators[0] += operators[1];
                    operators.pop();
                    result = operators; // operators must be a 1 element array
                    break;

                case 12: 
                    operators[0] = operators[1] - operators[0];
                    operators.pop();
                    result = operators;
                    break;

                case 13:
                    operators[0] = operators[1] * operators[0];
                    operators.pop();
                    result = operators;
                    break;
                
                case 14:
                    operators[0] = operators[1] / operators[0];
                    operators.pop();
                    result = operators;
                    break;

                default: 
                    result = "Math Error"; // this situation should never happen
                    break;


            }
        }
        else {
            prev_i = i;
        }
    }

    document.getElementById("screen").innerHTML = parseFloat(result);

}
