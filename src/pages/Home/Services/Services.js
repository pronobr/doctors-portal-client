import React from 'react';
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";
import Service from '../Service/Service';
const Services = () => {
    const services =[
        {
            title:"Fluoride Treatment",
            content:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:cavity
        },
        {
            title:"Cavity Filling",
            content:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:whitening
        },
        {
            title:"Teeth Whitening",
            content:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:fluoride
        }
    ]
    return (
        <div className='my-28 mx-16'>
            <div className='text-center pb-6'>
                <h5 className='text-primary font-bold'>OUR SERVICES</h5>
                <h3 class="text-3xl font-normal">Services We Provide</h3>
            </div>
            <div className='py-6 grid lg:grid-cols-3 sm:grid-cols-3 gap-10'>
                {
                    services.map(items =><Service items ={items}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;