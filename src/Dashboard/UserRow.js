import React from 'react';

const UserRow = ({items}) => {
    const makeAdmin =() =>{
        fetch(`http://localhost:5000/user/admin/${items.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <tr>
        <th>1</th>
        <td>{items.email}</td>
        <td>{items.role !=="admin" &&<button onClick={makeAdmin} className='btn btn-xs'>Add Admin</button>}</td>
        <td><button className='btn btn-xs'>X</button></td>
      </tr>
    );
};

export default UserRow;