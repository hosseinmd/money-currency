[![NPM](https://nodei.co/npm/money-currency.png)](https://nodei.co/npm/money-currency/)

[![install size](https://packagephobia.now.sh/badge?p=money-currency)](https://packagephobia.now.sh/result?p=money-currency) [![dependencies](https://david-dm.org/hosseinmd/money-currency.svg)](https://david-dm.org/hosseinmd/money-currency.svg)


# Money Currencies

Display money format and its filthy currencies, for all money lovers out there.


## Installation

```
npm install money-currency --save
```

## Usage

```
var MoneyCurrency = require('money-currency');

mc = new MoneyCurrency('USD');
console.log(mc.moneyFormat(13)) // $13
console.log(mc.moneyWithCurrencyFormat(13)) // $13 USD
```

## Tests

```
npm test
```

## Contributing

Contributions to the project are welcome. Feel free to fork and improve.
I do my best accept pull requests in a timely manor,
especially when tests and updated docs are included.
