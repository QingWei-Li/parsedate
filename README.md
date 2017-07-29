# parsedate

[![Build Status](https://travis-ci.org/QingWei-Li/parsedate.svg?branch=master)](https://travis-ci.org/QingWei-Li/parsedate)
[![npm](https://img.shields.io/npm/v/parsedate.svg)](https://www.npmjs.com/package/parsedate)


> Converts a value to a Date

## Install

```sh
npm i parsedate
# yarn add parsedate
```

## Usage

```js
var parseDate = require('parsedate')

// Parse string
parseDate('738720000000')
// => new Date('1993-05-30T00:00:00.000Z')

parseDate('1995-05-30')
// => new Date('1995-05-30T00:00:00.000Z')

// Parse number
parseDate(738720000000)
// => new Date('1993-05-30T00:00:00.000Z')

// Parse Date
parseDate(new Date())
// => new Date()

// Parse other
parseDate('🌚')
// => null
parseDate('')
// => null
```

## License

MIT

