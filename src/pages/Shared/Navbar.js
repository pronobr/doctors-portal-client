import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    // localStorage.removeitem("accessToken")
    Navigate("/")
  };
    return (
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/">Home</Link></li>
      
      <li><Link to="/about">About</Link></li>
      <li><Link to="/appointment">Appointment</Link></li>
      <li><Link to="/reviews">Reviews</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li>{user?<button class="btn btn-active btn-ghost">Signout</button>:<Link to="/login">Login</Link>}</li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      
      <li><Link to="/about">About</Link></li>
      <li><Link to="/appointment">Appointment</Link></li>
      <li><Link to="/reviews">Reviews</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      {user? <li><Link to="/dashboard">Dashboard</Link></li>:""}
      <li>{user?<button onClick={logout} class="btn btn-active btn-ghost">Signout</button>:<Link to="/login">Login</Link>}</li>
    </ul>
  </div>
<div className='navbar-end'>
<label tabindex="1" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
</div>
</div>
    );
};

export default Navbar;