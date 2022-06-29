import React, {useState} from 'react';
type Props = {
name?: string;
other?: string;
}
const HelloWorld3: React.FC<Props> = (props) => {
//Syntax for state is const [state, setState] = useState(initialState);
const [name, setName] = useState(props.name);
const changeNameToGreet = (event: any) => {
setName(event.target.value);
}
return (
<div>
<p>Hello {name}. Greetings from React.</p>
<p>
<input type="text" placeholder="Write a name here..." name="name_to_greet"
onInput={changeNameToGreet}/>
</p>
</div>
)
}
HelloWorld3.defaultProps = {
name: "John"
}
export default HelloWorld3;