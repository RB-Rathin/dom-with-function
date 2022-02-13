//Creation function for input value.
function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const inputAmount = parseFloat(inputValue);
    input.value = '';
    return inputAmount;
}
//Creating function for input value update.
function updateInputValue(innerTextId, amount) {
    const currentInput = document.getElementById(innerTextId);
    const currentInputAmount = currentInput.innerText;
    const currentAmount = parseFloat(currentInputAmount);
    const updateAmount = currentAmount + amount;
    currentInput.innerText = updateAmount;   
}
//creating function for Balench update.
function updateBalence(inputedAmount,isAdd) {
    const balenchInput = document.getElementById('total-balench');
    const balenchInputValue = balenchInput.innerText;
    const currentBalench = parseFloat(balenchInputValue);
    if (isAdd == true) {
        const totalBalench = currentBalench + inputedAmount;
        balenchInput.innerText = totalBalench;
    } else {
        const totalBalench = currentBalench - inputedAmount;
        balenchInput.innerText = totalBalench;
    }
    
}
//Event handeler for diposit part
document.getElementById('diposit-button').addEventListener('click', function () {
    const dipositAmount = getInput('diposit-input');
    updateInputValue('diposit-total', dipositAmount);
    updateBalence( dipositAmount,true);   
})

//Event handeler for withdrow part
document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowAmount = getInput('withdrow-input');
    updateInputValue('widrow-total', withdrowAmount);
    updateBalence( withdrowAmount,false); 
})