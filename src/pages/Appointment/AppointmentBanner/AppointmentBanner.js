import React, { useState } from 'react';
import chair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = ({selected, setSelected}) => {
  
    return (
        <div>
           <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <DayPicker 
     mode="single"
     selected={selected}
     onSelect={setSelected}
    />
    <p>you have seclected {format(selected, 'PP')}</p>
    </div>
    
  </div>
  
</div> 

        </div>
    );
};

export default AppointmentBanner;