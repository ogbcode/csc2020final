/** Here we illustrate useEffect for fetching remote data */
import React, {useState, useEffect} from 'react';
import ShowUser from './ShowUser';
const HelloWorld6 = (props) => {
//const [state, setState] = useState(initialState);
const [user, setUser] = useState(null);
const fetchData = async () =>{
try {
let response = await
fetch(`https://jsonplaceholder.typicode.com/users/1`);
let data = await response.json()
setUser(data);
} catch (error) {
setUser(null);
}
};
useEffect(() => {
fetchData();
}, []); //the second parameter [] will ensure that this useEffect runs onlyonce.

//conditionally show user if not null
const showUser = () => {
    if (user!==null){
    return <ShowUser user={user} />
    }
    else {
    return 'No user to display';
    }
    }
    return (
    <div>
    <p>Hello {props.name}. Greetings from HelloWorld6.</p>
    <p>
    {showUser()}
    </p>
    </div>
    )
    }
    HelloWorld6.defaultProps = {
    name: "Mary"
    }
    export default HelloWorld6;