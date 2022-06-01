import React from 'react';
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png"
const Hero = () => {
    return (
        <div className="bg-[url('../../../assets/images/bg.png')]">
            <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6 pr-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;