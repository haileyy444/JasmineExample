describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  //payments are taken care of on the payment.js file - this should specifically be for updating the SERVERS
  it('should UPDATE THE TABLE payment summery', function()
  {
    submitServerInfo(); //update
    updateServerTable(); //update

    let serverSummeryTable = document.querySelectorAll('#server1 td') //takes the pay from server1=id which is alice & amountTip - would only work for her tho, if multiple would need to go back another layer to include all servers but dont think we're testing
    expect(serverSummeryTable.length).toEqual(2);
    expect(serverSummeryTable[0].innerText).toEqual('Alice');
    expect(serverSummeryTable[1].innerText).toEqual('$20.00')//amount in tips we are setting alice to make
  });
  it('should not add the new server if none is submitted', function()
  {
    serverNameInput.value === ""; //if server name is this, then do this
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);//needed to be 1 for initialized alice
  })

  afterEach(function() {
    // teardown logic - clean up dom after the test is run
    serverId = 0;
    allServers = {};
    // serverTbody.clear(); 
    
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments={};
    paymentId = 0; 
  
    paymentTbody.innerHTML = "";
    serverTbody.innerHTML = "";
  
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML =  "";
  });
});

//write a test for each function found on server.js, then do payments and helpers
  //create a helpters.test.js with each function tested
  //create a payments.test.js with each function tested in that one - wont load in jasmine tho

  //then step 3 which looks insane for no reason