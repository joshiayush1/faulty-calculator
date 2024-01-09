var nums1 = prompt("Enter the first number : ");
var nums2 = prompt("Enter the second number : ");

var validNumber1 = parseFloat(nums1);
var validNumber2 = parseFloat(nums2);

var operator = prompt("Enter Operation( + , - ,  * , / ) : ");

var random = Math.random();
console.log(random);
if(random<0.1){
    switch(operator){
        case "+":
            console.log(validNumber1-validNumber2);
            break;
        case "*":
            console.log(validNumber1+validNumber2);
            break;
        case "/":
            console.log(validNumber1**validNumber2);
            break;
        case "-":
            console.log(validNumber1/validNumber2);
            break;
        default:
            console.log("Enter valid operation");
            break;
    }
}
else if(random > 0.1){
    switch(operator){
        case "+":
            console.log(validNumber1+validNumber2);
            break;
        case "*":
            console.log(validNumber1*validNumber2);
            break;
        case "/":
            console.log(validNumber1/validNumber2);
            break;
        case "-":
            console.log(validNumber1-validNumber2);
            break;
        default:
            console.log("Enter valid operation");
            break;
    }
}
