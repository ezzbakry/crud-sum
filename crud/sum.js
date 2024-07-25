// synchronous

function sum(){
    let num1=Number(prompt("enter first num : "));
    let num2=Number(prompt("enter second num : "));
    console.log(num1+num2);

}

sum();

function sumNumbers(a, b) {
    return new Promise((resolve) => {
      
      setTimeout(() => {
        resolve(a + b);
      }, 5000); 
    });
  }

let x=Number(prompt("enter first num (async) : "));
let y=Number(prompt("enter second num (async) : "));

  sumNumbers(x, y).then((result) => {
    console.log(`The sum is: ${result}`);
  });
  