console.log("Hello Javascript !");
var name = "Zeeshan Malik Raje";
console.log("My Name is : ", name);



/*Naming Conventions for variable
i)The first character must be a letter or an underscore(_) or an
dollar($).you can't use a number as the first character.
ii)The rest of the variable name can include any letter , any number, or the underscore.can't
use any other character , including spaces.
iii)Variable names are case sensetive.
iv)No limit to the length of variable.
v) You can't use one of Javascript's reserved words as a variable name.
*/

/*Challenge 1 in Javascript */
var _myName = "vinod";
console.log("The value of _myName :", _myName);
var _1my__Name = "bahadur";
console.log("The value of _1my__Name:", _1my__Name);
var $myName = "Zeeshan Malik Raje";
console.log("The value of $myName: ", $myName);

/*Variable name starting with numericals and specail character like % / * - are not valid variables */

/*var 1myName="Zeeshan";
console.log("The value of 1myName is : ",1myName);
var $myname%="Zeeshan";
console.log("The value of $myname%",$myname%);*/


/*Data Types in Javascript 
1) undefined: typeof instance === "undefined"
2) Boolean: typeof instance === "boolean"
3) Number: typeof instance === "number"
4) String: typeof instance === "string"
5) Bigint: typeof instance === "bigint"
6) Symbol: typeof instance === "symbol"
*/


/*Type of Variable will get by typeOf opertaor */

var myName = "Zeeshan Malik Raje";
console.log("The value of myName : ", myName);
console.log("The value of variable myName : ", myName);
console.log("Type Of variable myName is : ", typeof (myName));
var myAge = 28;
console.log("The value of variable myAge : ", myAge);
console.log("The type of variable Age is : ", typeof (myAge)); 
var iamZeeshan = true;
console.log("The value of variable iamZeeshan : ", iamZeeshan);
console.log("The type of variable iamZeeshan : ", typeof (iamZeeshan));


/*Challenge 2 in Javascript */
console.log("10+'20' : ", 10 + "20");
console.log("9-'5': ", 9 - "5");//bug
console.log("Java+Script : ", "Java" + "Script"); 
console.log(" " + " ");
console.log("" + 0);
console.log("Zeeshan" - "Malik");
console.log("true+true :", true + true);
console.log("true+false : ", true + false);
console.log("false+true : ", false + true);
console.log("false-true : ", false - true);


/*Interview Question 1 
What is Differenece between Null & undefined  ?
Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript. 
Undefined: It means the value does not exist in the compiler.
*/

var a = null;
console.log("The value of var a :", a);
console.log("The type of variable a : ", typeof (a));
/*Type of null variable is object , which is bug in Javascript */
var b;
console.log("The value of var b : ", b);
console.log("The type of variable b : ", typeof (b));

/*Interview Question 2
What is NaN?
i)NaN is global property
ii)In other words , it is a property of global scope
iii)The initial value of NaN is Not a Number
*/

var myPhone = "8308876504";
var myName = "Zeeshan Malik Raje";

/*isNaN helps to determine wheter it is not a Number or Number*/
console.log(isNaN(myPhone));
if (isNaN(myPhone)) {
    console.log("Please valid number")
}
else {
    console.log("It is my number");
}


/*Challenge 3 in Javascript */
/***The Number.NaN property represents Not-A-Number. It is Equal of NaN. ***/

console.log("NaN===NaN", NaN === NaN);
console.log("Number.NaN===NaN", Number.NaN === NaN);
console.log("isNaN(NaN)", isNaN(NaN));
console.log("isNaN(Number.NaN)", isNaN(Number.NaN));
console.log("Number.isNaN(NaN)", Number.isNaN(NaN));



/*Expressions and Operators in Javascript 
i)Assignment Operator
ii)Arithmatic Operator
iii)Comparison Operator
iv)Logical Operator
v)String Operator
vi)Conditional Operator
*/


/* i) Arithmatic Operator 
It include simple Arithmatic Operations between Operands
*/
var b = 45;
var c = 20;
console.log("Arithmatic Operator in Javascript : ");
console.log("Addition of b and c : ", b + c);
console.log("Substraction b and c : ", b - c);
console.log("Multiplication of b and c : ", b * c);
console.log("Division b and c : ", b / c);
console.log("Addition of b and c : ", b + c);
console.log(" b and c : ", b - c);


/* Increment Operator in Javascript 
Operator : x++ or ++x or x-- or --x
If used postfix, with operator after operand (for example, x++)
the increment operator increments and returns the value before incrementing.

if used prefix, with operator before operand (for example, ++x)
the increment operator increments and returns the value after incrementing.
*/

var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum);
var newNum2 = --num;
console.log(newNum2);


/*Comparison Operator */

/*A Comparison operator compares its operands and
returns a logical value based on whether the comparison is true.


*/
console.log("Comparison Operator in Javascript : ");
var a = 30;
var b = 10
console.log("The Value of a & b : ", a, b)
/*Equal to operator*/

console.log("a==b :", a == b);
/*Not Equal to Operator */
console.log("a!=b : ", a != b);
/*Greater than operator */
console.log("a>b : ", a > b);
/*Greater than Equal to  operator */
console.log("a>=b : ", a >= b);
/*Less than operator */
console.log("a<b : ", a < b);
/*greater than operator */
console.log("a<=b : ", a <= b);


/*Logical Operator 
Logical Operators are typically used with boolean (logical) values.
when they are, they return a Boolean Value.
*/
console.log("Logical Operator in Javascript");


/*Logical And (&&) 
The logical AND (&&) operator (logical conjunction) for a set of 
operands is true if and only if all of its operands are true.



Logical OR (||)
The logical OR (||) operator (logical disjunction) for a set of 
operands is true if and only if one or more of its operands is true.
*/
var a = 45;
var b = 78;
console.log("The value of a & b : ", a, ",", b);
console.log("Logical AND Operator :");
console.log("a>b && b>50", a < b && b > 50);
console.log("Logical OR Operator :");
console.log("a>b || b>50", a > b || b > 50);
console.log("Logical NOT Operator : ");
console.log("!true", !true);
console.log("!false", !false);
console.log("!(a<50)", !(a < 50));


/*String Operator
The Concatenation operator (+) concentrates two string values together,
returning another string that is the union of the two operand strings.
*/

