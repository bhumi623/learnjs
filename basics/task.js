//1

console.log(1);
let name = "Bhumi";
let whatDoYouWannaBecomeInYourLife = "Software Engineer";
let gender = "Female";
let LinkedinProfile = "www.linkedin.com/in/bhumi-agarwal-7a2ba6307";

console.log(name);
console.log(whatDoYouWannaBecomeInYourLife);
console.log(gender);
console.log(LinkedinProfile);

//2

console.log(2);
let firstFavNum = 7;
let secondFavNum = 13;
console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);

//3

console.log(3);
let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 30;
console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumb + undefined);

//4

console.log(4);
let firstFavNumb = 13;
let secondFavNumb = 7;
console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNumb);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);
console.log(firstFavNumb === secondFavNumb);
console.log(firstFavNumb == secondFavNumb);
console.log(firstFavNumb !== secondFavNumb);
console.log(firstFavNumb != secondFavNumb);

//5
console.log(5);
let favActorLastName = "Agarwal";
let fullname = `Bhumi ${favActorLastName}`;
let uppercase = fullname.toUpperCase();
let message = `my fav actress is ${uppercase} and she is very smart`;
message += ` her best show is Silicon Valley`;
console.log(message);

//6
console.log(6);
let password = "rdsfv";
if(password.length === 8){
    console.log("Welcome");
}
else if(password.length <=8){
    console.log("Password is too short");
}
else if(password.length >=8){
    console.log("Too long Password");
    console.log("Password should be 8 characters");
}
else{
    console.log("Please provide a password.");
}

//7
console.log(7);
let fruit = "banana";
switch(fruit){
    case "banana":
        console.log("Banana is good");
        break;
    case "orange":
        console.log("I am not a fan of orange");
        break;
    case "apple":
        console.log("How you like them apples?");
        break;
    default:
        console.log("I have never heard of that fruit");

}

//8
console.log(8);
const car = {
    type: "sedan",
    model : "toyota",
    color: "red",
}
console.log(typeof car);
car.type = "Toyoto";
car.wheels = 4;
console.log(car);

//9
console.log(9);
function myFunction(a,b){
    return a*b;
}
console.log(myFunction(7, 13))

//10
console.log(10);
function showCallFunc(fn){
    const vari = 10;
    fn(vari);
}
function fn(vari){
    console.log(vari);
}
showCallFunc(fn);

//11
console.log(11);
console.log(`The quick
brown fox
jumps over
the lazy dog`);
let firstName = "Bhumi";
let lastName = "Agarwal";
console.log(`My name is ${firstName} ${lastName}`);

//12
console.log(12);
//refactor using es6 arrow functions
// setTimeout(function () {
//     console.log("Hello");
//     setTimeout(function () {
//         console.log("Hey");
//         setTimeout(function () {
//             console.log("Namaste");
//             setTimeout(function () {
//                 console.log("Hi");
//                 setTimeout(function () {
//                     console.log("Bonjour");
//                 }, 2000);    
//             }, 2000);    
//         }, 2000);
//     }, 2000);
// }, 2000);

setTimeout( () => {
    console.log("Hello");
    setTimeout( () => {
        console.log("Hey");
        setTimeout( () => {
            console.log("Namaste");
            setTimeout( () => {
                console.log("Hi");
                setTimeout( () => {
                    console.log("Bonjour");
                }, 2000);    
            }, 2000);    
        }, 2000);
    }, 2000);
}, 2000);

