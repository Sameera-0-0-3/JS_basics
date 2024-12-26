console.log("DEVIKA");
console.log("I LOVE JAVASCRIPT");
age=21;
console.log(age);
a=null;
b=undefined;
console.log(a+"\n"+b);
c="pow" //dynamically typed
console.log(c)
let name="Devu";
//let name="Any" cannot redeclare butin var can be redeclared
name="Dev";
console.log(name)
console.log(name)
{
    let x=20;
    console.log(x)
}
//console.log(x)
const we=24;
//we=34; cannot redeclare or change value 
console.log(we);
// const and let block scope variable
// primitive data type- number,string,boolean,undefinedd,null,symbol,bigint
console.log(typeof name)
//non primitive objects-array,function
const student={
    fullname:"DEVIKA G",
    age:21,
    cgpa:8.44,
    ispass:true,
};

console.log(student);
console.log(student["fullname"]);
console.log(student.age);
student["age"]=student["age"]+1;
console.log(student.age);