console.log("Hello World");
console.log("hello " + "World");
console.log("my name is " + myName);

/*Challenge 4 in Javascript */

/*Solution 1*/
console.log("2**5", 2**5);
// ** is exponetial operator that is power of number  

/*Solution 2*/
console.log(23 + "Zeeshan");
console.log(23 - "Zeeshan");


/*Solution 3
Program of number swaping with temp variable*/
var a = 45;
var b = 56;
console.log("The Original Value of a : ", a);
console.log("The Original Value of b : ", b);

var c = b;
b = a;
a = c;
console.log("Value of a : ", a);
console.log("Value of b ", b);

/*Solution 4
Program of swaping numbers without temp variable
*/

var a = 15;
var b = 25;
console.log("The Original value of a : ", a);
console.log("The Original Value of b : ", b);
a = a + b;
b = a - b;
a = a - b;
console.log("The new Value of a : ", a);
console.log("The new Value of b : ", b);


/* 3 . Interview Question 3
What Is Difference between == & === ?
main difference between "==" and "===" operator is that formerly compares variable by making type correction e.g.
 if you compare a number with a string with numeric literal, == allows that, 
 but === doesn't allow that, because it not only checks the value but also type of two variable, 
 if two variables are not of the same type "===" return false, while "==" return true. 
*/

/*Conditional Statements in Javascript
Types of Control Statements :
i)If..Else
ii)Switch Statement
iii)While loop
iv)Do-while loop
v)For Loop
vi)For in Loop
vii)For of Loop
viii)Conditional (ternary) operator

*/

console.log("If-else condition in Javascript");
var wheather = "rainy";
if (wheather = "rainy") {
    console.log("Please Wear Raincoat");
}
else {
    console.log("Don't Wear Raincoat");
}

/*Challenge 5 in Javascript
Write a Program to find leap year in Javascript
*/
var year = 2024;
if (year % 4 == 0) {
    console.log("This is Leap Year");
}
else {
    console.log("This is not leap year");
}


/*Challenge 6 in Javascript
What is truthy & falsy Values ?
 If value of variable is NaN,null,undefined,0,""(empty String)
*/
console.log("Example of Falsy Value in Javascript");

if (a = 4) {
    console.log("You lost the Match");
}
else {
    console.log("You won the Match");
}


/*Interview Question 4 
What is Ternary Operator ?
The only Conditional Operator which takes three operands is ternary operands
*/
console.log("The Example of Conditional Operator in Javascript");
var age = 17;
console.log((age > 18) ? "You are able to Vote" : "You can't Vote");
var marriage = 25;

console.log((marriage > 24) ? "You can marry to girl who is 21 years old" : "You are not allow to marry");

/*Switch Statement in Javascript
Evalueates an Expression , matching the expression's the value to a 
case cluase, and executes stetments associated 
*/

var area = "square";
var pi = 3.14, r = 4, l = 3, b = 2;
if (area == "circle") {
    console.log("Area of circle : " + pi * r ** 2);
}
else if (area == "rectangle") {
    console.log("Area of Rectangle : " + l * b);
}
else if (area == "square") {
    console.log("Area of Rectangle : " + l * l);
}
else if (area == "triangle") {
    console.log("Area of triangle is " + 0.5 * l * b);
}
else {
    console.log("Invalid Entry");
}
console.log("Same Problem using switch case");
switch (area) {
    case 'square':
        console.log("The area of sqaure : ", l * l);
        break;
    case 'triangle':
        console.log("The area of sqaure : ", (0.5 * l * b));
        break;
    case 'circle':
        console.log("The area of sqaure : ", (pi * r ** 2));
        break;
    default:
        console.log("Invalid Entry");
}

/*While Loop Statement in Javascript
The while statement creates a loop that executes a specified statement 
as long as the test condition evaluetes to true
*/
console.log("Basic Example of Loop Statement in Javascript :");
var i = 1;
while (i <= 10) {
    console.log("The number is :", i);
    i++;
}
console.log("The Table of 2 using while loop");
var j = 1;
while (j <= 10) {
    console.log("2", "*", j, "=", (2 * j));
    j++;
}


/*Do-while loop in Javascript 

*/
console.log("Do-while loop in Javascript");
var k = 1;
do {

    console.log("3", "*", k, "=", (3 * k));
    k++;
} while (k <= 10);

/*For Loop in Javascript */
console.log("For Loop in Javascript");
for (var a = 1; a <= 10; a++) {
    console.log(13, "*", a, "=", (13 * a));
}


/*Challenge7 in Javascript 
Javascript Program to print table for given number (8,9,12,15) using for loop
*/
console.log("Table of 8 using for loop : ");
for (var i = 1; i <= 10; i++) {
    console.log(8, "*", i, "=", (8 * i));
}
console.log("Table of 9 using for loop : ");
for (var i = 1; i <= 10; i++) {
    console.log(9, "*", i, "=", (9 * i));
}
console.log("Table of 12 using for loop : ");
for (var i = 1; i <= 10; i++) {
    console.log(12, "*", i, "=", (12 * i));
}
console.log("Table of 15 using for loop : ");
for (var i = 1; i <= 10; i++) {
    console.log(15, "*", i, "=", (15 * i));
}



/*Functions in Javascript 
What is Function ?
A function definition (also called a function , or function statement)
consists of the function keyword, followed by:
i) The Name of the function.
ii) A list of parameters to the function, enclosed in paranthesis and seprated by commas.
iii)The Javascript statements that define the function,enclosed in curly brackets
*/
console.log("Functions in Javascript");
var a = 15;
var b = 25;
console.log("Basic Method to call function in Javascript  :");
function sum(a, b) {
    return a + b;
}
console.log("Sum of a & b :", sum(a, b));
console.log("New Method to call function in Javascript : ");
console.log("Addition of 45 & 40 :");
function sum2() {
    var a = 45, b = 40;
    var total = a + b;
    console.log(total);
}
sum2();
console.log("2nd example of function in Javascript : ");
console.log("Substraction between 78 & 26 :");
function substraction() {
    var a = 78, b = 26;
    var sub = a - b;
    console.log(sub);
}
substraction();

