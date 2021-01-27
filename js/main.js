var logInBtn = document.getElementById("login");
logInBtn.addEventListener("click",function(){
    var owner = document.getElementById("owner-name").value;
    var pass =  document.getElementById("owner-password").value;
    if(owner.length==0 || pass.length==0){
        alert("Please Fill Up all the field with correct Informations.");
        document.getElementById("owner-name").value = "";
        document.getElementById("owner-password").value = "";
    }
    else{
        $("#login-area").hide();
        $("#transection-area").show();
        var owner = document.getElementById("owner-name").value;
        document.getElementById("accountowner").innerText = owner;
    }
});

function updateInfo(fieldName,updateValue){
    var fieldCurrent = parseFloat(document.getElementById(fieldName).innerText);
    fieldCurrent += updateValue;
    document.getElementById(fieldName).innerText = fieldCurrent;
}

var depositeBtn = document.getElementById("deposite-btn");
depositeBtn.addEventListener("click",function(){
    var depositeAmount = document.getElementById("deposite-amount").value;
    if(depositeAmount.length == 0 || parseFloat(depositeAmount)<=0){
        alert("Please Input a Valid Amount");
    }
    else{
        depositeAmount = parseFloat(depositeAmount);
        updateInfo("total-deposite",depositeAmount);
        updateInfo("total-balance",depositeAmount);
        alert("$" + depositeAmount +" was just deposited to your Account.");
    }
    document.getElementById("deposite-amount").value = "";
});
var withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click",function(){

    var withdrawAmount = document.getElementById("withdraw-amount").value;
    if(withdrawAmount.length == 0 || parseFloat(withdrawAmount)<=0 || parseInt(withdrawAmount) != parseFloat(withdrawAmount)){
        alert("Please Input a Valid Amount");
    }
    else{
        withdrawAmount = parseFloat(withdrawAmount);
        var currentBalance = parseFloat(document.getElementById("total-balance").innerText);
        if(withdrawAmount>currentBalance){
            alert("You Current Balance isn't enough to withdaw " + withdrawAmount + "$")
        }
        else{
            updateInfo("total-withdraw",withdrawAmount);
            updateInfo("total-balance",withdrawAmount*-1);
            alert("$" + withdrawAmount +" was just withdrawn from your Account.");
        }
    }
    document.getElementById("withdraw-amount").value="";
});