/*import logger from './tools.js'
logger("Welcome! We are now having fun with modularity");

import logger, {appName, dummyFunction, multiplier} from './tools.js';
import fetch from 'node-fetch'
logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);

new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve("Timeout is over"); //send out a success feedback with data using resolve
    }, 1000) //set timeout for 1000ms i.e. 1second.
    }).then((data) => {
    logger(`${data}`);//This should output "Timeout is over"
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
    logger(`${error}`);
    });
   //Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread.
   logger(multiplier(3, 3, 3))
//import dummyFunction1  from './tools.js';
//dummyFunction1();

//let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1
//fetch(url)
 //.//then(response => response.json()) //convert data returned to json
 //.//then(data => logger(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data
 //.catch(error => logger(`Error: ${error}`));*/
 //import logger, {appName, dummyFunction, multiplier} from './tools.js';
 import fetch from 'node-fetch'
 logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);
import logger from "./tools"


 const addressees = ["Martha Hull", "Meta Cross", "Samantha Red"]
 const email = ["martha@gmail.com", "meta@gmail.com", "red1@gmail.com"]
 const mailbody = "You're dead? Yes"

 const mailmerger = (addressee, mailbody) => {
     addressee.map((addressees) => {
         const message = `Dear "${addressees}, ${mailbody}"`
         logger(message)

     }
     )
 }

 mailmerger(addressees, mailbody)
 //mailmerger.map((addressees, email))