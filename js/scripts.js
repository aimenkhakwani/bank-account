// business logic
function Bankaccount(name, deposit){
  this.userName = name;
  this.userBalance = deposit;
}
Bankaccount.prototype.showBalance = function(){
  return "Hi " + this.userName + ", your current balance is $" + this.userBalance;
}

Bankaccount.prototype.addBalance = function(deposit){
  this.userBalance = this.userBalance + deposit;
}

Bankaccount.prototype.subtractBalance = function(withdrawl){
  this.userBalance = this.userBalance - withdrawl;
}

function calculateBalance(deposit, withdrawl){
  if ((inputWithdrawl >= 0) && (inputDeposit >= 0)){
    bankCustomer.addBalance(inputDeposit)
    bankCustomer.subtractBalance(inputWithdrawl);
  }
  else if ((inputWithdrawl === NaN) && (inputDeposit >= 0)){
    bankCustomer.addBalance(inputDeposit);
    // bankCustomer.subtractBalance(inputWithdrawl);
  }
  else if ((inputWithdrawl >= 0) && (inputDeposit === NaN)){
    bankCustomer.subtractBalance(inputWithdrawl);
  }
  else {
    alert("Please enter a value.");
  }
}

// ui logic
$(".createAccount").submit(function(event){
  event.preventDefault();

 $(".showThis").show();
 
  var inputName = $("#name").val();
  var inputInitialDeposit = parseFloat($("#initialDeposit").val());
  var bankCustomer = new Bankaccount(inputName, inputInitialDeposit);
  $(".userBalance").text(bankCustomer.showBalance());

  $(".depositOrWithdraw").submit(function(event){
    event.preventDefault();
    var inputWithdrawl = parseFloat($("input#withdrawl").val());
    var inputDeposit = parseFloat($("input#deposit").val());

    if ((inputWithdrawl >= 0) && (inputDeposit >= 0)){
      bankCustomer.addBalance(inputDeposit);
      bankCustomer.subtractBalance(inputWithdrawl);
    }
    else if (inputDeposit >= 0){
      bankCustomer.addBalance(inputDeposit);
    }
    else if (inputWithdrawl >= 0){
      bankCustomer.subtractBalance(inputWithdrawl);
    }
    else {
      alert("Please enter a value.");
    }

    $(".userBalance").text(bankCustomer.showBalance());
  });
});
