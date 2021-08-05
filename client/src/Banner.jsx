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
    </div>
  );
};

export default Banner;
