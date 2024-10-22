import React, { useState } from "react";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Link as LinkRoll } from "react-scroll";
import HealthyHair from "../../assets/images/healthyhair.webp";
import DryHair from "../../assets/images/dryhair.webp";
import DamagedHair from "../../assets/images/damagedhair.webp";
import NotSensitive from "../../assets/images/notsensetive.webp";
import SomeWhatSensitive from "../../assets/images/somewhatsensitive.webp";
import VerySensitive from "../../assets/images/verysensitive.webp";
import Daily from "../../assets/images/daily.webp";
import TwoTimes from "../../assets/images/twotimes.webp";
import Occasion from "../../assets/images/Occation.webp";
import WarmTone from "../../assets/images/warmtone.webp";
import NeutralTone from "../../assets/images/neutraltone.webp";
import CoolTone from "../../assets/images/cooltone.webp";
import "./style.css";
import Color1 from "../../assets/images/mau1.webp";
import Color2 from "../../assets/images/mau2.webp";
import Color3 from "../../assets/images/mau3.webp";
import Color4 from "../../assets/images/mau4.webp";
import Color5 from "../../assets/images/mau5.webp";
import Color6 from "../../assets/images/mau6.webp";
import Color7 from "../../assets/images/mau7.webp";
import Color8 from "../../assets/images/mau8.webp";
import Color9 from "../../assets/images/mau9.webp";
import Color10 from "../../assets/images/mau10.webp";
import Color11 from "../../assets/images/mau11.webp";
import Color12 from "../../assets/images/mau12.webp";
import Color13 from "../../assets/images/mau13.webp";
import Color14 from "../../assets/images/mau14.webp";
import Color15 from "../../assets/images/mau15.webp";
import Color16 from "../../assets/images/mau16.webp";
import Color17 from "../../assets/images/mau17.webp";
import Color18 from "../../assets/images/mau18.webp";
import Color19 from "../../assets/images/mau19.webp";
import Color20 from "../../assets/images/mau20.webp";
import Color21 from "../../assets/images/mau21.webp";
import Color22 from "../../assets/images/mau22.webp";
import Color23 from "../../assets/images/mau23.webp";
import Color24 from "../../assets/images/mau24.webp";
import DongHo from "../../assets/images/dongho.png";
import Lich from "../../assets/images/lich.png";
import HoaChat from "../../assets/images/hoachat.png";
import VoiSen from "../../assets/images/voisen.png";
import GoiDau from "../../assets/images/goidau.png";
import MaySay from "../../assets/images/maysay.png";
import CanhCao from "../../assets/images/maysay.png";
import { Link } from "react-router-dom";

