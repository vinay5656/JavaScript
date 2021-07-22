// let fruits = ['Banana', 'Apple'];
// // fruits.push('Mango');
// let fruitVarieties = fruits.push('Mango');
// console.log(fruits);
// console.log(fruitVarieties);
// const names = ['vinay', 'ravi', 'bhavesh', 'sheray', 'loki'];
// const totalFriend = names.unshift('perteek');
// console.log(totalFriend);
// console.log(names);

//Object concept


// const person = {
//     firstName : "Vinay Singh",
//     lastName : "Chouhan",
//     job :"Computer Science Student",
//     age : 2021 - 2001 ,
//     friends : ['Ravi','Loki','Bhavesh','perteek'],
//     college : "Thapar University"
// };
// //console.log(person);
// console.log(person.firstName+person.lastName+"is an"+person.age+"old "+person.job+"in"+person.college+"and He has"+person.friends[0]+person.friends[1]+person.friends[2]+"and"+person.friends[3]+"friends.");
// console.log(person.firstName,person.lastName,"is an",person.age,"old ",person.job,"in",person.college,"and He has",person.friends[0],person.friends[1],person.friends[2],"and",person.friends[3],"friends.");
// console.log(person['firstName'],person['lastName']);
// console.log(person['job']);

// const query = 'job';
// person[query] ? console.log(person[query]) : console.log(person.firstName,"do not have that property");
// person.phoneNumber = 6377469867;
// person.location = "bardod";

// console.log(person);


//object method


const candidate = {
    fullName:"Vinay singh chauhan",
    fathersName : "Mukesh Singh Chouhan",
    phoneNumber : 63774123123,
    emailId : "vinaysinghchauhan31231@gamil.com",
    birthYear : 1992,
    // calcAge :function(birthYear){
    //     return 2021 - birthYear;
    // }
    calcAge : function(){
        this.age = 2021-this.birthYear;
         //return 2021-this.birthYear;
         return this.age;
    },
    
    getSummery : function(){
        return `${this.fullName} is a student`;
    }

}
console.log(candidate);
// console.log(candidate.calcAge())
console.log(candidate.calcAge(1998));
console.log(candidate.getSummery());