import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"
const Info = () => {
    const cardDetails =[
        {
            title:"New movie is released!",
            description:"Click the button to watch on Jetflix app.",
            img:clock,
            colorClass:"bg-primary"
        },
        {
            title:"New movie is released!",
            description:"Click the button to watch on Jetflix app.",
            img:marker,
            colorClass:"bg-accent"
        },
        {
            title:"New movie is released!",
            description:"Click the button to watch on Jetflix app.",
            img:phone,
            colorClass:"bg-primary"
        },
    ]
    
    return (
        <div className ="grid grid-cols-1 lg:grid-cols-3 gap-5  px-10">
            {
                cardDetails.map(items =><InfoCard items ={items}></InfoCard>)
            }
            
        </div>
    );
};

export default Info;