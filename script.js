let successUI = document.getElementById('successUI');
let failureUI = document.getElementById('failureUI');
let amountSpan = document.getElementById('amountSpan');
let phoneSpan = document.getElementById('phoneSpan');
let currencySpan = document.getElementById('currencySpan');

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let amount = document.getElementById('amount').value;
    
    // Check if the amount is entered
    if (!amount || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    document.getElementById('processingUI').classList.remove('hidden');
    successUI.classList.add('hidden');
    failureUI.classList.add('hidden');

    const phone = document.getElementById('phone').value;
    const currency = document.getElementById('currency').value;

    amountSpan.textContent = amount;
    phoneSpan.textContent = phone;
    currencySpan.textContent = currency;

    // Simulate an API call using a promise
    const paymentPromise = new Promise((resolve, reject) => {
        setTimeout(() => {

        if (Math.random() > 0.5) {
            resolve({ status: 'success', data: 'Payment successful!' });
        } else {
            reject(new Error('Payment failed'));
        }
    }, 2000);
});

    paymentPromise
        .then((data) => {
            document.getElementById('processingUI').classList.add('hidden');
            successUI.classList.remove('hidden');
            console.log('Payment successful:', data);
        })
        .catch((error) => {
            document.getElementById('processingUI').classList.add('hidden');
            failureUI.classList.remove('hidden');
            console.log('Payment failed:', error);
        });
});
