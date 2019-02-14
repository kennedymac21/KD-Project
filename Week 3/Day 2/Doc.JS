/* let age = 21
 if (age > 17) {
   console.log("yes I can serve you")
 }
 else {
   console.log("You aren't old enough")
}






 let age = 17
let country = "UK"
 if (country == "UK" && age >= 17) {
   console.log("yes I can serve you")
 }
 else {
   console.log("Sorry, you can't drink")
 }





 for (num = 1; some other loop conditions) {
  if (num % 3 == 0 || same for 5) {
    do something
 }
 }
*/

function Total(num) {
let sum = 0;
for (num = 0; num < 1000; num++) {
  if (num % 3 == 0 || num % 5 == 0) {
    sum += num;
  }
}
return sum;
}
console.log(Total(1000));