
// Get all the keys from document
var keys = document.querySelectorAll('#calculator button');
var decimalAdded = false;



// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {

    // Get the input and button values
		var input = document.querySelector('.output');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '0';
			decimalAdded = false;
		}

		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
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

		// if any other key is pressed, just append it
		else if (input.innerHTML == '0') {
			input.innerHTML = " ";
      input.innerHTML = btnVal;
		}

    else {
      input.innerHTML += btnVal;
    }

		// prevent page jumps
		e.preventDefault();
	}
}
