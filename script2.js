var x = "global decleration";
console.log("Result message: "+x);

var fun1 = function () {
var x = "inside a function";
console.log(" fun1 Result message: "+x);
 
fun2();
}
function fun2() {
     console.log(" fun2 Result message: "+x);
}