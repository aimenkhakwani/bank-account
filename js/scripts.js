// business logic
function Bankaccount(name, deposit){
  this.userName = name;
  this.userBalance = deposit;
}
Bankaccount.prototype.showBalance = function(){
  return "Hi " + this.userName + " your current balance is " + this.userBalance;
}

Bankaccount.prototype.addBalance = function(deposit){
  this.userBalance = this.userBalance + deposit;
  return this.userBalance;
}

Bankaccount.prototype.subtractBalance = function(withdrawl){
  this.userBalance = this.userBalance - withdrawl;
  return this.userBalance;
}

// ui logic
$(".createAccount").submit(function(event){
  event.preventDefault();
  // $(".userBalance").empty();
  var inputName = $("#name").val();
  var inputInitialDeposit = parseFloat($("#initialDeposit").val());
  var bankCustomer = new Bankaccount(inputName, inputInitialDeposit);
  $(".userBalance").text(bankCustomer.showBalance());

  $(".depositOrWithdraw").submit(function(event){
    debugger;
    event.preventDefault();

    var inputWithdrawl = parseFloat($("input#withdrawl").val());
    var inputDeposit = parseFloat($("input#deposit").val());

    if ((inputWithdrawl === NaN) && (inputDeposit === NaN)){
      alert("Please enter a value.");
    }
    else if ((inputWithdrawl === NaN) && (inputDeposit > 0)){
      bankCustomer.addBalance(inputDeposit);
    }
    else if ((inputDeposit === NaN) && (inputWithdrawl > 0)){
        bankCustomer.subtractBalance(inputWithdrawl);
    }
    else{
      bankCustomer.addBalance(inputDeposit);
      bankCustomer.subtractBalance(inputWithdrawl);
    };

    $(".userBalance").text(bankCustomer.showBalance());
  });
});
