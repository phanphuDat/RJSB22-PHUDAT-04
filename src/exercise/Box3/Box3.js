import React from 'react'
import img3 from '../../assets/images/3.jpg';
import '../Box3/Box3.css'

export default function Box3() {
  return (
    <div className="container1">
    <div className="contaiBox1">
      <div className="image_test">
         <img src={img3} className="image1" alt="error" />
      </div>
      <div className="description">
        <p className="description_title">
            Technology
        </p>
        <p className="description_item2">
            Harman Kadon Onys Studio Mini, <br/>
            Reviews & Experiences
        </p>
        <p className="description_item">
            <p><span>feb 21, 2021 by</span> drFurion</p>
        </p>
    </div>
    </div>
  </div>
  )
}
