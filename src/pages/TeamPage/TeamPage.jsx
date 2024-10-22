import React from "react";
import "./style.css";
const TeamPage = () => {
  return (
    <>
      <div className="teampage">
        <div className="barber-shop-container">
          <div className="info-section">
            <h1>DREAM BARBER SHOP</h1>
            <p>Phan Van Tri Str, Ward 05, Dist. Go Vap</p>
            <p>
              <strong>T.</strong> 19001234
            </p>
            <p>
              <strong>W.</strong> dreambarbershop.com
            </p>
            <p>
              <strong>F.</strong> dreambarbershop
            </p>
            <p>
              <strong>E.</strong> dreambarbershop@gmail.com
            </p>
            <button className="booking-button">Booking now</button>
          </div>

          <div className="barber-grid">
            <div className="barber-card">
              <img src="#" />
              <p>BARBER QUY</p>
            </div>
            <div className="barber-card">
              <img src="#" />
              <p>BARBER HOANG</p>
            </div>
            <div className="barber-card">
              <img src="#" />
              <p>BARBER PHU</p>
            </div>
            <div className="barber-card">
              <img src="#" />
              <p>BARBER AN</p>
            </div>
            <div className="barber-card">
              <img src="#" />
              <p>BARBER KHANG</p>
            </div>
            <div className="barber-card">
              <img src="#" />
              <p>BARBER TAN</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
