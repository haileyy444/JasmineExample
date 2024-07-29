describe('Calculate monthly payment', function() {
  it('should calculate the monthly rate correctly', function () {
    // ... googled example loan amounts and its surprisingly not easy to find examples with the answer so using from solution to check if this works with numbers
    const values = {amount: 10000, years: 8, rate: 5.8}; // using these calculate to get that
    expect(calculateMonthlyPayment(values)).toEqual('130.44');
  });

  it("should return a result with 2 decimal places", function() {
     const values = {amount: 10043, years: 8, rate: 5.8};
     expect(calculateMonthlyPayment(values)).toEqual('131.00');
  });
}
)
// it("should set the initial values instead of '' ", function()
// {
      // idk how to grab the functions after input - cant - would have to set values which doesn't check if they're being reset by input
// } )





/// etc
