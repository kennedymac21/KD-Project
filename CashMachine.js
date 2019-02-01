const myPin = 117722
let balance = 1500

const getCash = (pinAttempt, WithdrawingAmount) => {
   if (pinAttempt == myPin && WithdrawingAmount < balance) {
       return true;
   } 
   else if (pinAttempt != myPin ||< WithdrawingAmount > balance) {
       return false;
   }
    
};

const cashWithdrawal = (amount, accnum) => {

    console.log(`Withdrawing ${amount} from account number ${accnum}`)
    
    }
    
    cashWithdrawal(200, 872749921);
