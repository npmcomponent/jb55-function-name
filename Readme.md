*This repository is a mirror of the [component](http://component.io) module [jb55/function-name](http://github.com/jb55/function-name). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jb55-function-name`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# function-name

  Cross-browser function names

## Installation

    $ component install jb55/function-name

## Example

```javascript
var fname = require('function-name')

fname(function hi(){}) === 'hi'
fname(function (){}) === ''
```

## License

  MIT

## Build status

<a href="https://jepso-ci.com/jb55/function-name">
  <img src="https://jepso-ci.com/jb55/function-name.svg" alt="jepso-ci status" />
</a>
