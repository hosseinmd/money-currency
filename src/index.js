const MoneyFormats = require("./config");

function MoneyCurrency(moneyCurrency) {
  return {
    moneyFormat(amount) {
      return MoneyFormats[moneyCurrency]["moneyFormat"].replace(
        "{amount}",
        amount,
      );
    },
    moneyWithCurrencyFormat(amount) {
      return MoneyFormats[moneyCurrency]["moneyWithCurrencyFormat"].replace(
        "{amount}",
        amount,
      );
    },
  };
}

MoneyCurrency.currencyFormats = function() {
  return Object.keys(MoneyFormats);
};

module.exports = MoneyCurrency;
