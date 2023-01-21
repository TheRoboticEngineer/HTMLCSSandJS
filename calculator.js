window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// 1. Get the inputs from the DOM.
// 2. Put some default values in the inputs
// 3. Call a function to calculate the current monthly payment
function setupIntialValues() {
    // set the default values for the inputs
    document.getElementById("loan-amount").value = '10000';
    document.getElementById("loan-years").value = '1';
    document.getElementById("loan-rate").value = '5';
    // get the current values from the UI
    const values = getCurrentUIValues();
    // calculate the monthly payment
    const monthly = calculateMonthlyPayment(values);
    // update the UI to show the monthly payment
    updateMonthly(monthly);
}


// 1.  Get the current values from the UI
// 2. Update the monthly payment
function update() {
    // get the current values from the UI
    const values = getCurrentUIValues();
    // calculate the monthly payment
    const monthly = calculateMonthlyPayment(values);
    // update the UI to show the monthly payment
    updateMonthly(monthly);
}

// 1. Given an object of values (a value has amount, years and rate ), calculate the monthly payment. 
// The output should be a string that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // calculate the monthly interest rate first
  const monthlyRate = values.rate / 12 / 100;
  // calculate the total number of payments
  const numPayments = values.years * 12;
  // calculate the monthly payment
  const monthly = values.amount * (monthlyRate * Math.pow((1 + monthlyRate), numPayments)) / (Math.pow((1 + monthlyRate), numPayments) - 1);
  // return the monthly payment as a string with 2 decimal places
  // return parseFloat(monthly.toFixed(2));
  return (monthly.toFixed(2))
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    // get the element to display the monthly payment
    const element = document.getElementById("monthly-payment");
    // update the element's text to show the monthly payment
    element.innerHTML = monthly;
}

