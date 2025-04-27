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
        console.log("walking");
    }
}
class Salesperson extends Person  {
    constructor(name ,age ,isemployed ){
        super(name ,age ,isemployed);
        this.name =name;
        this.age =age ;
        this.isemployed =isemployed;
    }
    sales (){
        console.log("sales ");
    }
}
const salespersonInstance = new Salesperson("eliud", 28, false);
console.log(salespersonInstance.name, salespersonInstance.age, salespersonInstance.walk(), salespersonInstance.isemployed, salespersonInstance.sales());
