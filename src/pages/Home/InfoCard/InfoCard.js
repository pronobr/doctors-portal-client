import React from 'react';

const InfoCard = ({items}) => {
    console.log(items)
    return (
        <div>
            <div class={`card card-side ${items.colorClass} shadow-xl p-4`}>
  <figure><img src={items.img}alt="Movie"/></figure>
  <div class="card-body text-white">
    <h2 class="card-title">{items.title}</h2>
    <p>{items.description}</p>
    
  </div>
</div>
        </div>
    );
};

export default InfoCard;