/*Challenge 8  in Javascript 
What is difference between function Parameter vs function Arguments ?
Function Parameters are the names listed in the function's definition
Function Arguments are the real value passed to the function
*/
console.log("Multiplication of 4 & 6 : ");
function multiply(a, b) {
    var total = a * b;
    console.log(total);
}
multiply(4, 6);

/*
  Interview Question :
    Why function ?
    You can reuse code : define the code once , and use it many times.
    You can use code many times with different arguments ,
    to produce different results.
*/



/*
    What is Function Expression?
    It simply means create function and put it into variable
*/
console.log("Function Expression : ");
console.log("Example of Function Expression : ");
function sum3(a, b) {
    var total = a + b;
    console.log(total);
}
console.log("Addition of 45 & 90 : ");
var funExp = sum3(45, 90);
funExp;
console.log("2nd example of functionExpression :");
function sub(a, b) {
    var total = a - b;
    console.log(total);
}
var funExp2 = sub(95, 39);
funExp2;
console.log("3rd example of functionExpression with minimum code");
function division(a, b) {
    return div = a / b;
}
console.log("Division of 25 & 5 :");
var divison = division(25, 5);
console.log(divison);


/*Anonymous Function  
A function expression is similar to and has the same syntax
as a function declaration One can defined "Named" function expression (where the name of the 
of the expression might be used in the call stack for example).

*/
console.log("Anonymous Function in Javascript :");
var mod = function (a, b) {
    return modulus = a % b;
    console.log(modulus);
}
console.log("modulus of 25 & 7");
var modulus = mod(25, 7);
console.log(modulus);

/*Arrays in Javascript 

When we use var , we can stored only one value at a time.
When we feel like storing multiple values in one variable then
instead of var , we will use an array.
In Javascript, we have an Array class, and 
array are the prototype of this class.
 
*/

console.log("Arrays in Javascript : ");

/*You can store data of any data type in one array */

/*
What we will Study in Arrays ?
i)Traversal of an array
ii)Searching and filter in an array
iii)How to sort and compare an Array
iv)How to Insert,Add,Replace and Delete Elements in Array (CRUD)
v)Map() , Reduce() , Filter()

*/

console.log("Example of array : ");
var a = [15, 20, "zeesh", "malik", 30, "raje", 26.8];
console.log("basic array a : ", a);

/*
Array subsection 1 : Traversal of Array 
What Traversal do ? 
i) Navigate through array
ii) If we want to get the single data at a time and also 
if we want to change the data.
iii) If we want to check length of data
*/

console.log("2nd element of array a : ", a[2]);

/*how to get the length of array in Javascript  */

console.log("how to get the length of array : ");
console.log("length of array : ", a.length);

/* Navigation of Array in Javascript */
console.log("Navigation of Array using For loop : ");
var b = [1, "codekull", 2, "Appystack", 3, "NextTech", 4, "ElectronicIndia"];
console.log("Original array b : ", b);
for (var i = 0; i < b.length - 1; i++) {
    console.log(b[i]);
}

/*For in Loop in Javascript */
console.log("For in Loop of Javascript : ");
var c = [1, "one", 2, "two", 3, "three"];
console.log("Original array c : ", c);
console.log("Elements of Array c using for in loop : ");
for (let element in c) {
    console.log(c[element]);
}
console.log("2nd example of for in loop : ");
var d = [4, "four", 5, "five", 6, "six", 7, "seven"];
console.log("Original array d : ", d);
console.log("Elements of Array d using for in loop :");
for (let element in d) {
    console.log(d[element]);
}

/*For of loop in Javascript */
console.log("For of loop in Javascript : ");
var e = [8, "eight", 9, "nine", 10, "ten", 11, "eleven"];
console.log("Original array e : ", e);
console.log("Elements of Array e using for of loop in Javascript : ");
for (let element of e) {
    console.log(element);
}
console.log("2nd example of for of loop in Javascript : ");
var f = [1, "one", 2, "two", 3, "three"];
console.log("Original Array f : ", f);
console.log("elements of array f using for of loop : ");
for (let a of f) {
    console.log(a);
}

/*For each loop in Javascript */
var g = ["one", "two", "three", "four", "five", "six", "seven"];
console.log("Original array g : ", g);
g.forEach(function (element, index, g) {
    console.log(element + " index " + index + " Original Array g :  " + g);
})
console.log("2nd example of forEach function in Javascript : ");
var h = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];
console.log("Original array h : ", h);
h.forEach(function (element, index, h) {
    console.log(element + " " + " index is : " + index + " Original Array h : " + h);
})


/*Array Subsection Searching and Filter in an Array
Array.prototype.indexOf()
Returns the first (last) index of an element within the array equal
to an element, or -1 if none is found. It search the element from the 0the index.
*/
console.log("Array.indexOf() method in Javascript : ");
var a = ["zero", "one", "two", 1, 2, 3];
console.log("Original array a : ", a);
console.log("index of two in array a : ", a.indexOf("two"));

/*Array.prototype.lastIndexOf()
returns the last index of an element within the array equal
to an element or -1 if none is found . it search the element last to first*/
console.log("Array.lastindexOf() method in Javascript : ");
var b = ["zero", "one", "two", 1, "twenty", 3];
console.log("Original array b : ", b);
console.log("index of two in array b : ", b.lastIndexOf("two"));


/*Includes method of Array in Javascript 
It returns boolean value , because it check wheather it is present or not in array
*/
console.log("Includes method in Javascript : ");
var b = ["zero", "one", "two", 1, "twenty", 3];
console.log("Original array b : ", b);
console.log("Array b contain two : ", b.includes("two"));


/*Find Method of Array in Javascript
Array.prototype.find()
returns the found element in the array, if some elementin the 
array satisfies the testing function, or underfines if not found.
only problem is that it returns only one element
*/
console.log("find method in Array of Javascript : ");
const price = [200, 300, 350, 400, 450, 500, 550, 600];
console.log("Original Array of price : ", price);
const less = price.find((currVal) => {
    return currVal < 400;
})
console.log("price less than 400", less);
console.log("2nd example of find with less code : ");
var age = [18, 19, 20, 21, 22, 23];
const min = age.find((currval) => currval < 21);
console.log(min);
console.log("third example of find method : ");
var agelimit = [25, 35, 45, 55, 65];
const limit = agelimit.find((cur) => cur < 50);
console.log(limit);


