import React,{useState,useEffect} from 'react';
import auth from '../../src/Firebase/Firebase.init'
// import useNavigate from "react-router-dom";
import { signOut } from 'firebase/auth';
// import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const MyAppointment = () => {
    const [appointments,setAppointment]= useState([])
    const [user, loading, error] = useAuthState(auth);
    // const Navigate = useNavigate()
    useEffect(() => {
      if (user) {
          fetch(`http://localhost:5000/booking?patient=${user.email}`, {
              method: 'GET',
              headers: {
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
          })
             .then(res =>{
              // if(res.status == 401|| 403){
              //   // signOut(auth);
              //   // localStorage.removeitem("accessToken")
              //   // Navigate("/")
              // }
              return res.json()
             })
             .then(data =>{
               console.log(data)
             })
      }
  }, [user])

    return (
        <div>
          <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Datee</th>
        <th>Time</th>
        <th>Tretment</th>
      </tr>
    </thead>
    <tbody>
     {
         appointments.map(items =>{
          <h1>{items.slot}</h1>
         
         })
     }
     

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;