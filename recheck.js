<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

var AvailableBalance =0
var viewLogic=(function(){
var deposit = document.getElementById('deposit')
var availableBalance = document.getElementById('availablebalance')
var withdraw = document.getElementById('withdraw')
var Amount = document.getElementById('amount')
var submit = document.getElementById('submit')
var depositSelector = document.getElementById('depositselector')
var withdrawSelector = document.getElementById('withdrawselector');
var selecttype = document.getElementById('select1')


return{
            data:{
                Deposit:deposit,
                availableBalance:availableBalance,
                withdraw:withdraw,
                Amount:Amount,
                submit:submit,
                depositSelector:depositSelector,
                withdrawSelector : withdrawSelector,
                selecttype:selecttype

            }
}
})

var controlLogic = (function(viewLogic){

    var amount=(Number)(ViewLogic.data.Amount.value)
    var select= ViewLogic.data.selecttype.selectedIndex
    
    if(select===0){
     ViewLogic.data.withdraw.value="";
    ViewLogic.data.deposit.value=amount;
    AvailableBalance= AvailableBalance+amount;
     ViewLogic.data.AvailableBalance.value=AvailbalBalance;
      
   }
    else{
     ViewLogic.data.deposit.value="";
    ViewLogic.data.withdraw.value=amount;
    AvailbalBalance=AvailbalBalance-amount;
    ViewLogic.data.AvailbalBalance.value=AvailbalBalance;
   }

   swal('Insuffisient funds')
   
  
   modelLogic(ViewLogic,controllerLogic)  
    

})
controlLogic(ViewLogic)

var modelLogic()

