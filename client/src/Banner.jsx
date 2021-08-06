<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";

const Banner = () => {
  return (
    <div className="storeBanner">
      <span className="freeShipping">
        FREE SHIPPING ON U.S. ORDERS OVER $50
      </span>
      <div className="caticon">
        <img
          className="catwalkLogo"
          src="https://cdn.dribbble.com/users/407429/screenshots/11395124/media/39e401b4e916d0182774888ac12243fe.png?compress=1&resize=400x300"
        />
      </div>
      <div class="bannerText">
        <div className="annoucements">
          END OF SUMMER SALE: 40% OFF CODE: SUN4DAYZ
        </div>
      </div>
      <div className="bannerBreak"></div>
=======
import React from 'react';
import ReactDOM from 'react-dom';

const Banner = () => {
  return (
    <div >
      <div className="storeBanner">
        <div className='logoNannouncements'>
          <span className="freeShipping">
        FREE SHIPPING ON U.S. ORDERS OVER $50
          </span>
          <div className="caticon">
            <img
              className="catwalkLogo"
              src="https://cdn.dribbble.com/users/407429/screenshots/11395124/media/39e401b4e916d0182774888ac12243fe.png?compress=1&resize=400x300"
            />
          </div>
          <div className="bannerText">
            <div className="annoucements">
          END OF SUMMER SALE: 40% OFF CODE: SUN4DAYZ
            </div>
          </div>
        </div>
        <div id="menuBreak" >HOME | WOMEN | ACCESSORIES | UNDIES | MEN</div>
      </div>
>>>>>>> 9c398c1839b6398a373560310e90961860841c09
    </div>
  );
};

export default Banner;
