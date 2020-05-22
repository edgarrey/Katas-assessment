// kata 01

function add (x, y){
    return x + y
}

console.log(add(2,4))

// kata 02
function multiply(num, times){
    
    var n = num;
    for(var i = 1; i < times; i += 1)
       num += n; 
    return num;
 } 
 console.log(multiply(6, 4))

//  kata 03

function Exponents (num, exponent) {
        var result = 1;
        for (i = 0; i < exponent; i += 1) {
        result *= num;
        }
        return result;
    } 
console.log(Exponents(2, 8))

// kata 04
function factorial(number){
    var result = number;
    if (number === 0 || number === 1) 
      return 1; 
    while (number > 1) { 
      number -= 1;
      result *= number;
    }
    return result;
  }
console.log(factorial(4))
