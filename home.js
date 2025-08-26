document.getElementById('add-mony-btn')
    .addEventListener('click', function (e){
        e.preventDefault();

        const amount = parseInt(document.getElementById('amount-add').value);
        const availableBalance = parseInt(document.getElementById('balance').innerText);

        const totalBalance = amount + availableBalance;

        document.getElementById('balance').innerText = totalBalance;

    })