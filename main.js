function BankAccount (accountNumber,name,type,balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
}

let ac1 = new BankAccount(112345456,"swetha","savings",2356);
console.log(ac1);