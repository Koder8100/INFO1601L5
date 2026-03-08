 //prints current date
function printDate(){
   console.log(new Date().toLocaleTimeString());
}
      
// setInterval(printDate, 1000);

printDate();

setTimeout(printDate, 1000);

