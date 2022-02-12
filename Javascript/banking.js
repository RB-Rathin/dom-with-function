//Diposit part updating
document.getElementById('diposit-button').addEventListener('click', function () {
    //input field value; 
    const dipositInput = document.getElementById('diposit-input');
    const dipositInputValue = dipositInput.value;
    //input text value;
    const totalDiposit = document.getElementById('diposit-total');
    const currentDipositAmount = totalDiposit.innerText;
    //diposit amount updating
    const currentTotalAmount = parseFloat(dipositInputValue) + parseFloat(currentDipositAmount);
    totalDiposit.innerText = currentTotalAmount;

    //Total balence updating

    //Balence value finding
    const totalBalench = document.getElementById('total-balench');
    const totalBalenchAmount = totalBalench.innerText;
    //In Balence diposit value adding
    const currentTotalBalnceAfterDiposit = parseFloat(totalBalenchAmount) + parseFloat(dipositInputValue);
    totalBalench.innerText = currentTotalBalnceAfterDiposit;
    //Diposit field value change
    dipositInput.value = '';

})
//Withdrow part updating
document.getElementById('withdrow-button').addEventListener('click', function () {
    //withdrow field value
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowInputValue = withdrowInput.value;
    //withdrow field text
    const totalWithdrow = document.getElementById('widrow-total');
    const totalWithdrowAmount = totalWithdrow.innerText;
    //Withdrow amount updating
    const currentWithdrowAmount = parseFloat(withdrowInputValue) + parseFloat(totalWithdrowAmount);
    totalWithdrow.innerText = currentWithdrowAmount;

    //In Balence withdrow value adding
    const balence = document.getElementById('total-balench');
    const balenceInnerText = balence.innerText;
    const currentTotalBalnceAfterWithdrow = parseFloat(balenceInnerText) - parseFloat(withdrowInputValue);

    balence.innerText = currentTotalBalnceAfterWithdrow;
    //Withdrow field value change
    withdrowInput.value = '';
})