import React from 'react';

const Service = ({items,setTreatment}) => {
    console.log(items)
    return (
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{items.name}</h2>
    <p>{items.slots.length} Space available</p>
   {
       items.slots.length>0?
       <li className='block'>{items.slots[0]}</li>
       :<span>No slots available</span>
   }
    <div class="card-actions justify-center">
      {/* <button  onClick={()=>setTreatment(items)} disabled ={items.slots.length == 0} class="btn  modal-button">Book</button> */}
      <label for="my-modal-6" onClick={()=>setTreatment(items)} disabled ={items.slots.length == 0} class="btn modal-button">open modal</label>
    </div>
  </div>
</div>
    );
};

export default Service;