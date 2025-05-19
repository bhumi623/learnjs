// convert string to number
let money = "50";
money =parseInt(money);
console.log(typeof money);

let money2 = "50";
money2 = +money2;
console.log(typeof money2);

let money3 = "50";
money3 = Number(money3);
console.log(typeof money3);

// convert number to string
let money4 = 50;
money4 = money4.toString();
console.log(typeof money4);

let money5 = 50;
money5 = String(money5);
console.log(typeof money5);

//convert string to float
let money6 = "50.5";
money6 = parseFloat(money6);
console.log(typeof money6);

//if
let a = 12;
let b = 12;

if(a>b){
    console.log("a is greater than b");
}
else if(a<b){
    console.log("a is less than b");
}
else{
    console.log("a is equal to b")
}

//switch
let x = 10;
let text;
switch(x){
    case 0:
        text = "off";
        break;
    case 1:
        text = "on";
        break;
    default:
        text = "no value found";
}
console.log(text);

//for
let i = 0;
for(i = 0; i<5; i++){
    console.log("Hello world",i);
}