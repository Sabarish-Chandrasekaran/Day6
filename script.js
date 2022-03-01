// Part 1 : Find the culprits and nail them — debugging javascript loops

// 2.Find the culprit and invoke the alert
alert("I'm invoked!");//no error

// 3.Explain the below how it works
alert("I'm invoked!");
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

// 4.Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
//fname = "Guvi";adding <space> after "i" in "Guvi"
fname = "Guvi "
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"

// 5.Fix the below to alert hello Guvi geek
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
// alert( 'hello ${name}' );wrong notation used,we need to use `${name}`
alert(`hello ${name}`);

// 6.Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
// alert(a + b);including parseint to convert string into number
alert(parseInt(a) + parseInt(b));

// 7.If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
// var a = "2" > "12";change greater than to less than operation
var a = "2" < "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

// 8.How to get the success in console.
// let a = prompt("Enter a number?");including parseInt() so only number can be entered if string values given it gives success
let a = parseInt(prompt("Enter a number?"));
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

// 9.How to get the correct score in console
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
    //   console.log("I couldn't figure out");changing "i couldn't figure out" to value
      console.log(value);
}

// 10.Fix the code to welcome the employee
let login = 'Employee';
// let message = (login == 'Employee') ? :'Welcome'expression is missing after'?'
let message = (login == 'Employee') ? 'Welcome' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

// 11.Fix the code to welcome the boss
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
//  let message = "welcome boss";removing 'let'because 'message'is already declared in begining
  message = "welcome boss";
}
else
{
//  let message = "Go away";
  message = "Go away";
}
  console.log(message);

// 12.Fix the code to welcome the boss
//   let message;adding value to message
  let message = "hello"
// let lock = 2;removing value from lock
let lock; 
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

// 13.Fix the code to welcome the boss  
//   let message;giving value as  null
  let message = null;
// let lock = 2;removing value
let lock;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

// 14.Change the code to print
//You can change only 2 characters
let i = 3;
while (i) {
//   console.log( --i );changing to post decreament
  console.log( i-- );
}

// 15.Change the code to print 1 to 10 in 4 lines
fix.html
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)

// 16.Change the code to print even numbers
//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num +=1) {num += 2 instead of 1
for (let num = 2; num <= 20; num +=2) {
    console.log(num)
  }

//   17.Change the code to print all the gifts
  let gifts = ["teddy bear", "drone", "doll"];
  for (let i = 0; i < 3; i++) {
    // console.log(Wrapped ${'gifts[i]'} and added a bow!');changed to template literal and removed ' 'from gift[i]
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  } 
  
//   18.Fix the code to disarm the bomb.  
  let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

// 19.Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'hello';
}
console.log(msg);//lemeout is not a string,to get added we need to convert into integer by parseInt

// 20.Whats the msg printed and why? Guess you answer before running it.
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);//lemeout is not a string,to get added we need to convert into integer by parseInt



// Part 2 : Find the culprits and nail them — debugging javascript loops

// 1.Write a code to print the numbers in the array
// Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = ""; 
// for (var i = 1; i < 11; i--)  i=0 because arry start with index 0 and post increament i++
for (var i = 0; i < 11; i++)
{
 new_string += numsArr[i] 
}
console.log(new_string);

// 2.Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
// for (var i = 1; i < 11; i++)    changed i=0 because index value start from 0,i<10
for (var i = 0; i < 10; i++)
{
//  new_string += numsArr[i] + ,     added<,> inside of <"">
 new_string += numsArr[i] + ","
}
// console.log(new_string); added numsArr[10]
console.log(new_string+numsArr[10])

// 3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = ""; 
// for (var i = 11; i > 0; i-- )   i=10 instead of 11 because array starts from 0
for (var i = 11; i > 0; i-- ) {
 new_string += numsArr[i] + " " 
}
// console.log(new_string); addednumArr[0]
console.log(new_string+numsArr[0]);

// 4.Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
//  numsArr[i] = odd  changed odd to "even"
 numsArr[i] = "even"
 }
}
console.log(numsArr);

// 5.Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )  added to <!>to convert value into odd no. 
 if(numsArr[i] %2 !== 0 )
 {
//  numsArr[i] = even       added even into ""
 numsArr[i] = "even"
 }
}
console.log(numsArr);

// 6.Write a code to add all the numbers in the array
// Output: 66
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=10; i++) {
//  var sum;  declaring sum before for loop
 sum += numsArr[i]
}
console.log(sum);

