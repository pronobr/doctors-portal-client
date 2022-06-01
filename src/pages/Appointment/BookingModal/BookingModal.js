import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import { toast } from 'react-toastify';
const BookingModal = ({selected,treatment,setTreatment}) => {
  const [user, loading, error] = useAuthState(auth);
    const handleSubmit =event =>{
        event.preventDefault();
        const slot =event.target.slot.value;
        const date =event.target.date.value
        const name =event.target.name.value
        const email =event.target.email.value
        const phone =event.target.phone.value
        const booking ={
          treatmentid:treatment._id,
          treatment:treatment.name,
          slot,
          date:format(selected, 'PP'),
          patient:user.email,
          patientName:user.displayName
        }
        setTreatment(null)
        console.log(booking)
       
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
              console.log(data)
                if(data.success){
                    toast(`Appointment is set, ${format(selected, 'PP')} at ${slot}`)
                }
                else{
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null);
                // refetch();
            });
    }
       
    
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
   <form onSubmit={handleSubmit} className='text-center'>
   <input name='date' type="text" value={format(selected, 'PP')} class="input mt-1 input-bordered w-full max-w-xs" />
   <select name='slot' class="select select-bordered w-full max-w-xs">
  {
      treatment.slots.map(item =><option value={item}>{item}</option>)
  }
  {/* <option>Han Solo</option>
  <option>Greedo</option> */}
</select>
   <input name='name' value={user?.displayName} type="text" placeholder="Name" class="input mt-1 input-bordered w-full max-w-xs" />
   <input name='phone' type="text" placeholder="Phone Number" class="input mt-1 input-bordered w-full max-w-xs" />
   <input name='email' value={user?.email} type="text" placeholder="Email" class="input  input-bordered w-full max-w-xs" />
   <input for="my-modal-6" type="submit" className='btn block w-96 mx-auto text-black'  value="Submit" />
 
   </form>
    {/* <div class="modal-action">
      <label typeof='s'  class="btn">Yay!</label>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default BookingModal;