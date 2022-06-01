import React from 'react';

const AddDoctor = () => {
    return (
        <div>
            
        </div>
    );
};

export default AddDoctor;




// import { useForm } from "react-hook-form";
// import { useQuery } from 'react-query';





//     const { register, formState: { errors }, handleSubmit } = useForm();
//     // const imgStoreKey ='3865938eefff3a14cd02acc91c1d32e1'
//     const {data: services} =useQuery('services',() =>fetch('http://localhost:5000/service').then(res =>res.json()))
//    const onSubmit = data => {
//      console.log(data)
    
//       }












//         <div className ="mx-auto">
//             <h2 className='text-3xl'>Add A New Doctor</h2>

//         <div className ="form-control w-full max-w-xs">
//         <form onSubmit={handleSubmit(onSubmit)}>
// <div class="form-control w-full max-w-xs">
//   <label class="label">
//     <span class="label-text">Name</span>
    
//   </label>
//   <input {...register("name", {
//     required:{
//       value:true,
//       message:"error message"
//     }
   
//   })} type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
//   <label className="label">
//   {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
  
// </label>
// </div>
// <div class="form-control w-full max-w-xs">
//   <label class="label">
//     <span class="label-text">Email</span>
    
//   </label>
//   <input {...register("email", {
//     required:{
//       value:true,
//       message:"error message"
//     },
//     pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//   })} type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
//   <label className="label">
//   {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
//   {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
// </label>
// </div>

// <div class="form-control w-full max-w-xs">
// <label class="label">
//   <span class="label-text">Speciality</span>
  
// </label>
// <select {...register('speciality')} class="select w-full max-w-xs">
//     {
//         services.map(items =><option value ={items.name}>{items.name}</option>)
//     }
//   <option>Homer</option>
//   <option>Bart</option>
//   <option>Lisa</option>
//   <option>Maggie</option>
// </select>
// {/* <input {...register("speciality", {
//   required:{
//     value:true,
//     message:" speciality error message"
//   }

// })} type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" /> */}
// <label className="label">
// {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
// {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
// </label>
// </div>

// <div class="form-control w-full max-w-xs">
//   <label class="label">
//     <span class="label-text">Photo</span>
    
//   </label>
//   <input {...register("image", {
//     required:{
//       value:true,
//       message:"error message"
//     }
   
//   })} type="file" placeholder="Name" class="input input-bordered w-full max-w-xs" />
//   <label className="label">
//   {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
  
// </label>
// </div>


//  <input className='w-full max-w-xs btn btn-outline' value ="Add" type="submit" />
// </form>

//         </div>
//         </div>