// 7.Write a code to add the even numbers only
// Output: 30
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0);  removed ; and added {}
 if(numsArr[i]%2==0) {
 sum += numsArr[i]
}}
console.log(sum);

// 8.Write a code to add the even numbers and subract the odd numbers
// Output: 94
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2!=0); removed<;,!>from the line and added '='
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i]
 }
 else 
 {
 sum -= numsArr[i]
 }
}
console.log(sum);

// 9.Write a code to print inner arrays
// Output:
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]
// var numsArr = [[1, 2, 3, 4, 5]
                // [ 6, 7, 8, 9, 10, 11]]; added <,> between two array element
var numsArr = [[1, 2, 3, 4, 5],
                [ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++); removed ;
for (var i = 0; i < numsArr.length; i++)
{
 console.log( numsArr[i]);
}

// 10.Write a code to print elements in the inner arrays
// Output: 1234567891011
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
}
 for(var j = 0 ; j < inner_array.length;i++ ) {
     str_all +=inner_array[j]
 }

console.log(str_all);

// 11.Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ ) {
      if(numsArr[i] %2 == 0 )
      {
         numsArr[i] = "even"
       }
}}

console.log(numsArr);

// 12.Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length; j < 0 ;j-- )
     str_all +=inner_array[j]
}
console.log(str_all);

// 13.Write a code to add elements in the inner arrays based on odd or even values
Output:
36
30
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i]%2!=0)
 {
 sum_odd += numsArr[i]
 }
 else
 {
 sum_even += numsArr[i]
 }
}
}
console.log(sum_odd);
console.log(sum_even);



// Part 3: Find the culprits and nail them — debugging javascript

// 1.Fix the code to get the largest of three.
aa = (f,s,t) => {
//  let f,s,t;           this line not required
//  console.log(f,s,t);  this line not required
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);

// 2.Fix the code to Sum of the digits present in the number
let n = '123';//converted no. to string

function add(n)
{
    var num = n.split("");//added split()
let sum = 0;
for(var i=0;i<num.length;i++){
 sum+=parseInt(num[i])
 }
 return sum;
}
console.log(add(n));//output=>6

// 3.Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 
})();

// 4.Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano();

// 5.Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 //for(let i=2;i<=num/2;i++){//condition in for loop changed to num/2 from num
 for(let i=2;i<=num/2;i++){
 if(num%i===0)
 {
 return false;
 //return true;//if num is divisble by other numbers it is non-prime, so changed to false
 }
 }
 //return num==1;// 1 is non-prime
 return num>1;
});
console.log(myPrime);

// 6.Fix the code to sum the number in that array
const num = [10,20,30,40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const sum = num.reduce(sum)
console.log(sum);

// 7.Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 arr = {};
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();

// 8.Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[0][i].toUpperCase() + arr[i].slice(1));
 }
})();

// 9.print all odd numbers in an array using IIFE function

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 //if (arr[i] % 2 === 0)// odd number should not be divisible by 2, hence to fix it added not operator 
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})();// output => 1 3 5 7 79 7 9

// 10.Fix the code to reverse.
(function(str){
//  str1 = str.split(" ").reverse().join("");   removed <space> in .split()
str1 = str.split("").reverse().join("");
 console.log(str1); 
})("abcd")//output=>dcba

// 11.Fix the code to remove duplicates.
var res = function(arr){
    newArr = [];
 for(var i=0; i < arr.length; i++){
    // newArr = [];array should be declared before loop
 if(newArr.indexOf(arr[i]) == -1) {
 newArr.push(arr[i]);
 } }
 console.log(newArr)
}
// res(["guvi","geek","guvi","duplicate","geeK"])changed geeK to geek
res(["guvi","geek","guvi","duplicate","geek"])//=>['guvi', 'geek', 'duplicate']

// 12.Fix the code to give the below output:
// Expected Output:
// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]
var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]
while(array.length!=0)
{
 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)
}

// 13.Fix the code to give the below output:
// Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
//  return a;});  ,0 is missing as value of c
 return a;},0);
console.log(s); //output => 6

// 14.Fix the code to give the below output:
// Swap the odd and even digits
aa = data=>{
 var a=data;
for(i=0;i<a.length-1;i++){
 var l='';
 var s=a[i+1]
 var b=a[i]
 l+=s
 l+=b
 i=i+1
}
if((a.length%2)!=0){
 l+=a[a.length-1]
 
}

console.log(l);
}
aa("1234");
