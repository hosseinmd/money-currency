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
const MoneyCurrency = require('money-currency');

mc = MoneyCurrency('USD');
console.log(mc.moneyFormat(13)) // $13
console.log(mc.moneyWithCurrencyFormat(13)) // $13 USD
```

## Tests

```
npm test
```

## Contributing

Feel free to fork and improve.
