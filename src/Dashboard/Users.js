import React,{useState,useEffect} from 'react';
import UserRow from './UserRow';
const Users = () => {
    const [users,setUsers] =useState([])
    useEffect(() =>{
        fetch("http://localhost:5000/user")
        .then(res =>res.json())
        .then(data =>setUsers(data))
    },[])
    return (
        <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map(items =><UserRow items ={items}></UserRow>)
        }
      
    </tbody>
  </table>
</div>
    );
};

export default Users;