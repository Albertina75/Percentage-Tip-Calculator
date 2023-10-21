// ¿En tu páis de origen es normal dejar propina? Totalmente de acuerdo.

//Obtengo referencia al botón con #calculate

const calculateButton = document.getElementById('calculate');

//0-Asociar un evento click al botón "Calculate"

calculateButton.addEventListener('click', function () {

    //1-Obtener el valor que pone el usuario en el campo Bill Amount

    const billAmountInput = document.getElementById('bill-amount');
    const billAmountValue = Number(billAmountInput.value);
    
    console.log('Valor del campo Bill Amount:', billAmountValue);


    //2-Obtener el valor que pone el usuario en el campo Percentage Tip

    const percentageTipInput = document.getElementById('percentage-tip');
    const percentageTipValue = Number(percentageTipInput.value);

    console.log('Valor del campo Percentage Tip:', percentageTipValue);


    //3-Calcular el total de la propina en Tip Amount

    const tipAmountInput = document.getElementById('tip-amount');
    const calculatedTip = (billAmountValue * percentageTipValue) / 100;
    tipAmountInput.value = calculatedTip.toFixed(2);

    console.log('Propina calculada:', calculatedTip);


    //4-Calcular el total de la cuenta en el campo Total

    const TotalInput = document.getElementById('total');
    const total = billAmountValue + calculatedTip; 
    TotalInput.value = total.toFixed(2);

    console.log('Total de la cuenta:', total)
   

    




});