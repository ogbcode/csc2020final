import React from 'react';
import {User} from './type-defs'
type Props = {
user: User;
}
const ShowUser: React.FC<Props> = (props) => {
const showUser = () => {
const user = props.user;
try{
if(user.id !== undefined){//make user that user object is trully available
return(
<table>
<th>Property</th>
<th>Value</th>
<tr>
<td>id</td>
<td>{user.id}</td>
</tr>
<tr>
<td>name</td>
<td>{user.name}</td>
</tr>
<tr>
<td>username</td>
<td>{user.username}</td>
</tr>
<tr>
<td>email</td>
<td>{user.email}</td>
</tr>
<tr>
<td>address</td>
<td>{user.address.street}</td>
</tr>
<tr>
<td>phone</td>
<td>{user.phone}</td>
</tr>
<tr>
<td>website</td>
<td>{user.website}</td>
</tr>
<tr>
<td>company</td>
<td>{user.company.name}</td>
</tr>
</table>
)
}else{
return 'No user to display'; //user is null or elements are undefined
}
}catch(error){
    if(error instanceof Error){
        return `Problem fetching user ${error.message}`;
    }
    else{
        console.log('Unexpected error', error);
    }

}
}
return (
<div>
{showUser()}
</div>
)
}
export default ShowUser;