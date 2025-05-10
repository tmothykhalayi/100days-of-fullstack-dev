//var-function scope
//let-block scope
//const-block scope but once assigned it cannot be redeclared


function sayhello() {
    for (let  i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);
}
sayhello();