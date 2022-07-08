import React, { Component } from 'react';
import '../Box2/Box2.css'
import img2 from '../../assets/images/2.jpg'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

class Box2 extends Component {
  render() {
    return (
      <div className="container1">
      <div className="contaiBox1">
        <div className="image_test">
           <img src={img2} className="image1" alt="error" />
        </div>
        <div className="description">
          <h3 className="description_title">
              YOUNG SHOP
          </h3>
          <hr/>
          <p className="description_item1">
              Samsung UHD TV 24inch
          </p>
          <p id="star"><AiFillStar/> <AiFillStar/> 
            <AiFillStar/> <AiFillStar/> 
            <AiOutlineStar/></p>
          <p className="description_item">
              $599
          </p>
      </div>
      </div>
    </div>
    );
  }
}

export default Box2;
