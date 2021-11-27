//Creating person object
var person =  {
    firstName : "Ayush",
    lastNam : "Gautam",
    officialAddress : "Uttar Pradesh"
}
console.log(person);//printing whole object
console.table(person);//printing whole object in table form 
//Updating person object for new value
person.firstName = "Shivam";
person.lastNam = "Singh";
person.officialAddress = "Patna";
//printing updated value
console.log(person);
console.table(person);
//Again updating person object
person.firstName = "Alok";
person.lastNam = "Raj";
person.officialAddress = "Mumbai";
//printing new values
console.log(person);
console.table(person);


// Person Object creation for three diffrent person 
var person1 ={
    firstName: "Ayush" ,
    lastName: "Gautam",
    officialAddress:"Ayodhya",
}
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.officialAddress);

var person2 ={
    firstName: "Shivam" ,
    lastName: "Singh",
    officialAddress:"Patna"
}
console.log(person2);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.officialAddress);

var person3 ={
    firstName: "Alok" ,
    lastName: "Raj",
    officialAddress:"Mumbai",
}
console.log(person3);
console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3.officialAddress);