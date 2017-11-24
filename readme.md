# merge-concat

A module that merges the passed in objects recursively while concatenating internal arrays. The procedure is completely functional, so it does not mutate any argument.

## Installation

- #### NPM / Yarn
  Run `npm install --save https://github.com/techiedod/merge-concat`, or `yarn add https://github.com/techiedod/merge-concat`

## Usage

- #### With Modules

  ``` js
  // ES6
  import mergeConcat from 'merge-concat'

  // It can take any number of arguments
  // with the latter taking precedence.
  mergeConcat(
    {
      a: {
        b: 0
      },
      d: [ 'z' ]
    },
    {
      a: {
        b: 1,
        c: 2,
        e: [ 'x', 'y' ]
      }
    },
    {
      a: {
        c: 3,
        e: [ 'u' ]
      },
      d: [ 'v' ]
    }
  )
  //=> { a: { b: 1, c: 3, e: [ 'x', 'y', 'u' ] }, d: [ 'z', 'v' ] }

  // Any non-object arguments will be converted
  // to empty objects. In other words, it's
  // simply ignored.
  mergeConcat(
    {
      a: 2,
      b: {
        c: 4
      }
    },
    null,
    {
      b: {
        c: 6
      }
    },
    undefined,
    {
      a: 8
    },
    'String',
    ['array']
  )
  //=> { a: 8, b: { c: 6 } }

  // ES5
  var mergeConcat = require('merge-concat')

  mergeConcat({ /*...*/ }, { /*...*/ }, /*...*/)
  ```

- #### `<script>` Include

  Just include `./dist/merge-concat.js` before the closing `<body>` tag and then simply call `mergeConcat` or `window.mergeConcat` with the objects you want to deep merge.

## License

[MIT](http://opensource.org/licenses/MIT)
