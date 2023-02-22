    let btnCalculate = document.getElementById("btnCalculate");
    let num1Error =  document.getElementById("num1Error");
    let num2Error =  document.getElementById("num2Error");
    let operatorError =  document.getElementById("operatorError");
    num1Error.style.display = "none";
    num2Error.style.display = "none";
    operatorError.style.display = "none";
    let result = 0;
    let num1ErrorStatus =
        num2ErrorStatus =
        operatorErrorStatus = false; //( No error )
    btnCalculate.addEventListener("click", function(){
        let num1 = document.getElementById("firstNum");
        let num2 = document.getElementById("secondNum");
        let operator = document.getElementById("operator");

    
        checkValidator(num1,num2,operator);

        console.log(num1ErrorStatus);
        console.log(num2ErrorStatus);
        console.log(operatorErrorStatus);
     
       if(num1ErrorStatus == false && num2ErrorStatus == false && operatorErrorStatus == false){

        num1 = parseInt(num1.value);
        num2 = parseInt(num2.value);
        
       
        switch (operator.value) {
      
        case "add": 
            result = num1 + num2;
            break;
        case "minus": 
            result = num1 - num2;
            break;
        case "multiply": 
            result = num1 * num2;
            break;
        case "divide": 
            result = num1 / num2;
            break;
    
        default:
            break;
    }
    document.getElementById("result").innerHTML = "Result: "+result;
       }
    });
   

    function checkValidator(num1,num2,operator){
        if(num1.value == "" || num1.value == null || num1.value == undefined){
            num1Error.style.display = "block"; 
            num1ErrorStatus = true;
        }
        else{
            num1Error.style.display = "none";
            num1ErrorStatus = false;
        }

        if(num2.value == "" || num2.value == null || num2.value == undefined){
            num2Error.style.display = "block"; 
            num2ErrorStatus = true;
        }
        else{
            num2Error.style.display = "none";
            num2ErrorStatus = false;
        }

        if(operator.value == "empty"){
            operatorError.style.display = "block"; 
            operatorErrorStatus = true;
            
        }
        else{
            operatorError.style.display = "none";
            operatorErrorStatus = false;
        }
    }

 