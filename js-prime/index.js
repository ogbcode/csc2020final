/*console.log("Teg")
//arithmetic
var a = 12
var b = 14
var c = 12*14
console.log(c)
console.log(a*b)
console.log(a/b)
console.log(a-b)
console.log(a+b)
console.log(a%b)*/

new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve("Timeout is over"); //send out a success feedback with data using resolve
    }, 1000) //set timeout for 1000ms i.e. 1second.
    }).then((data) => {
    log(`${data}`);//This should output "Timeout is over"
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
    log(`${error}`);
    });
   //Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread.
   let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined);
   log(`The username of ${user1.firstName} is ${user1.username}`) 