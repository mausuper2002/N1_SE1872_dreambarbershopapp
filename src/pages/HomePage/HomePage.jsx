import React from "react";
import "./style.css";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import Banner from "../../assets/images/banner.jpg";
import Introduce from "../../assets/images/introduce.png";
import Warranty from "../../assets/images/warranty.png";

const HomePage = () => {
  const handleBookNowClick = (campusName) => {
    alert(`Booking for ${campusName}`);
  };

  return (
    <div className="homepage">
      <div class="banner-container">
        <div class="banner">
          <img src={Banner} alt="Barbershop Banner" />
        </div>
      </div>
      <section className="intro-section">
        <div className="intro-text">
          <h2>INTRODUCING DREAM BARBER</h2>
          <p>
            Welcome to DREAM Barbershop! With 7 years of expertise in BARBER &
            GROOMING, our skilled team, each with 2+ years of experience, is
            dedicated to delivering stylish, trend-focused haircuts that fit
            your lifestyle. DREAM is more than just a barbershop; it's a space
            for men to connect and feel at home. We’re committed to enhancing
            the value of BARBER VIET and appreciate the continued support of our
            loyal customers. Swing by DREAM and experience the difference today!
          </p>
        </div>
        <div className="intro-image">
          <img src={Introduce} alt="Barber working" />
        </div>
      </section>

      <div className="content-grid">
        <section className="warranty-policy">
          <h3>WARRANTY POLICY</h3>
          <div className="policy-content">
            <img src={Warranty} alt="Warranty" />
            <div className="policy-text">
              <h4 className="policy-text-title">Hair Service (3 days)</h4>
              <ul className="policy-text-content">
                <li style={{ fontWeight: 700, fontSize: 15 }}>
                  100% warranty for the following cases
                </li>
                <li>Cutting the wrong style requested by the customer</li>
                <li>
                  Cutting errors, plugging in, damaging the customer's head
                </li>
                <li>Not applicable for the following cases</li>
                <li> Customers want to change their hairstyle</li>
                <li> Cutting style requires styling but not styling</li>
              </ul>
              <h4 className="policy-text-title">Chemical Services (5 days)</h4>
              <ul className="policy-text-content">
                <li style={{ fontWeight: 700, fontSize: 15 }}>
                  Wrong curling style requested by the customer
                </li>
                <li>Curling is straightened or defective</li>
                <li>Dyeing the wrong color</li>
                <li>Dyeing fades quickly, uneven color</li>
                <li>Not applicable for hair washing after coloring</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="menu">
          <h3>MENU</h3>
          <div className="menu-content">
            <h4>Service Price List</h4>
            <ul>
              <li>Cut Price: 120K</li>
              <li>Combo for 2 People: 100K/person</li>
              <li>Combo for Curl: 300K</li>
              <li>Basic Color Dye: 300K - 500K</li>
              <li>Highlight Bleaching: 300K - 400K</li>
            </ul>
            <h4>Chemical Service Price List</h4>
            <ul>
              <li>Hair Curling: 900K</li>
              <li>Deep Curling: 500K</li>
              <li>Regular Dyeing: 300K - 500K</li>
            </ul>
          </div>
        </section>

        <section className="hair-care">
          <h3>HAIR CARE AND PROTECTION AFTER CHEMICAL TREATMENT</h3>
          <div className="hair-care-content">
            <div>
              <h4>After Curling</h4>
              <p>
                Do not use high pH shampoos. Blow dry at medium temperature.
              </p>
            </div>
            <div>
              <h4>After Dyeing</h4>
              <p>Do not use high pH shampoos. Use additional conditioner.</p>
            </div>
            <div>
              <h4>After Bleaching</h4>
              <p>Use purple shampoo to maintain color and prevent dryness.</p>
            </div>
          </div>
        </section>

        <section className="chemical-service">
          <h3>Chemical Service Price List</h3>
          <ul>
            <li>Perm Curling: 900K</li>
            <li>Chidori Curling: 700K</li>
            <li>Regular Dyeing: 300K - 500K</li>
            <li>High-End Dyeing: 500K - 700K</li>
          </ul>
        </section>
      </div>

      <section className="campus-section">
        <h3>CAMPUS</h3>
        <div className="campuses">
          <div className="campus">
            <img src="path/to/campus1.jpg" alt="Campus 1" />
            <p>Campus 1: Phan Van Tri Street - Go Vap District</p>
            <ButtonComponent
              text="BOOK NOW"
              onClick={() => handleBookNowClick("Campus 1")}
            />
          </div>
          <div className="campus">
            <img src="path/to/campus2.jpg" alt="Campus 2" />
            <p>Campus 2: Le Van Viet Street - 9th District</p>
            <ButtonComponent
              text="BOOK NOW"
              onClick={() => handleBookNowClick("Campus 2")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
