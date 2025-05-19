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