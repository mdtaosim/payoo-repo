document.getElementById('add-mony-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const validePin = 1234;
        const amount = parseInt(document.getElementById('amount-add').value);
        const availableBalance = parseInt(document.getElementById('balance').innerText);

        const acountNumber = document.getElementById('bank-account-number').value;
        const pinNumber = parseInt(document.getElementById('pin-number').value);

        if (acountNumber.length < 9) {
            alert('Please Provide a valide Account Number');
            return;
        }

        if (pinNumber !== validePin) {
            alert('Incorect Pin');
            return;
        }

        const totalBalance = amount + availableBalance;
        document.getElementById('balance').innerText = totalBalance;

    })