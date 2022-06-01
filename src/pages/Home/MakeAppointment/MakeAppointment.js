import React from 'react';
import doctor from "../../../assets/images/doctor-small.png"
import appointment from "../../../assets/images/appointment.png"
const MakeAppointment = () => {
    return (
        <div style={{
            background :`url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className="mt-[-100px]  " src={doctor} alt="" />
            </div>
            <div className='flex-1 pb-6'>
                <h5>Appointment</h5>
                <h3>Make an appointment Today</h3>
                <p className ="pr-24">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English.
                     Many desktop publishing packages and web page</p>
                     <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppointment;