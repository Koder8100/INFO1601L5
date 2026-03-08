function hello() {
  console.log("hello");
}



function add(a, b){
   return a + b;//undefined + undefined = NaN
}

let ans = add(5, 1);
console.log(ans); //6

let ans2 = add();
console.log(ans2); //NaN


function add(a, b=10){
      return a + b;
}

console.log(add(5,11)); // logs 16

console.log(add(2));// logs 12



function happyPrint(string){
 console.log("😀: "+string);
}

function sadPrint(string){
 console.log("😢: "+string);
}

//This high-order function adds 2 parameters and passes the answer to the callback
function add(a, b, callback){
   let ans = a + b;
   callback(ans);// call the callback and pass the answer to it
}

//call add passing the callbacks to it

add(5, 10, happyPrint);
add(11, 12, sadPrint);




