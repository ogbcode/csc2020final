import React, {useState, useEffect} from 'react';
type Props = {
name?: string;
other?: string;
}
const HelloWorld5: React.FC<Props> = (props) => {
//const [state, setState] = useState(initialState);
const [name, setName] = useState(props.name);
const [count, setCount] = useState(0);
const changeNameToGreet = (event: any) => {
setName(event.target.value);
}
/* Below shows that you can have more than one useEffect in the same component
The two effects document.title and window.alert could have been put under one useEffect but
I want to illustrate that in the case of window.alert, we want it to be fired only on the condition that
count value changes. Otherwise, it will show whenever the component is update at all including when writing
name to greet.
*/
useEffect(() => {
document.title = `Hello ${name} with click count ${count}`;
});
useEffect(() => {
window.alert(`Hello ${name}, be aware that you have clicked ${count} time(s).`);
//if you remove the line below, you will get a warning because only count and not name is set as condition
// eslint-disable-next-line
}, [count]);

return (
    <div>
    <p>Hello {name}. Greetings from from React.</p>
    <p>
    <input type="text" placeholder="Write a name here..."
    name="name_to_greet" onInput={changeNameToGreet}/>
    </p>
    <p>You clicked {count} times</p>
    <p>
    <button onClick={() => setCount(count + 1)}>
    Click me
    </button>
    </p>
    </div>
    )
    }
    HelloWorld5.defaultProps = {
    name: "John"
    }
    export default HelloWorld5;