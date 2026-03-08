console.log('1' == 1); //true
console.log(1 == true); //true
console.log("false" == false); // "false" is not false
console.log("false" == true); // "false" is not true either

if("false")
   console.log("Hello false!") //but "false" is true enough here


console.log();
console.log();


console.log('1' === 1); //false
console.log(1 === true); //false
console.log("true" === true); //false


console.log();
console.log();



let grade = 67;

if( grade < 50){
   console.log('Failed');
}else{
   console.log('Passed');
}


console.log();
console.log();

let num =0;

while(num < 10){
  console.log(num);
  num++;
}

for(let i=0; i <10; i ++){
  console.log(i);
}


console.log();
console.log();

for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){ // is divisible by 3 and 5?   // NOTE THE HARD COMPARISON
    console.log('fizzbuzz');
  }else if(i%3 === 0){ // ok it's not divisible by both how about just 3?
    console.log('fizz');
  }else if(i%5 === 0){ //no? what about just 5 then?
    console.log('buzz');
  }else{              //so its not divisible by 3 or 5 then
    console.log(i);
  }
}

