import React from 'react';
import HelloWorld from './component/HelloWorld';
import HelloWorld2 from './component/HelloWorld2';
import HelloWorld3 from './component/HelloWorld3';
import HelloWorld4 from './component/HelloWorld4';
import HelloWorld5 from './component/HelloWorld5';
import HelloWorld6 from './component/helloworld6/HelloWorld6';
import HelloWorld7 from './component/helloworld7/HelloWorld7';
import HelloWorld8 from './component/HelloWorld8';
import './App.css';

const App: React.FC = () => {
return (
<div>
<HelloWorld8 />
<HelloWorld />
<HelloWorld2 name="Pius" />
<HelloWorld2 />
<HelloWorld3 name="Joy"/>
<HelloWorld4 />
<HelloWorld5 />
<HelloWorld6 />
<HelloWorld7 />
</div>
);
}
export default App;