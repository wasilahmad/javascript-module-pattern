const firstName = "John";
const lastName = "Smith";

function fullName(fName, lName) {
    return console.log('Full Name: ',fName + ' ' + lName);
}

function accessGlobalVar() {
    //console.log('jQuery:', $);
    console.log('Global:', fName + ' ' + lName);
}

// named export
// export function module2() {
//     console.log("I am module2()");
// }

// default export 
export default module1 = {
    fullName : fullName,
    accessGlobalVar: accessGlobalVar
}