import React from 'react';
import './hero.css';
import devImg from '../imagess/source.gif'
const Hero = () => {
  return (
    <>
   <div className="container hero">
  <div className="row align-items-center">
    {/* Right image column - move to top on md and up */}
    <div className="col-12 col-md-6 order-lg-2  order-md-1 text-center">
      <img 
        src={devImg} 
        alt="Developer Image" 
        className="img-fluid"
        style={{ maxHeight: "400px", objectFit: "cover",  borderRadius:'25px' }}
      />
    </div>

    <div
     className="col-12 col-md-6  
     order-lg-1 order-md-2
     p-5
      d-flex flex-column 
      justify-content-between
       align-items-center
     ">
      <h2 className="pb-5">Why should we use React.js?</h2>
      <p className='pb-5'>
           React.js allows for building fast, interactive user interfaces with
        reusable components, improving development efficiency and performance.
         </p>
      <button className="btn btn-info p-4 fw-bolder">Call to Action</button>
    </div>
  </div>
</div>


    </>
  )
}

export default Hero;