
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}


//part 3 add delete button and make it work

function appendDeleteButton(tr, type)
{
  let newTD = document.createElement('td'); //create button
  newTD.innerText = "X";

  newTD.addEventListener('click', removeIt); //creates listening function that needs to say remove inside
  tr.append(newTD);//updates after removed function
}
//remove function
function removeIt(event) {
  let ev = event.target.closest('tr');
  // delete allServers[ev.id];
  // ev.parentNode.removeChild(ev);
  while (ev.tagName !== "TR")
  {
    ev = ev.parentNode;
    
  }
  if(ev.tagName === 'TR')
  {
    ev.remove();

  }
  updateServerTable();


}