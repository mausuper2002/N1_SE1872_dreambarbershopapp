import React from "react";
import banner from "../../assets/images/banner_service.png";

const ServicePage = () => {
  return (
    <>
      <div className="servicepage">
        <div class="banner-container">
          <div class="banner">
            <img src={banner} alt="Barbershop Banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
