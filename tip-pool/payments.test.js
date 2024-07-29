//this one occasionally throws errors that resolve themsleves upon refresh - idk why
beforeEach(function()
{
  //set testing values bill = 100, tip = 20
  billAmtInput.value = 100;
  tipAmtInput.value = 20;
});


describe('Create and Calculate current payment', function()
{
  it('should create new payment', function()
  {//failed - createCurPayments is undefined for some reason
    //assuming we are still using above variables  and no other inputs
    billAmtInput.value = "100";
    tipAmtInput.value = "20";

    let testPayments = { 
      billAmt: '100',
      tipAmt: '20',
      tipPercent: 20,
    }

    expect(createCurPayment()).toEqual(testPayments); //createCurPayments is undefined? I think saying the result of the values after createCurPayment will be the testPayment
    });
  it('should not create the payment if the values are empty', function()
  {
    //the if statement return should catch this and theother if that ensures they are greater than 0 but I think that's the point of the test is to make sure that break case doesn't occur and we're on top of it
    billAmtInput.value = "";
    tipAmtInput.value = "";
    expect(createCurPayment()).toEqual(undefined);
  });
  it('should add the new payment and add to AllPayments', function()
  {//failed, equals 0 not 1 so not saving to allPayments for some reason
    
    submitPaymentInfo(); 
    //assuming we are using the above values
    expect(Object.keys(allPayments).length).toEqual(1); //Expect it to be added to all payments
    //set the values what I know they should be - function put them into billAmt and tipAmt so convert to put through function
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    
  });
  it('should not add anything to allPayments if the values are not inputted', function()
  {
    //if the billAmtInput is 0 or "" and tip is prob same
    billAmtInput = "";
    submitPaymentInfo();
    //object.keys() = array method returnin array of objs strings - like for...in loop
    expect(Object.keys(allPayments).length).toEqual(0); //allPayments shouldn't be updated 
  });
 }
)

describe('Update payment amount', function()
  {
  //   it ('should submitPayment Info', function()
  //   {
  //     //simular to create new payment - this function is taking that result and if it looks good and named, appends table and sends the info to other functions for checks
  //     //with completed payment object, sent to append table with new payment below
  //   }
  //  );
   it('should append payment table with new payment to all', function()
    {
    let testCurrentPayments = { //sending in these values for the createCurPayment() function
      billAmt: '100',
      tipAmt: '20',
      tipPercent: 20,
    }
    
    allPayments['payment1'] = testCurrentPayments; //set test values like it went through above funtions

    appendPaymentTable(testCurrentPayments); //from function submitPayment Info

    //test that values are as expected like in servers
    let paymentsList = document.querySelectorAll('#paymentTable tbody tr td');//all payments
    expect(paymentsList[0].innerText).toEqual('$100');
    expect(paymentsList[1].innerText).toEqual('$20');
  }
  )
  });
  


afterEach(function()
{
  //reset everything; 
  billAmtInput.value = "";
  tipAmtInput.value = "";
  allPayments={};
  paymentId = 0; 

  paymentTbody.innerHTML = "";
  serverTbody.innerHTML = "";

  summaryTds[0].innerHTML = "";
  summaryTds[1].innerHTML = "";
  summaryTds[2].innerHTML =  "";
})




