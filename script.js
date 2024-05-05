

// Calculation for Arthematic Operators----------------
// Declaring variables for later use
var num1, num2;
var result;
document.getElementById('calculateBtn').onclick = function(){
    // assigning num1 and num2 with value of input field with parsing it to integer | number
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);

    // calculation case according to select option value
    switch(document.getElementById('current_operator').value){
        case "":
            alert("Please select operator!");
        case "+":
            result = num1 + num2;
            // console.log(result);
        break;
        case "-":
            result = num1 - num2;
            // console.log(result);
        break;
        case "/":
            result = num1 / num2;
            // console.log(result);
        break;
        case "*":
            result = num1 * num2;
            // console.log(result);
        break;
    }
    // Assigning result to output field
    document.getElementById('ans').innerText = result;
};
// -------------------------------------------------------------

// calculation for Assignment Operators
var var1, num;
var ans;
document.getElementById('result').onclick = function(){
    // assigning num1 and num2 with value of input field with parsing it to integer | number
    var1 = document.getElementById('var1').value;
    console.log(var1)

    num = parseInt(document.getElementById('num').value);
    console.log(num)

    ans = document.write(var1 + " = " +num);
    console.log(ans)
    
    document.getElementById('ans1').innerText = ans;   
    }