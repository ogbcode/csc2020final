import React, {useState} from 'react';
type Props = {
name?: string;
other?: string;
}
const HelloWorld4: React.FC<Props> = (props) => {
const [name, setName] = useState(props.name);
const [count, setCount] = useState(0);
const changeNameToGreet = (event: any) => {
setName(event.target.value);
}
return (
<div>
<p>Hello {name}. Greetings from React.</p>
<p>
<input type="text" placeholder="Write a name here..." name="name_to_greet" onInput={changeNameToGreet}/>
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
HelloWorld4.defaultProps = {
name: "John"
}
export default HelloWorld4;