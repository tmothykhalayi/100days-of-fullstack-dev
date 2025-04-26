const person ={
    name:"jei",
    age:20,
    walk(){
        console.log(this);
    },
};
person.walk();
console.log(person.walk);
//binding this to a function
const walk = person.walk.bind(person);
walk();