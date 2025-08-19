function bank_acc(initial_balance=0){
let balance= initial_balance;

this.check_balance=function(){
    return balance;
};

this.credit= function(val){
    if (val>0){
        balance+= val
    }
    else{
        console.log("credit is negative.")
    }
};


this.debit= function(val){
    if(balance>=val && val>0){
        balance= balance-val;
    }
    else{
        console.log("insufficient balance.")
    }

};


}

const my_acc= new bank_acc(2000);
console.log(my_acc.check_balance());

my_acc.credit(500);
console.log(my_acc.check_balance());

my_acc.debit(1000);
console.log(my_acc.check_balance());

