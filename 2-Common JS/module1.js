// to import module using "require" in your JS can be possible using https://browserify.org/ or webpack
var module1 = require ('./module1');

(function init() {
     // now you can use all the properties and methods of module1.js
     module1.fullName('Wasil', 'Sayyed');
     module1.loadEvent();
})();
