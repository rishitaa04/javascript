console.log("Rishita Sinha");  //console.log is a statement used to print anything on to the screen

let x=1;
console.log(x);
var name = "Rishita Sinha";
console.log(name);
const number= 9142080266
console.log(number);


// let const and var are used to declare anything 
//difference between them is 

/* 
The scope of a var variable is functional or global scope.	The scope of a let variable is block scope.	The scope of a const variable is block scope.
It can be updated and re-declared in the same scope.	It can be updated but cannot be re-declared in the same scope.	It can neither be updated or re-declared in any scope.
It can be declared without initialization.	It can be declared without initialization.	It cannot be declared without initialization.
It can be accessed without initialization as its default value is “undefined”.	It cannot be accessed without initialization otherwise it will give ‘referenceError’.	It cannot be accessed without initialization, as it cannot be declared without initialization.
These variables are hoisted.These variables are hoisted but stay in the temporal dead zone untill the initialization.	These variables are hoisted but stays in the temporal dead zone until the initialization.
*/


let a = 1;
a =2;
console.log(a);
b=4;
console.log(b);
const myname = "Rishi";
// myname = Rishu; this will throw error as myname is declared as const which means it can't be changed

carName = "Volvo";
// let carName;    declaration initialization se phle krni hoti hai
console.log(carName);

const userId = 1234;
const username = "Rishu";
const dept = "Data Scientist";
const salary = 120000;
console.table([userId,username,dept,salary]); // baar baar likhne ki mehnat kon kre isliye .table inn sbi data ko table k format me display kr deta hai


console.log("this person's name is "+username + " and department is "+ dept);
console.log(`this person's name is ${username} and department is ${dept}`); //zada mehnat na krne k liye apn aisa likhte hn  taaki baar baar + ka sign use naa krna pde


// IF AND ELSE statement 

let firstname = "Rishita";
let age = 21;
let isMarried = false;

if(isMarried == true){
    console.log(firstname + " is married");
}else{
    console.log(firstname + " is not married");
}

// LOOPS

let answer = 0;
answer = answer +1+2+ 3+4+5+6+7+8+9+10;
console.log(answer);
// pr agr 100 tkk add krna ho chlo 100 kr loge agr 1000 tkk krna ho fir kya kroge ?
// isliye hum use krte hn Loops ka
let ans = 0;
for(let i=0;i<=1000;i++){
    ans+=i;
}
console.log(ans);


// ARRAYS AND OBJECTS


//ab agar 100 ya 1000 logo ki aise entry krni huyi toh apn aise to sara jeevan nikl jaega let's use some shortcut
let person1 = "Rishita";
let age1 = 21;
let gender1 = "female";

let person2 = "Rishu";
let age2 = 26;
let gender2 = "male";


// ARRAY
const personname = ["Rishita","Rishu","Raman","Radhmi","Saksham"];
console.log(personname[0]);
console.log(personname[1]);
console.log(personname[2]);

const ages = [21,22,23,24,25];
for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}

// OBJECTS

const user1 = {
    FirstName : "Rishita",
    gender :  "female"   //syntax of users

}
console.log(user1["gender"]);

//ab agr bohot saare logo ki entry krvani huyi toh hum objects me kaise krvaenge vo dekhte hn


const allusers = [{
        firstname : "Rishu",
        gender : "female",
        age : 26,
    },
    {
        firstname : "nishu",
        age : 27,
        gender : "Female",
    },
    {
        firstname : "jiggi",
        gender : "female",
        // metadata : {
        //     age : 18,
        //     address : "Bihar",
        // }
    },
    {
        firstname : "shivam",
        age : 17,
        gender : "male",
        lastname : "Rukhiyar",
    }] 

console.table(allusers);
for(let i=0;i<allusers.length;i++){
    if(allusers[i]["gender"] == "male"){
        console.log(allusers[i]["firstname"]);
    }
}

// for(let i=0;i<allusers.length;i++){
//     if(allusers[i][metadata]["age"] == 18){
//         console.log(allusers[i]["firstname"]);
//     }
// }