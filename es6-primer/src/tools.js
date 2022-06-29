//var logger = function(output){
var logger = (output) => {
    console.log(output)

    }
    export var appName = "ES6 Review";
export var dummyFunction = function(){
return "I am a dummy function";
}
    export default logger;

var functionwithnoparameters = () =>
{
    console.log("Fuck you");
}

var functionwithtwoparameters = (par1, par2) =>
{
    console.log(`Fuck you "${par1}" and "${par2}"`);
}
//functions don't change but inputs and outputs can

export const dummyFunction1 = () =>
{
    let feed = "shut up";
    feed = "Get out";
    return feed;
}

export const multiplier = (a, b, c) =>
{
    
    return a*b*c
}