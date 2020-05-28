// kata 01

function add (x, y){
    return x + y
}

console.log(add(2,4))

// kata 02
function multiply(a, b){
    
    let ans = a 
    for (let i= 0; i < b - 1; i++){
    ans = add (a , ans)
 } 
 return ans
} 

 console.log(multiply(6, 4))

//  kata 03

function Exponents (x, n) {
        let ans = x
        for (let i = 0; i < n - 1; i += 1) {
        ans = multiply(ans, x)
        }
        return ans
    } 
console.log(Exponents(2, 8))

// kata 04
function factorial(num){
    
    if (num === 0 || num === 1) 
      return 1; 
   for (var i = num - 1; i >=1 ; i--){
    num = multiply(i, num);
  }
return num
}
console.log(factorial(4))
