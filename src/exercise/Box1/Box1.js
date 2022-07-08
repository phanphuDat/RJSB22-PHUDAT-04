import React from 'react'
import '../Box1/Box1.css'
import img1 from '../../assets/images/1.jpg'

export default function Box1() {
  return (
    <div className="container">
      <div className="contaiBox">
        <div className="image_test">
           <img src={img1} className="image" alt="error" />
        </div>
        <div className="description">
          <h3 className="description_title">
              Clothing & Apparel
          </h3>
          <p className="description_item">
              Accessories
          </p>
          <p className="description_item">
              Bags
          </p>
          <p className="description_item">
              Kid's Fashion
          </p>
          <p className="description_item">
              Mens
          </p>
      </div>
      </div>
    </div>
  )
}
