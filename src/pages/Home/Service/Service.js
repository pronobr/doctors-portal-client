import React from 'react';

const Service = ({items}) => {
    console.log(items)
    return (
      
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={items.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{items.title}</h2>
    <p>{items.content}</p>
  </div>
</div>
       
    );
};

export default Service;