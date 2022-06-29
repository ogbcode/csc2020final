import React, {useState} from 'react';
const HelloWorld3 = (props) => {
//Syntax for state is const [state, setState] = useState(initialState);
const [name, setName] = useState(props.name);
const changeNameToGreet = (event) => {
setName(event.target.value);
}
return (
<div>
<p>Hello {name}. Greetings from React.</p>
<p>
<input type="text" placeholder="Write a name here..."
name="name_to_greet" onInput={changeNameToGreet}/>
</p>
</div>
)
}
HelloWorld3.defaultProps = {
name: "John"
}
export default HelloWorld3;