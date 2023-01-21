describe("calculateMonthlyPayment()", function() {
  // Test 1: check if monthly payment is calculated correctly
  it("calculates the correct monthly payment", function() {
      const testValues1 = {amount: '10000', years: '1', rate: '5'};
      const expectedMonthlyPayment1 = '856.07';
      const calculatedMonthlyPayment1 = calculateMonthlyPayment(testValues1);
      expect(calculatedMonthlyPayment1).toBe(expectedMonthlyPayment1);
  });

  // Test 2: check if monthly payment is returned with two decimal places
  it("returns monthly payment with two decimal places", function() {
      const testValues2 = {amount: 20000, years: 2, rate: 10};
      const calculatedMonthlyPayment2 = calculateMonthlyPayment(testValues2);
      expect(calculatedMonthlyPayment2).toMatch('922.90');
  });
});
