// IIFE
var module1 = (function($, fName, lName){
     var firstName = "John";
     var lastName = "Smith";
 
     function fullName(fName, lName) {
         return console.log('Full Name: ',fName + ' ' + lName);
     }
 
     function accessGlobalVar() {
         console.log('jQuery:', $);
         console.log('Global:', fName + ' ' + lName);
     }
     // to make properties and methods public
     return {
         fullName : fullName,
         accessGlobalVar: accessGlobalVar
     }
 })(jQuery, firstName, lastName)