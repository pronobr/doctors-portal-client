import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from '../Service/Service';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointment = ({selected,setSelected}) => {
    const [service,setService] =useState([])
    const [treatment,setTreatment] =useState(null)
    
    useEffect(() =>{
        fetch('http://localhost:5000/service')
        .then(res =>res.json())
        .then(data =>{
            setService(data)
            console.log(data)
        })
    },[])
    return (
        <div className='px-16'>
            <p className ="pb-16  text-center">Available Appointment On {format(selected, 'PP')}</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
               service.map(items =><Service setTreatment ={setTreatment} items ={items}></Service>)
            }
            </div>
            {
                treatment && <BookingModal setTreatment={setTreatment} selected ={selected} treatment ={treatment}></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointment;