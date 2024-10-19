import React from "react";
import "./HomePage.css";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import Introduce from "../../assets/images/introduce.png";
import Warranty from "../../assets/images/warranty.png";
import Campus1 from "../../assets/images/campus1.png";
import Campus2 from "../../assets/images/campus2.png";

const HomePage = () => {
  const handleBookNowClick = (campusName) => {
    alert(`Booking for ${campusName}`);
  };

  return (
    <div className="homepage">
      <BannerComponent />
      <div className="intro-section">
        <section className="intro-text">
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
        </section>
        <section className="intro-image">
          <img src={Introduce} alt="Barber working" />
        </section>
      </div>

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
            <h4 className="menu-title">Service Price List</h4>
            <ul className="content">
              <li className="menu-title-main" style={{ color: "#992121" }}>
                CUT PRICE: 120K
              </li>
              <li> (CONDITION - CUT - WASH - STYLING) </li>
              <li>COMBO FOR 2 PEOPLE: 110K/PERSON</li>
              <li>COMBO FOR 4 PEOPLE: 100K/PERSON</li>
              <li className="menu-title-main" style={{ color: "#992121" }}>
                CURL PRICE: 300K
              </li>
              <li>COMBO FOR CURL: 410K</li>
              <li>COMBO FOR CURL FOR 2 PEOPLE: 380K/PERSON</li>
              <li>COMBO FOR CURL FOR 4 PEOPLE: 340K/PERSON</li>
              <li className="menu-title-main" style={{ color: "#992121" }}>
                DYE PRICE LIST
              </li>
              <li>Basic Color Dye: 300K - 500K</li>
              <li>BEALCHING: 250K-350K/TIME</li>
              <li>BOMBO OF COLORING NEEDED TO LIFT THE BASE: 500K</li>
              <li>HIGHLIGHT BLEACHING THE WHOLE HEAD: 300K-400K</li>
              <li>HIGHLIGHT BLEACHING: 100K/STREAM</li>
            </ul>
          </div>
        </section>

        <section className="hair-care">
          <h4 className="menu-title">
            HAIR CARE AND PROTECTION AFTER CHEMICAL TREATMENT
          </h4>
          <div className="hair-care-content">
            <div>
              <h4
                style={{ fontWeight: 700, fontSize: 15, textAlign: "center" }}
              >
                After Curling
              </h4>
              <ul>
                <li>
                  Do not use shampoos with high pH such as Clear, Xmen,...
                  (shampoo with mint)
                </li>
                <li>Blow dry at medium temperature</li>
                <li>
                  Should use additional conditioners such as coconut oil after
                  shampooing to moisturize hair
                </li>
              </ul>
            </div>
            <div>
              <h4
                style={{ fontWeight: 700, fontSize: 15, textAlign: "center" }}
              >
                After Dyeing
              </h4>
              <ul>
                <li>
                  Do not use shampoos with high pH such as Clear, Xmen,...
                  (shampoos with mint).
                </li>
                <li>
                  Should use additional coconut oil after shampooing to
                  moisturize hair
                </li>
              </ul>
            </div>
            <div>
              <h4
                style={{ fontWeight: 700, fontSize: 15, textAlign: "center" }}
              >
                After Bleaching
              </h4>
              <ul>
                <li>
                  Do not use shampoos with high pH such as Clear, Xmen,...
                  (shampoo with mint)
                </li>
                <li>
                  Use purple shampoo to massage the head and use conditioner to
                  keep the color longer and prevent dryness.
                </li>
                <li>Use medium temperature</li>
                <li>
                  Should use additional coconut oil after shampooing to
                  moisturize the hair
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="chemical-service">
          <h4 className="menu-title">CHEMICAL SERVICE PRICE LIST</h4>
          <ul className="content">
            <li className="menu-title-main" style={{ color: "#992121" }}>
              HAIR CURLING
            </li>
            <li>PREMCLOCK: 900K</li>
            <li>DEEP CURLING: 500K</li>
            <li>RUFLED CURLING: 700K</li>
            <li>CHIDORI CURLING: 700K</li>
            <li>ZIZAC CURLING: 500K</li>
            <li>MEDUSA CURLING: 500K</li>
            <li>CURLY CURLING: 500K</li>
            <li>SIDE STRAIGHTENING: 200K</li>
            <li className="menu-title-main" style={{ color: "#992121" }}>
              HAIR DYEING
            </li>
            <li>REGULAR DYEING: 300K-500K</li>
            <li>HAIR BLEACHING: 250K-350K</li>
            <li>COLOR DYEING NEEDING BASE LIFTING: 500K</li>
            <li>HIGH-END DYEING: 500K-700K</li>
          </ul>
        </section>
      </div>
      <h3>CAMPUS</h3>
      <section className="campus-section">
        <div className="campus">
          <img src={Campus1} alt="Campus 1" />
          <p style={{ fontWeight: 700, fontSize: 15, textAlign: "center" }}>
            Campus 1: Phan Van Tri Street - Go Vap District
          </p>
          <div style={{ textAlign: "center" }}>
            <ButtonComponent
              text="BOOK NOW"
              onClick={() => handleBookNowClick("Campus 1")}
            />
          </div>
        </div>
        <div className="campus">
          <img src={Campus2} alt="Campus 2" />
          <p style={{ fontWeight: 700, fontSize: 15, textAlign: "center" }}>
            Campus 2: Le Van Viet Street - 9th District
          </p>
          <div style={{ textAlign: "center" }}>
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
