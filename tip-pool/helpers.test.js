beforeEach(function()
{
  //set values
  billAmtInput.value = 100;
  tipAmtInput.value = 20;
  submitPaymentInfo();
});

describe("calculate totals for tip, bill, and percent", function()
{
    it('Should calculate total bills for all payments', function()
  {
    //current amount
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    //changed amount if it is adding
    billAmtInput.value = 900;
    tipAmtInput.value = 80;
    submitPaymentInfo();

    //then new amount wit those added would be: 
    expect(sumPaymentTotal('billAmt')).toEqual(1000);
  });
    it('Should calculate total Tip for all payments', function()
  {
    //current amount
    expect(sumPaymentTotal('tipAmt')).toEqual(20);

    //changed amount if it is adding
    billAmtInput.value = 900;
    tipAmtInput.value = 80;
    submitPaymentInfo();

    //then new amount wit those added would be: 
    expect(sumPaymentTotal('tipAmt')).toEqual(100);
  });
    it('Should calculate total percent tip for payment', function()
  {
    //current amount
    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    //changed amount if it is adding
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    submitPaymentInfo();

    //then new amount wit those added would be: 
    expect(sumPaymentTotal('tipPercent')).toEqual(30); 
})
it('should calculate tip percent', function()
{
  // function calculateTipPercent(billAmt, tipAmt) {
  //   return Math.round(100 / (billAmt / tipAmt));
  // }//makes sure function works right
  expect(calculateTipPercent(100, 20)).toEqual(20);
  expect(calculateTipPercent(1000, 100)).toEqual(10);
});})



it('Should create new table row and add the values', function()
{
  //how can i test that the row(td) is being added? - check length of table(tr)? and that children are being added as td  
  //soution showed creating a tr with test inside. then I think they add to the td so they can check that the td length has been added and that the innerhtml of that object in the td is test and matches

  //add something to the td from function
  let newTestTr = document.createElement('tr');//has to be a tr to be put into function appendTD
  appendTd(newTestTr, "match");

  //check if it has been added
  expect(newTestTr.innerHTML).toEqual('<td>match</td>');

});


//part 3 - adding delete button
it('should create delete td and add it to the row when button is clicked', function()
{
  let newTestDelTR = document.createElement('tr');//creating button - simulating new row that needs one i think
  appendDeleteButton(newTestDelTR); //sending it through my function
  expect(newTestDelTR.children.length).toEqual(1);//expect it added 
  expect(newTestDelTR.innerHTML).toEqual("<td>X</td>");

});

afterEach(function()
{
  //reset everything; 
  billAmtInput.value = "";
  tipAmtInput.value = "";
  allPayments= {};
  paymentId = 0; 

  paymentTbody.innerHTML = "";
  serverTbody.innerHTML = "";

  summaryTds[0].innerHTML = "";
  summaryTds[1].innerHTML = "";
  summaryTds[2].innerHTML =  "";
});
