# Get json promise

Tiny module for getting JSON from a URL as a promise. 
Will only work in browser ENV as there is not included XMLHttpRequest in nodejs. It also does not include any promise library - so it may not work in older browsers. 

## Install 

    npm require --save get-json-promise

## Usage

~~~js
var jsonPromise = require('./index');

var url = 'http://localhost:8080/package.json';

jsonPromise(url).then(function(data) {
    console.log(data);
});
~~~


See [index.html](index.html)

MIT © [Dennis Iversen](https://github.com/diversen)
    
