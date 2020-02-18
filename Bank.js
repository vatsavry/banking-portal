var AvailableBal = 0;
document.getElementById('submit').addEventListener('click',()=>{

var viewLogic =(function() {
    
    var AvailableBal = document.getElementById('AvailableBal')
    var withdraw = document.getElementById('withdraw')
    var deposit = document.getElementById('deposit')
    var amount = document.getElementById('amount')
    var select = document.getElementById('select')
    var submit = document.getElementById('submit')
   

return{
    bankInfo:{
        AvailableBal:AvailableBal,
        withdraw:withdraw,
        deposit:deposit,
        amount:amount,
        select:select,
        submit:submit
    }
}
})();
    var controlLogic =  function(viewLogic) {
var amount = parseInt(viewLogic.bankInfo.amount.value)
var select = viewLogic.bankInfo.select.selectedIndex
if (amount > 0) {
    

if (select===0) {
    viewLogic.bankInfo.withdraw.value= "";
    viewLogic.bankInfo.deposit.value = amount;
    AvailableBal = AvailableBal+amount;
    viewLogic.bankInfo.AvailableBal.value = AvailableBal;
    
    console.log(log)
    
    
}else if(viewLogic.bankInfo.AvailableBal.value >= amount){
    viewLogic.bankInfo.deposit.value = "";
    viewLogic.bankInfo.withdraw.value = amount;
    AvailableBal = AvailableBal-amount;
    viewLogic.bankInfo.AvailableBal.value = AvailableBal;
    console.log(amount)
    console.log(AvailableBal)
}
else{
    alert("Insuffecient Funds")
    console.log(log)

}
}
else{

    alert("enter valid amount")

}
        
}
controlLogic(viewLogic)
}) 