const BecolorPage = () => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (choice) => {
    setSelected(choice);
  };
  return (
    <>
      <div>
        <BannerComponent />
        <section className="section-bespoke">
          <section className="section-bespoke-intro">
            <div className="left-intro">
              <h2>Men, skin tone matters</h2>
              <h2>Test to help you find the right hair color!</h2>
              <div className="button">
                <div className="left-button">
                  <Link to={"/bespoke"}>
                    <ButtonComponent text="Test Style" />
                  </Link>
                </div>

                <div className="right-button">
                  <Link to={"/becolor"}>
                    <ButtonComponent text="Test Color" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="right-intro">
              <ul>
                <li>
                  You want to change your look but are afraid that the wrong
                  hair color will make your skin look darker? Or will it be
                  harmful to your hair? Everyone has a suitable hair color,
                  don't follow the trend but beautify yourself in a way that
                  suits you!
                </li>
                <li style={{ marginTop: 10 }}>
                  Determining your skin tone is the key to having a hair color
                  that matches your skin. A hair color that doesn't match your
                  skin tone will not match your facial features or skin color,
                  which is very unnatural. Before choosing a hair color, you
                  should see if your skin tone is cool or warm.
                </li>
              </ul>
            </div>
          </section>
        </section>
        <div className="advise">
          <section id="thickness" className="advise-step">
            <div className="progress-bar">
              <span className={selected ? "completed" : "active"}>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>

            <h2
              style={{
                textAlign: "center",
                fontSize: 40,
                fontFamily: "Brush Script MT",
                fontWeight: 30,
              }}
            >
              Hair health
            </h2>

            <section style={{ marginBottom: 30 }}>
              <div className="img-hair">
                <img src={HealthyHair} alt="Thin Hair" />
                <img src={DryHair} alt="Thin Hair" />
                <img src={DamagedHair} alt="Thin Hair" />
              </div>
            </section>

            <section className="button-hair">
              <div
                className={`option ${selected === "thin" ? "selected" : ""}`}
                onClick={() => handleSelection("thin")}
              >
                <LinkRoll
                  className={`hair-btn ${selected === "thin" ? "active" : ""}`}
                  activeClass="active"
                  to="sensitive"
                  spy={true}
                  smooth={true}
                >
                  Healthy hair
                </LinkRoll>
              </div>

              <div
                className={`option ${selected === "medium" ? "selected" : ""}`}
                onClick={() => handleSelection("medium")}
              >
                <LinkRoll
                  className={`hair-btn ${
                    selected === "medium" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="sensitive"
                  spy={true}
                  smooth={true}
                >
                  Dry hair
                </LinkRoll>
              </div>

              <div
                className={`option ${selected === "thick" ? "selected" : ""}`}
                onClick={() => handleSelection("thick")}
              >
                <LinkRoll
                  className={`hair-btn ${selected === "thick" ? "active" : ""}`}
                  activeClass="active"
                  to="warning-text"
                  spy={true}
                  smooth={true}
                >
                  Damaged hair
                </LinkRoll>
              </div>
            </section>
            <section>
              <div className="text-hair" style={{ marginTop: 20 }}>
                <span>Stroke hair without seeing gray hands</span>
                <span>
                  Hair is less shiny and healthy, hair is slightly split
                </span>
                <span>Hair is easily tangled, dry, split ends</span>
              </div>
            </section>
          </section>
          <section id="sensitive" className="advise-step">
            <div className="progress-bar">
              <span className={selected ? "completed" : "active"}>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>

            <h2
              style={{
                textAlign: "center",
                fontSize: 40,
                fontFamily: "Brush Script MT",
                fontWeight: 30,
              }}
            >
              Scalp sensitivity
            </h2>

            <section style={{ marginBottom: 30 }}>
              <div className="img-hair">
                <img src={NotSensitive} alt="Thin Hair" />
                <img src={SomeWhatSensitive} alt="Thin Hair" />
                <img src={VerySensitive} alt="Thin Hair" />
              </div>
            </section>

            <section className="button-hair">
              <div
                className={`option ${selected === "thin" ? "selected" : ""}`}
                onClick={() => handleSelection("thin")}
              >
                <LinkRoll
                  className={`hair-btn ${selected === "thin" ? "active" : ""}`}
                  activeClass="active"
                  to="frequency"
                  spy={true}
                  smooth={true}
                >
                  Not sensitive
                </LinkRoll>
              </div>

              <div
                className={`option ${selected === "medium" ? "selected" : ""}`}
                onClick={() => handleSelection("medium")}
              >
                <LinkRoll
                  className={`hair-btn ${
                    selected === "medium" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="frequency"
                  spy={true}
                  smooth={true}
                >
                  Somewhat sensitive
                </LinkRoll>
              </div>

              <div
                className={`option ${selected === "thick" ? "selected" : ""}`}
                onClick={() => handleSelection("thick")}
              >
                <LinkRoll
                  className={`hair-btn ${selected === "thick" ? "active" : ""}`}
                  activeClass="active"
                  to="warning-text"
                  spy={true}
                  smooth={true}
                >
                  Very sensitive
                </LinkRoll>
              </div>
            </section>
            <section>
              <div className="text-hair" style={{ marginTop: 20 }}>
                <span>
                  Skin is healthy, free of dryness, flakes and dandruff
                </span>
                <span>Healthy scalp but easily reacts to chemicals</span>
                <span>
                  Weak, rough, red scalp, dandruff, flaky and easily irritated,
                  sore
                </span>
              </div>
            </section>
          </section>
          <section id="frequency" className="advise-step">
            <div className="progress-bar">
              <span className={selected ? "completed" : "active"}>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>

            <h2
              style={{
                textAlign: "center",
                fontSize: 40,
                fontFamily: "Brush Script MT",
                fontWeight: 30,
              }}
            >
              Frequency of hair styling
            </h2>

            <section>
              <div className="img-hair" style={{ marginBottom: 30 }}>
                <img src={Daily} alt="Thin Hair" />
                <img src={TwoTimes} alt="Thin Hair" />
                <img src={Occasion} alt="Thin Hair" />
              </div>
            </section>

            <section className="button-hair">
              <div
                className={`option ${selected === "daily" ? "selected" : ""}`}
                onClick={() => handleSelection("daily")}
                style={{ paddingLeft: 60 }}
              >
                <LinkRoll
                  className={`hair-btn ${selected === "daily" ? "active" : ""}`}
                  activeClass="active"
                  to="skintone"
                  spy={true}
                  smooth={true}
                >
                  Daily
                </LinkRoll>
              </div>

              <div
                className={`option ${
                  selected === "twotimes" ? "selected" : ""
                }`}
                onClick={() => handleSelection("twotimes")}
                style={{ paddingLeft: 70 }}
              >
                <LinkRoll
                  className={`hair-btn ${
                    selected === "twotimes" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="skintone"
                  spy={true}
                  smooth={true}
                >
                  2-3 times/week
                </LinkRoll>
              </div>

              <div
                className={`option ${
                  selected === "occasion" ? "selected" : ""
                }`}
                onClick={() => handleSelection("occasion")}
                style={{ paddingLeft: 30 }}
              >
                <LinkRoll
                  className={`hair-btn ${
                    selected === "occasion" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="skintone"
                  spy={true}
                  smooth={true}
                >
                  On occasion
                </LinkRoll>
              </div>
            </section>
            <section>
              <div className="text-hair" style={{ marginTop: 20 }}>
                <span>
                  Regular grooming and use of lots of hair care and styling
                  products
                </span>
                <span style={{ paddingLeft: 50 }}>
                  Use when needed, not every day
                </span>
                <span style={{ paddingLeft: 60 }}>
                  Only use on important occasions, ceremonies, parties, dates...
                </span>
              </div>
            </section>
          </section>
          <section id="skintone" className="advise-step">
            <div className="progress-bar">
              <span className={selected ? "completed" : "active"}>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>

            <h2
              style={{
                textAlign: "center",
                fontSize: 40,
                fontFamily: "Brush Script MT",
                fontWeight: 30,
              }}
            >
              How to determine skin tone
            </h2>

            <section>
              <div className="img-hair" style={{ marginBottom: 30 }}>
                <img src={WarmTone} alt="Thin Hair" />
                <img src={NeutralTone} alt="Thin Hair" />
                <img src={CoolTone} alt="Thin Hair" />
              </div>
            </section>

            <section className="button-hair">
              <div
                className={`option ${selected === "daily" ? "selected" : ""}`}
                onClick={() => handleSelection("daily")}
                style={{ paddingLeft: 60, marginRight: 0 }}
              >
                <LinkRoll
                  className={`hair-btn ${selected === "daily" ? "active" : ""}`}
                  activeClass="active"
                  to="warmtone"
                  spy={true}
                  smooth={true}
                >
                  Warm tone
                </LinkRoll>
              </div>

              <div
                className={`option ${
                  selected === "twotimes" ? "selected" : ""
                }`}
                onClick={() => handleSelection("twotimes")}
                style={{ paddingLeft: 70, marginRight: 50 }}
              >
                <LinkRoll
                  className={`hair-btn ${
                    selected === "twotimes" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="neutraltone"
                  spy={true}
                  smooth={true}
                >
                  Neutral tone
                </LinkRoll>
              </div>

              <div
                className={`option ${
                  selected === "occasion" ? "selected" : ""
                }`}
                onClick={() => handleSelection("occasion")}
                style={{ paddingLeft: 30, marginRight: 50 }}
              >
                <LinkRoll
                  className={`hair-btn ${
                    selected === "occasion" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="cooltone"
                  spy={true}
                  smooth={true}
                >
                  Cool tone
                </LinkRoll>
              </div>
            </section>
            <section>
              <div className="text-hair" style={{ marginTop: 20 }}>
                <span>
                  The skin will have a yellow, dark hue. The veins in the arm
                  will be green.
                </span>
                <span>
                  Skin has no pink or yellow undertones. The veins in the arm
                  will be purple (not clear green or blue)
                </span>
                <span>
                  Skin will have pink & purple tones. Arm veins will be blue.
                </span>
              </div>
            </section>
          </section>
          <section className="faceshape" style={{ marginTop: 30 }}>
            <div id="cooltone">
              <h2
                style={{
                  textAlign: "center",
                  fontSize: 40,
                  fontFamily: "Brush Script MT",
                  fontWeight: 30,
                }}
              >
                Hair color for cool skin tones
              </h2>
              <div
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  textWrap: "balance",
                  color: "gray",
                }}
              >
                These colors will highlight bright white skin and create a
                youthful feeling. To help the skin not look pale, choose warm
                colors to balance you
              </div>
            </div>
          </section>
          <div className="hair-color-container">
            {/* Safe Hair Color Option */}
            <div className="color-option">
              <div className="color-box">
                <h2 className="color-title">Safe hair color</h2>
                <p className="color-description">
                  Easy to care for, no bleaching required, safe for the scalp,
                  less harmful to hair
                </p>
                <Link to={"/booking"}>
                  <button className="book-now-button">
                    600.000 - Book now
                  </button>
                </Link>
              </div>
              <div className="color-swatches">
                <img src={Color1} alt="safe color 1" />
                <img src={Color2} alt="safe color 2" />
                <img src={Color3} alt="safe color 3" />
                <img src={Color4} alt="safe color 4" />
              </div>
            </div>

            {/* Stylish Hair Color Option */}
            <div className="color-option">
              <div className="color-box">
                <h2 className="color-title">Personality hair color</h2>
                <p className="color-description">
                  You may need to bleach your hair to get the desired color.
                  ​Notes after dyeing to keep hair shiny and healthy
                </p>
                <Link to={"/booking"}>
                  {" "}
                  <button className="book-now-button">
                    1.200.000 - Book now
                  </button>
                </Link>
              </div>
              <div className="color-swatches">
                <img src={Color5} alt="stylish color 1" />
                <img src={Color6} alt="stylish color 2" />
                <img src={Color7} alt="stylish color 3" />
                <img src={Color8} alt="stylish color 4" />
              </div>
            </div>

            <LinkRoll
              className="note-button"
              activeClass="active"
              to="tipsaftercolor"
              spy={true}
              smooth={true}
            >
              ​Hair Care Tips After Dyeing
            </LinkRoll>
          </div>

          <section className="faceshape" style={{ marginTop: 30 }}>
            <div id="neutraltone">
              <h2
                style={{
                  textAlign: "center",
                  fontSize: 40,
                  fontFamily: "Brush Script MT",
                  fontWeight: 30,
                }}
              >
                Hair color for neutral skin tones
              </h2>
              <div
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  textWrap: "balance",
                  color: "gray",
                }}
              >
                Neutral skin is very easy to choose hair color. However, if you
                know how to combine modern colors, with elegance like below, it
                will help to elevate your style.
              </div>
            </div>
          </section>
          <div className="hair-color-container">
            {/* Safe Hair Color Option */}
            <div className="color-option">
              <div className="color-box">
                <h2 className="color-title">Safe hair color</h2>
                <p className="color-description">
                  Easy to care for, no bleaching required, safe for the scalp,
                  less harmful to hair
                </p>
                <Link to={"/booking"}>
                  <button className="book-now-button">
                    600.000 - Book now
                  </button>
                </Link>
              </div>
              <div className="color-swatches">
                <img src={Color9} alt="safe color 1" />
                <img src={Color10} alt="safe color 2" />
                <img src={Color11} alt="safe color 3" />
                <img src={Color12} alt="safe color 4" />
              </div>
            </div>

            {/* Stylish Hair Color Option */}
            <div className="color-option">
              <div className="color-box">
                <h2 className="color-title">Personality hair color</h2>
                <p className="color-description">
                  You may need to bleach your hair to get the desired color.
                  ​Notes after dyeing to keep hair shiny and healthy
                </p>
                <Link to={"/booking"}>
                  <button className="book-now-button">
                    1.200.000 - Book now
                  </button>
                </Link>
              </div>
              <div className="color-swatches">
                <img src={Color13} alt="stylish color 1" />
                <img src={Color14} alt="stylish color 2" />
                <img src={Color15} alt="stylish color 3" />
                <img src={Color16} alt="stylish color 4" />
              </div>
            </div>

            <LinkRoll
              className="note-button"
              activeClass="active"
              to="tipsaftercolor"
              spy={true}
              smooth={true}
            >
              ​Hair Care Tips After Dyeing
            </LinkRoll>
          </div>

          <section className="faceshape" style={{ marginTop: 30 }}>
            <div id="warmtone">
              <h2
                style={{
                  textAlign: "center",
                  fontSize: 40,
                  fontFamily: "Brush Script MT",
                  fontWeight: 30,
                }}
              >
                Hair color for warm skin tones
              </h2>
              <div
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  textWrap: "balance",
                  color: "gray",
                }}
              >
                Warm skin tones should avoid overly bright colors that will make
                the skin look dull and darker.
              </div>
            </div>
          </section>
          <div className="hair-color-container">
            <div className="color-option">
              <div className="color-box">
                <h2 className="color-title">Safe hair color</h2>
                <p className="color-description">
                  Easy to care for, no bleaching required, safe for the scalp,
                  less harmful to hair
                </p>
                <Link to={"/booking"}>
                  <button className="book-now-button">
                    600.000 - Book now
                  </button>
                </Link>
              </div>
              <div className="color-swatches">
                <img src={Color17} alt="safe color 1" />
                <img src={Color18} alt="safe color 2" />
                <img src={Color19} alt="safe color 3" />
                <img src={Color20} alt="safe color 4" />
              </div>
            </div>

            <div className="color-option">
              <div className="color-box">
                <h2 className="color-title">Personality hair color</h2>
                <p className="color-description">
                  You may need to bleach your hair to get the desired color.
                  ​Notes after dyeing to keep hair shiny and healthy
                </p>
                <Link to={"/booking"}>
                  <button className="book-now-button">
                    1.200.000 - Book now
                  </button>
                </Link>
              </div>
              <div className="color-swatches">
                <img src={Color21} alt="stylish color 1" />
                <img src={Color22} alt="stylish color 2" />
                <img src={Color23} alt="stylish color 3" />
                <img src={Color24} alt="stylish color 4" />
              </div>
            </div>

            <LinkRoll
              className="note-button"
              activeClass="active"
              to="tipsaftercolor"
              spy={true}
              smooth={true}
            >
              ​Hair Care Tips After Dyeing
            </LinkRoll>
          </div>

          <section
            className="warning"
            style={{ marginTop: 30, background: "#FFF6F1" }}
          >
            <div id="warning-text">
              <h2
                style={{
                  textAlign: "center",
                  fontSize: 40,
                  fontFamily: "Brush Script MT",
                  fontWeight: 30,
                }}
              >
                You should not dye your hair
              </h2>
              <div
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  textWrap: "balance",
                  color: "gray",
                  justifyContent: "center",
                  marginTop: 100,
                  lineHeight: 2,
                }}
              >
                Love your health and protect your hair before beautifying. If
                you have skin conditions, weak hair, brittle hair, or hair that
                is easily irritated, you should treat them before dyeing your
                hair to avoid making the condition worse.
                <div>
                  *People with blood diseases, asthma, and allergies should
                  avoid dyeing their hair.
                </div>
              </div>
            </div>
            <div
              className="warning-button"
              style={{ marginTop: 20, textAlign: "center" }}
            >
              <LinkRoll
                className="note-button"
                activeClass="active"
                to="tipsaftercolor"
                spy={true}
                smooth={true}
              >
                ​Hair Care Tips After Dyeing
              </LinkRoll>
            </div>
          </section>
          <div id="tipsaftercolor" className="hair-care-container">
            <h1 className="title">​Hair Care Tips After Dyeing</h1>
            <p className="subtitle">
              To keep your hair color vibrant and healthy and long-lasting, you
              need to take special care. Here are some important tips you should
              know:
            </p>

            <div className="tips-grid">
              <div className="tip">
                <img src={DongHo} alt="Clock" />
                <p>
                  Avoid water & do not wash within the first 72 hours. Dyed hair
                  needs time to "absorb" the color
                </p>
              </div>
              <div className="tip">
                <img src={Lich} alt="Calendar" />
                <p>
                  Only wash your hair 2-3 times/week, with purple shampoo to
                  moisturize, keep hair healthy, and keep color longer.
                </p>
              </div>
              <div className="tip">
                <img src={HoaChat} alt="Bottle" />
                <p>
                  Do not use shampoos containing sulfates or with mint scent,
                  the product will make hair drier.
                </p>
              </div>
              <div className="tip">
                <img src={VoiSen} alt="Shower" />
                <p>
                  Do not wash your hair with warm or hot water. Only wash with
                  room temperature water.
                </p>
              </div>
              <div className="tip">
                <img src={MaySay} alt="Dryer" />
                <p>
                  Do not use heat when drying your hair, use hair serum or
                  Grooming Tonic to protect your hair.
                </p>
              </div>
              <div className="tip">
                <img src={GoiDau} alt="Hair care" />
                <p>
                  Moisturize your hair with moisturizer, hair mask, or hair oil,
                  and conditioner regularly.
                </p>
              </div>
            </div>
            <Link to={"/booking"}>
              <ButtonComponent text="Book now" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecolorPage;
