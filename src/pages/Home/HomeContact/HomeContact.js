import React from 'react';
import appointment from "../../../assets/images/appointment.png";
import { useForm } from "react-hook-form";
const HomeContact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div style={{
            background :`url(${appointment})`
        }} className="p-16 ">
            <form className ="flex flex-col w-96 mx-auto " onSubmit={handleSubmit(onSubmit)}>
        <input className ="mb-2" placeholder ="Name" {...register("name", { required: true, maxLength: 20 })} />
        <input className ="mb-2" placeholder ="Quantity" type="text" {...register("quantity")} />
        <textarea placeholder ="Description" className ="mb-2" {...register("description")} />
        
        
        <input  className ="btn btn-primary" value ="Send" type="submit" />
            </form>
        </div>
    );
};

export default HomeContact;