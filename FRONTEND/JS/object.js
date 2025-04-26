const person ={
    name:"jesse",
    walk(){},
    talk(){}
};
person.talk();
person.name =" ";
const targetMember ='name';
person [targetMember.value] = 'david';
console.log(person.name);