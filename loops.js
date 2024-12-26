//loops
//for 
for(let i=1;i<=5;i++){
    console.log("Devu");
} 
//while
let i=2;
while(i<=10){
    console.log("Devika");
    i++;
}
//do-while

let a=20;
do{
    console.log(a);
    a++;
}while(a<=10);

let b=1;
do{
    console.log(b);
    b++;
}while(b<=10);
//for-of used for strings and arrays
str="hello";
for(let ab of str){
    console.log(ab);
}

//for-in used for objects
let student={
    name:"Devu",
    cgpa:8.6,
    ispass:true,
};

for(let i in student){
    console.log(i,student[i])
}

//print all even numbers from 0 to 100
for(let j=0;j<=100;j++){
    if(j%2==0){
        console.log(j);
    }
}

//strings
let s1="Devika";
console.log(s1.length);
console.log(s1[0],s1[1],s1[5]);

//template literals in js
let s2=`this is a template`;
console.log(s2);
console.log(typeof(s2));

let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("Cost of ",obj.item," is ",obj.price,"rupees");
 // `string text ${expression} string text`----->string interpolation

 /*
 Escape characters
 \n- newline
 \t-tabspace
*/

//string methods

let s3="  hello world!  ";
console.log(s3.toUpperCase());
console.log(s3.toLowerCase());
console.log(s3.trim());//removes white space at starting snd ending
/*
str.slice(start,end?)
str.concat(str1)
str.replace(searchval,newval)
str.charAt(idx)
*/

//prob1
let n1="Devika";
let n2="@"+n1+n1.length;
console.log(n2);

