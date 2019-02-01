// let myNameIs="Simon" 
// let myAgeIs=33 
// let myFavColour="Blue" 


// console.log (`My name is ${myNameIs}. My age is ${myAgeIs}. My favourate colour is ${myFavColour}.`)



// const coffeeHolder = (size, type) => {
//     console.log(`I would like a ${size} ${type} `)  
//   }
//   coffeeHolder("SuperBig", "Coke")


  
// const bottleWater = ( size, taste) => {
//     console.log (`Drink ${}`)


//     function factorial (n) {

//         if ((n === 0) || (n === 1)) {
//           return 1;
//         } else {
//           return (n * factorial(n-1));
//         }
       
//        }
       
//        console.log(factorial(33)); 


// }



// const factorial = (n) => {

//     if ((n === 0) || (n === 1)) {
//         return 1;
//       } else {
//         return (n * factorial(n-1));
//       }

// }

// console.log(factorial(33));









const myPin = 007722


const checkPin = (pin) => {
   if (pin == myPin) {
       return true
   } else {
       return false
   }
}

// console.log(checkPin(007722))

let Balance = 1500
const checkBalance = (amount) => {
    if (amount <= Balance) {
        return true
    } else {
        return false
    }
 }
 
//  console.log(checkBalance(1500))

 const cashWithdrawal = () => {
     if (checkPin(007722) == true && checkBalance (1500) == true) {
         console.log(`happy days`)
     } else {
         console.log(`Sorry Mate`)
     }
 }
cashWithdrawal()
// const cashWithdrawal = (amount, accnum) => {

//     console.log(`Withdrawing ${amount} from account number ${accnum}`)
    
//     }
    
//     cashWithdrawal(300, 50449921);