/*Array.prototype.findIndex()
Returns the found index in the array, if an element in the 
array satisfies the testing function, or -1 if not found
*/
console.log("findIndex() method in Array of Javascript : ");
console.log(agelimit.findIndex((curre) => curre < 45));

/*Array.prototype.filter()
Returns a new array containing all elementof the calling
array for which the provided filtering function returns true .
*/
console.log("Filter() method in Array of Javascript : ");
var laptopprice = [20000, 25000, 30000, 35000, 40000, 45000];
console.log("Original array laptopprice : ", laptopprice);
const priced = laptopprice.filter((element) => {
    return element < 35000;
})
console.log(priced);
var bike = [25000, 30000, 35000, 40000, 45000, 50000, 55000];
console.log("Second example of filter() method in Javascript :");
console.log("Original bike : ", bike);
const range = bike.filter((r) => {
    return r < 50000;
})
console.log(range);

/*in filter() method if condition is not satisfied then it 
return empty array []
*/



/*Array subsection 3 : How to Sort an Array
Array.prototype.sort()
The sort() method sorts the elements of an array in place and returns the sorted array.
The default sort order is ascending, built upon coverting the elements into strings,
then comparing their sequence of UTF-16 code unit values. 
*/
console.log("sort method in Array of Javascript : ");
var month = ['jan', 'feb', 'march', 'april', 'may', 'jun'];
console.log("original array month : ", month);
console.log("Array month after using sort() : ", month.sort());

/*However, if numbers are sorted as strings,
"25" is bigger than "100",because "2" is bigger than "1".

Because of this, the sort() method will an incorrect
result when sorting number.
*/
var digit = [25, 50, 75, 100, 125, 150, 175];
console.log("Original array digit : ", digit);
console.log("Array digit after sort : ", digit.sort());


/*Array subsection 4 : Perform CRUD
Array.prototype.push()
The push() method adds one or more elements to the 
end of an array and returns the new length of array.
*/
console.log("push() in Array of Javascript : ");
var animal = ['dog', 'cat', 'cow', 'crow', 'sparrow', 'hen'];
console.log("Original animal array : ", animal);
animal.push('goat');
console.log("animal array after push() : ", animal)


/* Interview Question in Javascript 
What push() method do to array ?
 It returns the new length of array.
*/
var fam = ['zeeshan', 'malik', 'suhail', 'dilshad', 'shehzadi'];
console.log("Original array : ", fam);
const count = fam.push("rahim");
console.log("Array fam after push() : ", fam);
console.log("number of elements in fam : ", count);


/*Array.prototype.unshft()
the unshift() method adds one or more elements to the 
beginning of an array and returns the length of the array.
*/
console.log("unshift() method in Javascript : ");
var family = ['zeeshan', 'malik', 'suhail', 'dilshad', 'shehzadi'];
console.log("Original array family  : ", family);
family.unshift("rahim");
console.log("Array fam1 after unshift() : ", family);
console.log("second example of unshift() in Array of Javascript : ");
var numerical = [11, 12, 13, 14, 15];
console.log("Original array numerical : ", numerical);
numerical.unshift(9, 10);
console.log("new array numerical : ", numerical);


