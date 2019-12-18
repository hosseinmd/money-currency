//Prepare test
const MoneyCurrency = require("../src");

//currency
test("should Convert  numbers to currency", () => {
  console.log(
    MoneyCurrency.currencyFormats().map(currency => {
      return new MoneyCurrency(currency).moneyFormat("12345609");
    }),
  );
  expect(new MoneyCurrency("IRR").moneyFormat("12345609")).toBe("12345609 ﷼");
});
