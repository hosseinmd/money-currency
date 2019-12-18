"use strict";

var MoneyFormats = require("./config");

function MoneyCurrency(moneyCurrency) {
  this._moneyCurrency = moneyCurrency;

  this.moneyFormat = function(amount) {
    return MoneyFormats[this._moneyCurrency]["moneyFormat"].replace(
      "{amount}",
      amount,
    );
  };

  this.moneyWithCurrencyFormat = function(amount) {
    return MoneyFormats[this._moneyCurrency]["moneyWithCurrencyFormat"].replace(
      "{amount}",
      amount,
    );
  };
}

MoneyCurrency.currencyFormats = function() {
  return Object.keys(MoneyFormats);
};

module.exports = MoneyCurrency;
