var keys = document.querySelectorAll('#calculator button');
var decimalAdded = false;
var operators = ['+', '-', 'x', '÷'];

for(var i = 0; i < keys.length; i++) {
	  keys[i].onclick = function(e) {

		var input = document.querySelector('.number');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		if(btnVal == 'C') {
			input.innerHTML = '0';
			operatorinput.innerHTML = '';
			decimalAdded = false;
		}


    else if(btnVal == '=') {
    	var equation = inputVal;
    	var lastChar = equation[equation.length - 1];

    	equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

    	if(operators.indexOf(lastChar) > -1 || lastChar == '.')
    		equation = equation.replace(/.$/, '');

    	if(equation)
    		input.innerHTML = eval(equation);

    	decimalAdded = false;
    }


    else if(operators.indexOf(btnVal) > -1) {

    	var lastChar = inputVal[inputVal.length - 1];
    	if(inputVal != '' && operators.indexOf(lastChar) == -1)
    		input.innerHTML += btnVal;

    	else if(inputVal == '' && btnVal == '-')
    		input.innerHTML += btnVal;

    	if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {

    		input.innerHTML = inputVal.replace(/.$/, btnVal);
    	}
    	decimalAdded =false;
    }

		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}

    else if (btnVal == '±' ) {
      if(input.innerHTML[0] !== "-" && input.innerHTML[0] !== "0") {
        input.innerHTML = "-" + input.innerHTML;
      }
      else if(input.innerHTML[0] == "0") {
        input.innerHTML = "0";
      }
      else {
        input.innerHTML = input.innerHTML.slice(1, input.innerHTML.length);
      }
    }

		else if (input.innerHTML == '0') {
			input.innerHTML = " ";
      input.innerHTML = btnVal;
		}


    else {
      input.innerHTML += btnVal;
    }

		e.preventDefault();
	}
}
