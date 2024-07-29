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

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = {amount: "", years: "", rate: ""};
  const amountInput = document.getElementById("loan-amount");
  const yearsInput = document.getElementById("loan-years").value;
  const rateInput = document.getElementById("loan-rate").value;
  amountInput.value = values.amount;
  yearsInput.value = values.years;
  rateInput.value = values.rate;//sets them all as strings tho
  // console.log("amount: "+values.amount+" years: "+values.years+" rate: "+values.rate);
  update();
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues)); //actually tells what to print

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // const rateInput = document.getElementById("loan-rate").value;
  let monthlyRate = (values.rate / 100)/12; 
  let n = Math.floor(values.years*12); //total number of payments

  return (
    //monthly payment = p * i / 1-(1+i)^-n
    (monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -n))).toFixed(2);
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyInput = document.getElementById("monthly-payment");
  monthlyInput.innerText = "$" + monthly + " per month";
}
