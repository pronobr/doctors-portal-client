import React from 'react';
import {Outlet} from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../src/Firebase/Firebase.init';
import useHook from '../hooks/useHook';
const Dashboard = () => {
  // const [user, loading, error] = useAuthState(auth);
  // const [admin] =useHook(user)
    return (
        <div>
           <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
      <h2>DashBoard</h2>
  <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
    
      <li> <li><Link to="/dashboard">My Appointments</Link></li></li>
      <li> <li><Link to="/dashboard/review">My Reviews</Link></li></li>
      <li> <li><Link to="/dashboard/review">History</Link></li></li>
        <li><Link to="/dashboard/users">All Users</Link></li>
        <li><Link to="/dashboard/addDoctor">Add Doctor</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;