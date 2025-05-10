// const square =(w)=>{
//     return w*w
// };
// console.log(square(9));
const jobs = [
    { id: 1, tittle: "developer", age: 25 },
    { id: 2, tittle: "sales and marketing", age: 30 },
    { id: 3, tittle: "graphic designer", age: 28 },
    { id: 4, tittle: "sales person", age: 26 },
];
jobs.filter((jobs)=>jobs.age<25).map((jobs)=>{
    console.log(jobs.tittle);
    console.log(jobs.age);
    console.log(jobs.id);
});
//arrow function with this keyword
const person = {
    talk(){
        setTimeout(() => {
            console.log(this);
        },1000)
        }
    };
person.talk();

//rendering a list of arrays usin .map method
const numbers =[1 , 2 ,3 , 4 ,5 ,6 ,7 ,8 ,9 ,10];
const double = numbers.map((number) => number * 2);
console.log(double);
