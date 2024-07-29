let billAmtInput = document.getElementById('billAmt');
let tipAmtInput = document.getElementById('tipAmt');
let paymentForm = document.getElementById('paymentForm');

let paymentTbody = document.querySelector('#paymentTable tbody');
let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');

let allPayments = {};
let paymentId = 0;

paymentForm.addEventListener('submit', submitPaymentInfo);

// Add a curPayment object to allPayments, update html and reset input values
function submitPaymentInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let curPayment = createCurPayment(); // calls createCurPayment function to create it and save it as this variable - object

  if (curPayment) {
    paymentId += 1; //give it the next id number

    allPayments['payment' + paymentId] = curPayment; //add it to the total?

    appendPaymentTable(curPayment); //update the total
    updateServerTable();
    updateSummary();

    billAmtInput.value = ''; //reset
    tipAmtInput.value = '';
  }
}

// createCurPayment() will return undefined with negative or empty inputs
// positive billAmt is required but tip can be 0
function createCurPayment() {
  let billAmt = billAmtInput.value;
  let tipAmt = tipAmtInput.value;

  if (billAmt === '' || tipAmt === '') return;

  if (Number(billAmt) > 0 && Number(tipAmt) >= 0) {
    return {
      billAmt: billAmt,
      tipAmt: tipAmt,
      tipPercent: calculateTipPercent(billAmt, tipAmt),
    }
  }
}

// Create table row element and pass to appendTd with input value
function appendPaymentTable(curPayment) { //sent from above, obj with newest balance in it 
  let newTr = document.createElement('tr');
  newTr.id = 'payment' + paymentId; //creates payment1 or payment 2 etc

  appendTd(newTr, '$' + curPayment.billAmt);//inputs the values into the table with their parent payemtn2 ex
  appendTd(newTr, '$' + curPayment.tipAmt);
  appendTd(newTr, curPayment.tipPercent + '%');

  paymentTbody.append(newTr); //append to the body with the new payment
}

// Create table row element and pass to appendTd with calculated sum of all payment
function updateSummary() {
  let tipPercentAvg;
  let paymentTotal = sumPaymentTotal('tipPercent');
  let numberOfPayments = Object.keys(allPayments).length;

  if (paymentTotal === 0 && numberOfPayments === 0) {
    tipPercentAvg = 0;
  } else {
    tipPercentAvg = paymentTotal / Object.keys(allPayments).length;
  }

  summaryTds[0].innerHTML = '$' + sumPaymentTotal('billAmt');
  summaryTds[1].innerHTML = '$' + sumPaymentTotal('tipAmt');
  summaryTds[2].innerHTML =  Math.round(tipPercentAvg) + '%';
}

