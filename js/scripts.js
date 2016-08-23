// business logic
var inputName = "";
var inputInitialDeposit = 0;
var bankCustomer = {};
var inputWithdrawl = 0;
var inputDeposit = 0;

function Bankaccount(name, deposit){
  this.userName = name;
  this.userInitialDeposit = deposit;
  this.userBalance = 0;
  this.userDeposit = 0;
  this.userWithdrawl = 0;
}

Bankaccount.prototype.calculateBalance = function(){
  var balance = 0;
  if((this.userDeposit > 0) && (this.userWithdrawl > 0)) {
    balance = this.userInitialDeposit - this.userWithdrawl + this.userDeposit;
  }
  else if((this.userDeposit === NaN) && (this.userWithdrawl > 0)){
    balance =
  }
  else if deposit has a value
  balance = initial deposit + deposit;
  else if withdrawal has a value{
   balance =   initial deposit - withdrawal
  }
  this.userBalance = balance ;
}

// ui logic
$(".createAccount").submit(function(event){
  event.preventDefault();
  inputName = $("#name").val();
  inputInitialDeposit = parseInt($("#initialDeposit").val());

  bankCustomer = new Bankaccount(inputName, inputInitialDeposit);
  console.log(bankCustomer);
});

$(".depositOrWithdraw").submit(function(event){
  event.preventDefault();
  inputWithdrawl = parseInt($("#withdrawl").val());
  inputDeposit = parseInt($("#deposit").val());
});
