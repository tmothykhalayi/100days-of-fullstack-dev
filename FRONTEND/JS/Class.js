const person ={
    name:"timothy",
    age:20 ,
    isemployed:true ,
    walk (){
        console.log ("walking");
    } ,

};
class Person {
    constructor(name,age ,isemployed){
        this.name =name;
        this.age =age ;
        this.isemployed =isemployed;
    }
    walk (){
        console.log("wwalking");
    }
}
const Person =new Person (timothy ,20 ,true);
console.log(Person.name ,Person.age ,Person.isemployed);