import React from 'react';
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png";
import HomeReviewItems from '../HomeReviewItems/HomeReviewItems';
const HomeReview = () => {
    const reviews =[
        {
            id:1,
            content:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people1,
            name:"Winson Herry",
            address:"California"
        },
        {
            id:1,
            content:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people1,
            name:"Winson Herry",
            address:"California"
        },
        {
            id:1,
            content:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people1,
            name:"Winson Herry",
            address:"California"
        }
    ]
    return (
        <div className='py-16 px-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h5>Testimonial</h5>
                    <h3>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='w-32' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(items =><HomeReviewItems items ={items}></HomeReviewItems>)
                }
            </div>
        </div>
    );
};

export default HomeReview;