/*Array.prototype.pop()
The pop() method removes the last element from an array and returns
that element. this method changes the length of the array

*/
var veg = ['brucoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
console.log("Original array veg : ", veg);
veg.pop();
console.log("New array after pop() : ", veg);


/*Array.prototype.shift()
The shift() method removes the first element from an array and returns 
that removed element.This method changes the length of the array
*/
var color = ['red', 'blue', 'brown', 'black', 'orange'];
console.log("Original array plant : ", color);
color.shift();
console.log("new array after shift()", color);

/*Challenge 10 in Javascript 
1) Add Dec at the end of an array
2) What is return value of splice method ?
3) update march to March (update) ?
4) Delete June from an array ?
 
const month=['Jan', 'march' , 'April' , 'June' , 'July' ];
 
*/

var month = ['Jan', 'march', 'April', 'June', 'July'];
console.log("Challenge 10 in Javascript : ");

/*Sol 1 : Add Dec at the end of an array 
*/
console.log("Add Dec at the end of an array :");
const newmonth = month.splice(5, 0, "dec");
console.log(month);
console.log("2nd example of splice() : ");
let numer = [0, 1, 2, 3, 4, 5, 6];
console.log("original array numer : ", numer);
let newnumer = numer.splice(3, 0, 7);
console.log("new array : ", numer);

/* Sol 2 : What is return value of splice method ?
 It returns empty array
*/

/* Sol 3 : update march to March(update)
with alternative solution  */
console.log("update march to March(update) : ");
var newmonths = month.splice(1, 1, "March");
console.log(month);
console.log("Alternative solution for same problem : ");
let index = month.indexOf("dec");
if (month.indexOf("March") != -1) {
    var newmonths = month.splice(5, 1, "Dec");
    console.log(month);
}
else {
    console.log("No Match Found");
}


/* Sol 4 : Delete June from an array ?

*/
console.log("Delete June from an array ? : ");
let june = month.indexOf("June");
if (month.indexOf("June") != -1) {
    month.splice(3, 1);
    console.log(month);
}
else {
    console.log("Not Found");
}



/* Array subsection 4 : Map(),Reduce(),Filter()
Array.prototype.map()

let newArray=arr.map(callback(currentValue[,index[,array]]))
   {
    Returns element for newArray, after executing something
    }
    
    Returns a new array containing the results of calling a function 
    on every element in this array.

*/

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Original array : ", a);
var b = a.map((element, index, a) => {
    return element > 6;
})
console.log(b);

var a = [11, 12, 13, 14, 15, 16];
console.log("Original array a : ", a);
var b = a.map((element, index, a) => {
    return `${element} is at ${index} of array a: ${a}`;
})
console.log(b);

/*   *  Interview Question : *
 What is difference between Map() and forEach() ?
(i) Difference between map() and forEach() is the returning value. The forEach()
method returns undefined and map() returns a new array with the transformed elements.
Even if they do the same job.the returning value remain different.
(ii) Ability to chain other methods
The second difference between these array methods is the fact that map() is chainable.
This means that you can attach reduce(),sort(),filter() and so on after performing a 
map() method on an array
*/


/* Challenge 11 in Javascript 
1 : Find the square root of each element in an array?   
 let array=[25,36,49,64,81];

2: Multiply each element by 2 and return only those element 
 which are greater than 10 ?

*/

/* Solution 1 : ind the square root of each element in an array?   
let array=[25,36,49,64,81];
*/
console.log("Challenge 11 in Javascript : ");
console.log("Find the square root of each element in an array :");
let array = [25, 36, 49, 64, 81];
console.log("Original array : ", array)
let sqrt = array.map((element) => {
    return Math.sqrt(element);
})
console.log("Square root of above numbers : ", sqrt);

console.log("Multiply each element by 2 and return only those element which are greater than 10 :");
let arr2 = [2, 4, 6, 8, 10];
console.log("Original array arr2 : ", arr2);
var array1 = arr2.map((element) => {
    return element * 2;
}).filter((element) => {
    return element > 10;
});
console.log(array1);



/* reduce() method of Javascript in Array 
flatten an array means to convert the 3d or 2d array into a 
single dimensional array
reduce() method executes a reducer function (that you provide)
on each element of the array, resulting in single output value
*/
console.log("reduce() method of Javascript in Array  :");
console.log("flatten an array means to convert the 3d or 2d array into a  dimensional array");
var a = [5, 6, 7];
var sum = a.reduce((accumulator, elem, index, a) => {
    return accumulator += elem;
})

console.log(("sum of all element is : ", sum));
console.log("2nd example of reduce() :");
var a = [4, 5, 8, 2];
var b = a.reduce((accumulator, element, index, a) => {
    return accumulator *= element;
})
console.log("multiplication of all element in b : ", b);
console.log("Add all strings in Array : ");
var a = ["java", "javascript", "html", "css"];
console.log("Original Array a : ", a);
var b = a.reduce((acc, element, index, a) => {
    return acc += element;
})
console.log("Mixture of all strings in array a : ", b);


/* How to Flatten an Array
 Converting 2nd and 3rd array into one dimensional array
*/
const arr = [
    ["0", "1"],
    ["2", "3"],
    ["4", "5"]
];
let flat = arr.reduce((accumulator, curr) => {
    return accumulator.concat(curr);
})
console.log(flat);


/* Strings in Javascript 

 What we will learn in Strings ? 

(i) Escape character
(ii)Finding a string in a string
(iii)Searching for string in a string
(iv)Extracting String parts
(v)Replacing String Content
(vi)Extracting String character
(vii)Other useful method

*/
console.log("Strings in Javascript : ");

/*
A javascript string is zero or more characters written inside quotes.
Javascript strings are used for storing and manipulating text.
You can use it single or double quotes.
Strings can be created as primitives,
from string literals, or as objects, using the String() constructor
*/
let myname = "Zeeshan Raje";
let mychannel = "mdsz";
let ytname = new String("smdz software");
console.log(myname);
console.log(ytname);


/*How to find the length of String?

String.prototype.length
Reflects the length of the string

*/
var one = "Zeeshan Malik Raje";
console.log("Original String one : ", one);
console.log("The length of String : ", one.length);

/* 
        String Subsection  1: Escape character 
    Escape Character in Javascript
    The backslash (\) esacpe character turns special characters into 
    the string characters
*/

var one = "We are so called \"Computer Enginers\" in Pune and yet we are \"unemployed\".  ";
console.log("String one : ", one);
console.log("Alternative for above problem : ")
var one = "We are so called 'Computer Enginers' in Pune and yet we are 'unemployed'.  ";
console.log("String one : ", one);


/*
        String Subsection 2 : Finding String in a String
    String.prototype.indexOf(searchvalue [,fromindex])
    The indexof() method returns the index of (the position) of first
    occurence ofa specified text in a string

*/
var a = "My Name is Zeeshan";
console.log("Original string : ", a);
console.log("index of Zeeshan", a.indexOf("Zeeshan"));
var b = "i am mern stack developer";
console.log("Original string b : ", b);
console.log("index of e in string b : ", b.indexOf("a", 11));


/*  
    String.prototype.lastindexof(stringvalue,index);
    Returns the index within the calling String object of the 
    last occurence of searchValue, or -1 if not found.

*/

var a = "I am software engineer";
console.log("last index of r in string a : ", a.lastIndexOf("r", 12));



/*        String Subsection 3 : Searching for a String in String
    String.prototype.search(regexp);
    The search() method searches a string for a specified value and 
    returns the position of the match.
    The search() method can't take second start position argument.
*/

var a = "I am Zeeshan Malik Raje";
var b = a.search("Zeeshan");
console.log(b);


/*      String Subsection 4 : Extracting String Parts
    
    There are 3 methods for extracting a psrt of string :
    a) slice(start,end)
    b) substring(start,end)
    c) substr(start,length)
    
    The slice() Method
    slice() extracts a part of a string and returns the extracted part
    in a new string.
    The method takes 2 parameters: the start position,
    and the end position (end not included).
    The slice() method selects the elements starting at the given start
    argument, and ends at,but does not include,the given end argument.

*/
console.log("Slice Method in String : ");
var a = "Apple Banana Orange";
console.log("Original string a : ", a);
var b = a.slice(0, 9);
console.log("new string after slice() : ", b);
console.log("second example of slice() : ");
var c = "I am software developer";
console.log("Original string : ", c);
console.log("String c after slice() : ", c.slice(0, 12));
var a = "I am able understand everything in Javascript";
console.log("Original string a : ", a);
var b = a.slice(11, -2);
console.log("string a after slice() using negative index : ", b);



/*      The Substring() in Javascript
    substring() is similar to slice().
    The difference is that substring() cannot accept
    negative indexes.

*/
var str = "Apple Banana Orange";
console.log("Original String : ", str);
console.log("New String : ", str.substring(0, 8));
console.log("Second example of str() of String in Javascript : ");
var str1 = "Zeeshan Malik Raje";
console.log("Original String : ", str1);
console.log("New String : ", str1.substring(0, 8));


/*    The substr() method in Javascript
   substr() is similar to slice().
   The difference is that second parameter specifies the length
   of extracted part.
*/

var str = "Apple Banana Kiwi";
var res = str.substr(-9);
console.log("result is : ", res);


/*      String Subsection 5 : Replacing String Content
    String.prototype.replace(searchFor,replaceWith);
    The replace() method replaces a specified value
    with another value in a string.

*/
var names = " I am Zeeshan Malik Raje ";
console.log("Original string : ", names);
var res = names.replace("Malik", "M.");
console.log("new String is : ", res);
console.log("2nd example of replace() method : ");
var a = "I am learning Javascript ";
console.log("Original String a : ", a);
var b = a.replace("Javascript", "Full stack web development");
console.log("new String a after replace() : ", b);
/*
         Points to Remember in replace()
    1: The replace() method does not change the string
       it is called on. It returns a new string.
    2: By default, the replace() method replaces only
        the first match.
    3: By default the replace() method is case sensetive.
       
*/


/*      String Subsection 6 : Extracting String Character

    There are 3 methods for extracting string characters :
    a) charAt(index)
    b) charCodeAt(index)
    c) property access[]

    The charAt() method
    The charAt() method returns the character at a
    specified index(position) in a string.
*/

var a = "Hello Javascript";
console.log("Original string : ", a);
console.log("charAt 5th index : ", a.charAt(6));
/*
        The charCode() of String in Javascript
    the charCode() method returns the unicode of the
    character at specified index in string :
    The method returns a UTF-16 code

*/
var a = "Hello Javascript";
console.log("Original string : ", a);
console.log("charAt 5th index : ", a.charCodeAt(2));

/* Challenge 13 in Javascript 
    Return the unicode of the last character in a string
    let str="HELLO JAVASCRIPT"
*/
var a = "HELLO JAVASCRIPT";
var last = a.length - 1;
console.log("The last character in string str : ", a.charAt(last));
console.log("The unicode of the last character in a string : ", a.charCodeAt(last));


/*     String subsection 7: Other useful methods
    

*/


/*
       Property Access of String
   EcmaScript5 (2009) allows property access [] on strings

*/
var a = "HELLO WORLD";
console.log("Original String a : ", a);
console.log("The second character at string a : ", a[1]);

/*
       toUppercase() and toLowerCase() of String
   Using this methods we can convert a string into lowercase or UPPERCASE
*/
console.log("toUpperCase() and toLowerCase() method in Javascript : ");
var a = "hp laptop";
console.log("Original string : ", a);
console.log("string a after UPPERCASE : ", a.toUpperCase());
var b = "HP LAPTOP";
console.log("Original string : ", a);
console.log("string a after UPPERCASE : ", a.toLowerCase());

/*
       The concat() of String
   concat() joins two or more strings
*/
console.log("concat() method in Javascript : ");
var a = "Java";
var b = "HTML5 & CSS";
console.log("Original String a : ", a);
console.log("Original String b : ", b);
console.log("The concat of string a & string b : ", a.concat(" ", b));
console.log("Another method of concatenation of two strings :")
console.log(a + b);
console.log("Another method of concatenation of two strings :")
console.log(`${a} ${b}`);
console.log("Another method of concatenation of two strings :")
console.log(a + b);
console.log("Another method of concatenation of two strings :")
console.log(a.concat(b));


/*     trim() method in Javascript
   the trim() method removes whitespace from both side of a 
*/
console.log("trim() method in Javascript : ");
var a = "        Hello Javascript        ";
console.log("Original String a : ", a);
console.log("String a after trim() method : ", a.trim());

/*     split() method in Javascript
   Converting string into an Array
   A string can be converted to an Array with split() method
*/
console.log("Split() method in Javascript : ");
var a = 'a,b,c,d';
console.log("Original string a : ", a);
console.log("Array a after converting from string a : ", a.split(","));
var b = '1,2,3,4';
console.log("Original string a : ", b);
console.log("Array a after converting from string a : ", b.split(" "));


/* Date & Time in Javascript
   i) Date Method(get and set)
   ii) Time Method(get and set)

   Javascript Date objects represent a single moment in time in a
   platform-independent format.Date Objects contain a number
   that represent milliseconds since 1 January 1970 UTC.

*/
console.log("Date & time in Javascript : ");
console.log("Most Basic method to get Date in Javascript : ");
var a = new Date();
console.log(a);
console.log("Second example f basic method to get Date & Time : ");
var b = new Date();
console.log("Current Time is : ", b);

/* Secind method to get only Date : localDateString()  */
console.log("toLocaleDateString() method in Javascript :");
console.log("second method to get Time & Date :");
var a = new Date().toLocaleDateString();
console.log("Current Date is : ", a);
console.log("Second example to localeDateString() :");
var b = new Date().toLocaleDateString();
console.log(b);

/* Secind method to get only Time : localTimeString()  */
console.log("toLocaleTimeString() method in String : ");
var a = new Date().toLocaleTimeString();
console.log("Current Time is : ", a);
console.log("2nd example of localeTimeString()");
var b = new Date().toLocaleTimeString();
console.log(b);


/* Fourth method to get Time & Date in particular Manner*/
console.log("toLocaleString() method in Javascript : ");
var c = new Date().toLocaleString();
console.log(c);
console.log("second example of toLoacleString()");
var b = new Date().toLocaleString();
console.log(b);


/* to current Date & Time in String Form */
console.log("Current Date & Time in String Form : ");
var a = new Date().toString();
console.log("Current Time in String form : ");
console.log(a);


/* Last method to get Date & Time in Javascript is now() */
console.log("now() method in Javascript : ");
console.log(Date.now());


/* Method to current Month using getMonth() in Javascript */
console.log("Method to current Year using getYear() in Javascript :");
var a = new Date().getFullYear();
console.log(a);

/* Method to current Month using getMonth() in Javascript */
console.log("Method to current Day using getDay() in Javascript");
var a = new Date().getDay();
console.log(a);


//* Method to current Month using getMonth() in Javascript */
console.log("Method to current Second using getSecond() in Javascript")
var a = new Date().getSeconds();
console.log(a);

/* Method to current Month using getMonth() in Javascript */
console.log("Method to current Milisecond using getMilliseconds() in Javascript")
var a = new Date().getMilliseconds();
console.log(a);

/* Method to current Month using getMonth() in Javascript */
console.log("Method to current Month using getMonth() in Javascript")
var a = new Date().getMonth();
console.log(a);




/* Set Method in Javascript */
console.log("Set Method in Javascript : ");
var a = new Date();
a.setDate(2);
console.log("Current Time is : ", a.getDate());



/*      Math Objects in Javascript      
 In Javascript Math objcet allows, you to perform mathematical tasks on numbers.

*/
console.log("Math Objects in Javascript : ");
console.log(Math.PI);

/*      Method 1 : Math.round()
    returns the value of x rounded to its nearest integer
*/
console.log("Math.round() in Javascript : ");
var a = 456.4789;
console.log("Original number : ", a);
console.log("number after mayh.round() : ", Math.round(a));

/*
        Method 2 : Math.pow()
    returns the value of x to the power of y
*/
console.log("Math.pow() of Math Objects in Javascript : ");
console.log("Math Power of 2 & 3 : ", Math.pow(2, 3));

/*      Method 3 : Math.sqrt()
    Math.sqrt(x) returns the square root(x) of number
*/
var a = 36;
console.log(" Math.sqrt() method in Javascript : ");
console.log("Original var a: ", a);
console.log("square root of a : ", Math.sqrt(a));


/*      Method 4 : Math.abs()
    Math.abs(x) returns the absolute value of x
*/
console.log("Math.abs() method in Javascript : ");
console.log("Absolute value of -55 : ", Math.abs(-55));
console.log("Absolute value of -75 : ", Math.abs(-75));
console.log("substraction of 4 & 6 : ", Math.abs(4 - 6));


/*      Method 5 : Math.ceil()
    Math.ceil(x) returns the value of x rounded up to its nearest integer
*/
console.log("Math.ceil() method of Math Object : ");
console.log("nearest value of 45.65 is : ", Math.ceil(45.65));


/*
        Method 6 : Math.floor()
`   Math.floor(x) returns the value of x down to its nearest value
*/
console.log("Math.floor() method of Math Object : ");
console.log("nearest value of 45.65 is : ", Math.floor(45, 99));

/*
        Method 7: Math.min()
    Math.min() method returns the minimum value of its collection
*/
console.log("Math.min() method of Math Object : ");
console.log("minimum number of array a : ", Math.min(45, 2, 36, 78, -25));


/*
        Method 8: Math.max()
    Math.min() method returns the maximum value of its collection
*/
console.log("Math.max() method of Math Object : ");
console.log("maximum number of array a : ", Math.max(45, 2, 36, 78, -25));


/*      Mehod 9 : Math.random()
    Math.random() method returns the random number range from 0 to 1

*/
console.log("Math.random() of Math Object :");
console.log("Random number using Math.random : ", Math.random());


/* 
        Maethod 10 : Math.truncate()
    Math.truncate() method returns the integer value from 0 to 9;
*/
console.log("Math.truncate() of Math Object : ");
console.log("truncate value of 14.58 : ", Math.trunc(14.58));


/*     **** Important Note ****
   If number is positive Math.trunc() is similar to Math.floor()
   If number is negative Math. Math.trunc() is similar Math.ceil

*/



/* DOM (Data Object Manipulation) in Javascript
 What we will do ?
 (i) Windows vs Document
 (ii) DOM vs BOM (Data Object Manipulation   VS   Browser Object manipulation)
 (iii) DOM Navigation
 (iv) Searching and getting elements
*/


/*      Subsection 2:  DOM vs BOM  
    DOM (Data Object Manipulation)
    The DOM is the document object model,which deals with the document, the HTML
    elements themselves, eg. document and all traversal you would do in it, event etc.

    For Ex :
    document.body.style.background="red";
    
    BOM (Browser Object Manipulation)
    The BOM is the Browser Object Model, which deals with browser components aside
    from document like history, location ,navigator and screen (as well as some others that
    very by browser) OR
    In simple meaning all the window operations which comes under BOM are performed
    using BOM
*/



/*      Subsection 3 : DOM navigation
    i) document.documentElment
      // returns the element that is the root element of the document.
    ii) document.head
    iii) document.body
    iv) document.body.childNodes(include tab,enter and whiteSpace)
        // list of the direct children only
    v) document.children (without text nodes, only regular Elements)
    vi) document.childNodes.length


*/


/*      Interview Question 
    What is difference between getElementId and querrySelecor?
                GetElementById() method
    syntax:
    element=document.getElementById();

    Returns a refference to the element by its ID.
    If the element with specified Id is not not in document.
    It will null.

                querrySelector() method
    syntax:
    element=document.qurrySelector();

    Returns the first element within the document.
    that matches the specified group of selector,
    or null , if no matches are found


*/


/*
            Events in Javascript 
    What we Will Learn in Events ?
    (i) 4 ways of writing Events in Javascript
    (ii) What is Event Object ?
    (iii) MouseEvent in Javascript
    (iv) KeyboardEvent in Javascript
    (v) inputEvents in Javascript

*/

console.log("Events in Javascript : ");

/*      Events in Javascript 
    HTML Events are 'things' that happen to HTML elements
    When Javascript is used in HTML Pages, Javascript can 'react' on these events

        HTML Events
    An HTML event that can be something the browser does, or something a user does.

    Some example of HTML Events:
    
    i) An HTML web page has finished loading.
    ii) An HTML input field was changed.
    iii)An HTML button was clicked.
    iv) Often, when events happen, you may want to do something.

    Javascript lets you executes code when events  are detected

    HTML allows events handeler attributes, which Javascript code,
    to be added to HTML elements.

*/

/*
        Subsection 1 : 4 ways of  writing Events in Javascript
    i) using alert()
    ii) By calling a function (we already seen and most common way of writing)
    iii) using Inline events (HTML onclick="" property and element.onclick)
    iv) using Event listener (addEventListener and IE's attachment)


*/


/*
        Subsection 2 : What is Event Object ?
    Event Object is the parent Object of the event object.
    for example 
    MouseEvent,focusEvent,KeyboardEvent etc.

*/



/*
        Subsection 3 : MouseEvent in Javascript
    The MouseEvent Object
    Events that occur when the mouse interacts with the HTML.
    document belongs to the MouseEvent Object.


*/


/*
        Subsection 4 : keyBoardEvent in Javascript
    Events that occur when user passes a key on the keyboard.
    belongs to keyboradEvent Object.

*/






/*          Interview Question  
        Difference Between setTimeout() and setInterval() ?
    setTimeout() method gives you output only once but setInterval() method
    gives you output in iterative manner

*/


/*              OPPS in JAVASCRIPT 
    (i)What is Object Literals?
    (ii)What is objects ?

            Object Oriented Javascript
    What is Javascript Literal ?
    Object literal is simply a key : value pair data structure.
    Storing variables and functions together in one container, 
    we can refer this as  Objects.
            

            How to create an Object ?
            
    
*/
console.log("OOPS in JAVASCRIPT : ");
console.log("i) 1st way to create Object");
var one="Zeeshan";
console.log(one);
var two={
    name:"Zeeshan",
    age:29,
    education:"Comp. Engineer",
    getInfo(){
        console.log(`The name is ${two.name} and my age is ${two.age} and I am ${two.education}`);
    }
}

two.getInfo();

/*              What is Object Literal ?
    Object literal is simply a key : value pair structure.
    Storing variables and functions together in one container
    we can refer this an Objects

*/

console.log("What if we declare object inside an object : ");
let laptop={
    myname:{
        realName:"zeeshan",
        channelname:"MDSZ"
    },
    myAge:28,
    getData(){
        console.log(`My Name is ${laptop.myname.realName} and My Age is ${laptop.myAge}`)
    }
}
laptop.getData();



/*          What is "this" Keyword ?
    The definition of "this" object is that is contain the current context.
    The "this" object can have different values depending on where it is placed.

   For Ex.
   console.log(this);
   it refers to the current context and that is window global object 
*/
console.log("Output of 'this' keyword :",this);


function myNames(){
    var myName="vinod";
    console.log(this.myName);
}
myNames();


/*      Interview Question


*/
const obj={
    myAge:26,
    myName:()=>{
        console.log(this);
    }
}
console.log("Example of this keyword");
obj.myName();
let biodata={
    myName:{
        firstname:"Zeeshan",
        lastname:"Raje"
    },
    myAge:29,
    getData(){
        console.log(`My Name is ${biodata.myName.firstname} and ${this.myAge}`);
    }
}
biodata.getData();


console.log("Asynchronous in Javascript : ");

/*
            Asynchronous in Javascript
        What we will learn ?
    i) Hosting in Javascript
    ii) Scope Chain
    iii) Lexical Scoping in Javascript
    iv) Use Strict Mode
    v) This Keyword
    vi) Closures in Javascript
    vii) What is Asynchronous Javascript Programming ?
    viii) What is Event Loop ?



*/
    console.log("Hoisting in Javascript : ");
/*
            Subsection 1: Hoisting in Javascript
    we have a creation phase and creation phase.
    Hoisting in Javascript is a mechanism where variables and functions
    declarations are moved to the top of their scope the code executes.

*/
console.log("Example of Hoisting : ");
console.log(myNamez);
var myNamez;
myNamez="Zeeshan";

/*
        How it will be in output during creation phase ?
    i) var myNamez=undefined;
    ii) console.log(myNamez);
    iii) myNamez="Zeeshan";

    In ES6 (2015) hoisting is avoided by using let keyword, instead of 
    var.(the other differenceis that variables declared with let are local 
    to the surrounding block,not the entire function)
*/


/*
                Subsection 2 : Scope Chain & Lexical Chain in Javascript
            What is scope chain and Lexical Chain ?
    The scope chain is used to resolve the value of variable names in JS.
    Scope chain in JS is lexically defined, which means that we can see 
    what the scope chain will be looking at the code.
    
    At the top,we have the global scope, which is the window Object in the 
    browser.
    Lexical Scoping means Now, the innser functions can get access to their 
    parent functions variables but the vice-versa is not true. 

*/

console.log("Scope Chain & Lexical Scoping in Javascript");
let hw="Hello Guys";
function local(){
    let gl="How are You ?";
    function global(){
        let wow="I am Fine "; 
        console.log(hw+" "+gl+" "+wow);
    } 
    global();
}

local();

console.log("Second example of Scope chain & Lexical Scoping :");
let code="CodeKull Centre";
function CodeKull(){
    let procog="ProCognition Centre";
    function ProCognition(){
        let uni="Unique System Centre"
        console.log(code+" ,"+procog+" ,"+uni);
    }
   ProCognition();
}
CodeKull();


/*
            => Subsection3 : Closure in Javascript
    A closure is the combination of function bundeled together with refference
    to its surrounding state.
    
    In other words, a closure gives you
    access to an other functions scope from an inner function.

    In Javascript, closures are created every time a function is created , at 
    functions creation time.

    It same like lexical Scoping

    one more Example


*/
console.log("Closure in Javascript :");
const nas=(a)=>{
    let b="Pune";
    const nagar=()=>{
        let c="Nagar";
        console.log(a+" "+b+" "+c);
    }
    nagar();
}
nas("Nashik");

/*
        =>Synchronous  in Javascript
    
    Synchronous in Javascript means one event runs at a time , second event or 
    function runs after execution of previous event.
*/

 console.log("Synchronous in Javascript : ");
 console.log("Example of Synchronous in Javascript : ");
 const fun2=()=>{
     console.log("This is Function 2 ");
 }

 const fun1=()=>{
     console.log("This is Function 1");
     fun2();
     console.log("This is Function 1 (again) ");
 }

 fun1();


 /*
        =>Asynchronous in Javascript
    Asynchronous means all functions run at a time without ant delay , without
    descriminatio of seniority or juniority


 */
 console.log("Asynchronous in Javascript : ");
 const fun11=()=>{
    
     setTimeout(()=>{
         console.log("The First Function is Called");
     },2000);
 }

 const fun22=()=>{
    console.log("The First Function is Called (again)");
    fun11();
    console.log("The Seco nd Function is Called")
 }

fun22();

/*
            =>JSON in Javascript
    JSON stands for Javascript Object Notation.
    JSON stringify turns a Javascript object into JSON text and stores that 
    JSON text in a string.

*/
console.log("JSON in Javascript : ");
console.log("Example of JSON : ");
var myObj={
    key1:"object1",
    key2:"object2",
    key3:3
};
console.log("Original Object myObj: ",myObj);
var a=JSON.stringify(myObj);
console.log(a);
/*type of JSON object is String */
console.log("Type of JSON Object is : ",typeof(a));