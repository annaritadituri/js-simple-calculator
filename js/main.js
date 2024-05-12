'use strict';

//////////////////////////////////////////////////////////

//MILESTONE 1
let numbersList = document.querySelectorAll('.single-number');
//console.log({numbersList});

let enteredNumber = document.getElementById('result');
//console.log({enteredNumber});

let contatore = 0;
for(let i = 0; i < numbersList.length; i++) {

    numbersList[i].addEventListener("click",
        function() {

            if (contatore == 0) {
                enteredNumber.innerHTML = "";
            }

            enteredNumber.innerHTML += numbersList[i].innerHTML;
            //console.log(enteredNumber.innerHTML);

            contatore++;
            //console.log({contatore});

        }
    )
    
}

//MILESTONE 2
let operatorsList = document.querySelectorAll('.single-operator');
//console.log({operatorsList});

let operator;

let firstOperand = "";

for(let i = 0; i < operatorsList.length; i++) {

    operatorsList[i].addEventListener("click",
        function() {

            firstOperand = enteredNumber.innerHTML;
            enteredNumber.innerHTML = "";

            console.log({firstOperand});

            operator = operatorsList[i].innerHTML;
            console.log({operator});

        }
    )
}

if (contatore > firstOperand.length) {

    for (let i = 0; i < numbersList.length; i++) {

        numbersList[i].addEventListener("click",
        function() {

            enteredNumber.innerHTML += numbersList[i].innerHTML;
            console.log(enteredNumber.innerHTML);
            
        }
    )

    }

}

//MILESTONE 3
let secondOperand;
let calculating = document.getElementById('equals');

calculating.addEventListener('click',

    function() {
        
        secondOperand = enteredNumber.innerHTML;
        console.log({secondOperand});
        contatore = 0;

        switch (operator) {
            case "+":
                enteredNumber.innerHTML = (+firstOperand) + (+secondOperand);
            break;
            case "-":
                enteredNumber.innerHTML = (+firstOperand) - (+secondOperand);
            break;
            case "×":
                enteredNumber.innerHTML = (+firstOperand) * (+secondOperand);
            break;
            case "÷":
                //BONUS
                if (secondOperand == 0) {

                    enteredNumber.innerHTML = "Err";

                } else {

                    enteredNumber.innerHTML = (+firstOperand) / (+secondOperand);

                }

            break;
        }
        

    }

)

//MILESTONE 4
let reset = document.getElementById('canc');

reset.addEventListener('click',

    function() {

        enteredNumber.innerHTML = "0";
        contatore = 0;

    }

)