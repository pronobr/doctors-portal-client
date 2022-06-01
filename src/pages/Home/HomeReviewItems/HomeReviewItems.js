import React from 'react';

const HomeReviewItems = ({items}) => {
    return (
        <div className='pt-6'>
    <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    
    <p>{items.content}</p>
    <div class="flex">
    <img className='pr-5' src={items.img}alt=""/>
    <div>
    <h2 class="card-title">{items.name}</h2>
    <h4>{items.address}</h4>
    </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default HomeReviewItems;