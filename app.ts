//Task 6 "Stipping Name"

let personName = `\n\t Sir Abdul Moiz \t\n`;
console.log(personName);
let stripped : string = personName.trim();
console.log(stripped);


//Task 7.8  "Number Eight"
console.log(5+3);  // Addition 
console.log(11-3); //Subtraction
console.log(4*2);  //Multiplication
console.log(16/2); //Division


//Task 9 "Favorite Number"
let favoriteNumber : number = 56;
console.log(`My favorite Number is ${favoriteNumber}`);


//Task 10 "Addinig Comment"
// My Name is ESHAN 
// DATE : 3/6/2024
//this program will be simple program 
let sirName : string ="Sir Ameen Alam";
console.log(`Hello ${sirName}, I am Student of Governor Sindh IT Initiative Program `);

//Task 11 "NAMES"
let members : string[] = [`HAMZA`, `ADIL`,`AYAN`, `SHAYAN`];
for(let i=0; i<members.length; i++){
    console.log(members[i])
}


//Task 12 "Greetings"
let Names : string[] =[`HAMZA`, `ADIL`,`AYAN`, `SHAYAN`];
let message : string = `Hey friends Assalamualaikum :`;
for(let i=0; i<Names.length; i++){
    console.log(message + Names[i])
}


//Task 13 "Your Own Array"
let transportation : string[] =[`Civis`, `Cultus`, `Hilex`, `Fortuner`];
for(let i=0; i<transportation.length; i++){
    console.log(`I would like to cars a ` + transportation[i])
}