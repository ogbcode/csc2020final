/** Here we illustrate useEffect for fetching remote data at mount time and event
driven occasion */
import React, {useState, useEffect} from 'react';
import ShowUser from './ShowUser';
import { User } from './type-defs';
type Props = {
name?: string;
}
const HelloWorld6: React.FC<Props> = (props) => {
//const [state, setState] = useState(initialState);
const [user, setUser] = useState<User | null>(null);
const fetchData = async () =>{
try {
let response = await fetch(`https://jsonplaceholder.typicode.com/users/2`);
let data = await response.json()
setUser(data);
} catch (error) {
setUser(null);
}
};
useEffect(() => {
fetchData();
}, []); //the second parameter [] will ensure that this useEffect runs only once.
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
    name: "Ife"
    }
    export default HelloWorld6;