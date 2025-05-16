//This gives an alert {to comment ctrl + /}
// alert("Hiiii");
//This displays in the console 
console.log("Is it visible?");
//This clears the console
console.clear();
// Here is example of operations, classses, and objects
console.log("Is it visible?");
console.log(2+2*2-6/(1+1))
console.log(2**3);
console.log({name: "Bhumi"})
console.warn("This is a warning");
console.table({name: "Bhumi", age: 18});


//variables
//(reserved keyword) (variable name) (type of value)
let name;
console.log(name); //undefined
name = "Bhumi";
console.log(name); //Bhumi
let age = 18;
console.log(age); //18
name = "Bhumi Agarwal";
console.log(name); //Bhumi Agarwal
const pi = 3.14; //constant
console.log(pi); //3.14
// const pi = 3.14159; //error: Identifier 'pi' has already been declared
console.log(typeof name); //string
console.log(typeof pi); 
age ++;//number
console.log(age);

//booleans
let isTrue = false;
console.log(isTrue);
let isFalse = NaN;
console.log(10 + undefined); //NaN

//falsy
//-> false
//-> null
//-> undefined
//-> 0
//-> -0
//-> NaN
//-> "", '', ``, (empty quotes)
console.log(10>10);
console.log(10 === 10); //true
console.log(10 === '10'); //false
console.log(10 !== '10'); //true
console.log(10 == '10'); //true

//strings
let firstname = "Bhumi";
let lastname = "Agarwal";
let fullname = firstname + " " + lastname;
console.log(fullname); //Bhumi Agarwal
let full2name = firstname + lastname;
console.log(full2name); //BhumiAgarwal
let full3name = firstname.concat(lastname);
console.log(full3name); //BhumiAgarwal

firstname += " Agarwal";
console.log(firstname); //Bhumi Agarwal
firstname = "Bhumi";

console.log(firstname.length); //5
console.log(firstname[0]); //B

console.log(firstname.toLowerCase());
console.log(firstname.toUpperCase());
console.log(firstname.slice(0, 2)); //Bh
console.log(firstname.split('').join(''));
console.log(firstname.split('').join(" "));
console.log(firstname.includes("B"));

let spacedname = "   Bhumi   ";
console.log(spacedname.trim()); //Bhumi

let desc = `i am 
   sll`;
   console.log(desc);

let full5name = `${firstname} ${lastname} more`;
console.log(full5name); //Bhumi Agarwal