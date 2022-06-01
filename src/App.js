import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import Reviews from './pages/Reviews/Reviews';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import Dashboard from './Dashboard/Dashboard';
import MyAppointment from './Dashboard/MyAppointment';
import Review from './Dashboard/Review';
import Users from "./Dashboard/Users";
import AddDoctor from '../src/Dashboard/AddDoctor'
import RequireAdmin from './pages/Login/RequireAdmin';


function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
           <Dashboard></Dashboard>
          </RequireAuth>
        } >
          <Route index element ={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="history" element={<Review></Review>}></Route>
          <Route path="addDoctor" element={<AddDoctor></AddDoctor>}></Route>
          <Route path="users" element={
            // <RequireAdmin>
              <Users></Users>
            // </RequireAdmin>
          }></Route>
        </Route>
        {/* <Route path="/reviews" element={<Reviews />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
