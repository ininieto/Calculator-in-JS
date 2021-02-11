let numbers = []; // array that will contain the digits
let operators = []; // array that will contain the partial results
let result = ""; // this variable will keep the partial results
let finalResult = ""; // this variable will keep the final solution
let prev_i; // this variable will decide the kind of operation
let screenValue = ""; // yep, this variable will contain the number that will be displayed on screen


function operate(i){

    if(i == 17){ // if the input is AC

        numbers = [];
        operators = [];
        result = 0;
        screenValue = 0;
    }
    else if(i == 16){ // if the input is DEL

        numbers.pop();
        screenValue = "";
        
        for(let i = 0; i < numbers.length; i++){
            screenValue += numbers[i];
        }
    }
    

    if (i < 11) { // if the input is a number or ".", we add it to the array

        if(!(numbers.length == 0 && i == 0)){ // this avoids the screen get 000000
            
            numbers.push(button[i].title); // addition of the number you pressed to an array

            if(screenValue == result){ // this if empties the screen value if you make an operation without clearing the screen

                screenValue = numbers[numbers.length - 1];
            }
            else{
                screenValue += numbers[numbers.length - 1]; // i concatenate the last value of the array
  
            }
        }
    }

    if(screenValue[0] == "x" || screenValue[0] == "/" || screenValue[0] == "+" || screenValue[0] == "-"){

        screenValue = screenValue.substring(1); //this is a way to remove the first character of a string
    }

    if (i < 16 && i > 10){ // if input is {+, -, *, /, =} 

        if(screenValue != result){ // this if lets you make chain operations

            operators.unshift(parseFloat(screenValue)); // I could do a 'push', but later I'm gonna pop() the results i dont need
            numbers = []; // emptying the array
        }

        if(operators.length == 2){

            switch (prev_i){ // this will select whether we are adding, multiplying, ....

                case 11:
                    operators[0] += operators[1];
                    break;

                case 12: 
                    operators[0] = operators[1] - operators[0];
                    break;

                case 13:
                    operators[0] = operators[1] * operators[0];
                    break;
                
                case 14:
                    operators[0] = operators[1] / operators[0];
                    break;
                
            }

            operators.pop(); // the result of the operation is in the position [0], then I throw away the position [1]
            result = operators;
            screenValue = result;
        }
        else { // this part is responsible for showing on screen the operation we're dealing with
            
            switch(i){
                case 11: 
                    screenValue = "+";
                    break;
                case 12:
                    screenValue = "-";
                    break;
                case 13:
                    screenValue = "x";
                    break;
                case 14:
                    screenValue = "/";
                    break;
                
                default:
                    break;
            }

            
        }

        prev_i = i;
    }   
}