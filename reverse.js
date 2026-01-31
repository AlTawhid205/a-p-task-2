const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let rev_color=[];

for(let i= colors.length -1; i>=0; i--){
  rev_color.push(colors[i]);
}
console.log(rev_color);



const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumber=[];
for(let i=0; i<numbers.length; i++){
  if(numbers[i]%2===0){
    evenNumber.push(numbers[i])
  }
}
console.log(evenNumber);



let ans= "";
var num = ['Tom', 'Tim', 'Tin', 'Tik'];
for(let num1 of num){
  // console.log(num1);
  ans=ans+num1;
}
console.log(`'${ans}'`);



const statement = 'I am a hard working person';
const words =statement.split(" ");
// console.log(words);
let ans1="";
for(let i=words.length -1; i>=0; i--){
  const mainAns= words[i];
  // console.log(mainAns);
  ans1 = ans1+" " + mainAns;
}
console.log(`'${ans1.trim()}'`); // trim for extra white space cut





let array =[1,2,3];
let array1=[];
for(let i=0; array.length>i; i++){
  if(i==0){
    array1.push(99);
  }
  else{
    array1.push(array[i]);
  }
}
console.log(array);
console.log(array1);




let hlw =[10,20,30,40];

let array2 = [...array];
array2[0]= 99;
console.log(array2);
