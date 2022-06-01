import React from 'react';
import treatment from "../../../assets/images/treatment.png";
const Banner = () => {
    return (
        <div className='px-36 pb-36'>
            <div class="hero min-h-screen  gap-10">
  <div class="hero-content flex-col lg:flex-row">
    <img className='w-96 ' src={treatment} />
    <div className='px-12'>
      <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;