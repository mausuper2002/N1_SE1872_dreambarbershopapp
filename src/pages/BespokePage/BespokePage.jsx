import React, { useState } from "react";
import Header from "../../components/HeaderComponent/HeaderComponent";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import "./Bespoke.css";
import Footer from "../../components/FooterComponent/FooterComponent";
import ThinHair from "../../assets/images/tocmong.webp";
import MediumHair from "../../assets/images/tocvua.webp";
import ThickHair from "../../assets/images/tocday.webp";
import Formal from "../../assets/images/formal.webp";
import Comfortable from "../../assets/images/comfortable.webp";
import Sport from "../../assets/images/sport.webp";
import Daily from "../../assets/images/daily.webp";
import Twotimes from "../../assets/images/twotimes.webp";
import Occasion from "../../assets/images/Occation.webp";
import StraightHair from "../../assets/images/straighhair.webp";
import WavyHair from "../../assets/images/wavyhair.webp";
import CurlyHair from "../../assets/images/curlyhair.webp";
import RoundFace from "../../assets/images/roundface.webp";
import DiamondFace from "../../assets/images/diamondface.webp";
import LongFace from "../../assets/images/longface.webp";
import SquareFace from "../../assets/images/squareface.webp";
import OvalFace from "../../assets/images/ovalface.webp";
import TriangleFace from "../../assets/images/triagleface.webp";
import CurlySlickBack from "../../assets/images/curlyslickback.webp";
import Buzzcut from "../../assets/images/buzzcut.webp";
import Sideswept from "../../assets/images/sidewept.webp";
import LayerTextured from "../../assets/images/layertextured.webp";
import CropTexture from "../../assets/images/croptexture.webp";
import LayerCurly from "../../assets/images/layercurly.webp";
import MiddlePart from "../../assets/images/middlepart.webp";
import IvyLeague from "../../assets/images/IvyLeague.webp";
import SidePartQuiff from "../../assets/images/sidepartquiff.webp";
import MordenSidePart from "../../assets/images/mordensidepart.webp";
import CurlyMullet from "../../assets/images/curlymullet.webp";
import LongCombover from "../../assets/images/longcombower.webp";
import MordenQuiff from "../../assets/images/mordernquift.webp";
import ClassicSidePart from "../../assets/images/classicsidepart.webp";
import CurlyPerm from "../../assets/images/curlyperm.webp";
import GentleMullet from "../../assets/images/gentlemullet.webp";
import Undercut from "../../assets/images/undercut.webp";
import CropLowFade from "../../assets/images/croplowfade.webp";
import FauxHawk from "../../assets/images/fauxhawk.webp";
import IvyLeauge2 from "../../assets/images/ivyleague2.webp";
import SidePartBleach from "../../assets/images/sidepartbleach.webp";
import MiddlePart2 from "../../assets/images/middlepart2.webp";
import SidePartWavy from "../../assets/images/sidepartwavy.webp";
import MessyCrop from "../../assets/images/messycrop.webp";
import { Link } from "react-scroll";

function BarberCard({ image, title, barber }) {
  return (
    <div className="barber-card">
      <div className="barber-image">
        <img src={image} alt={title} />
      </div>
      <div className="barber-details">
        <h3>{title}</h3>
        <p>{barber}</p>
        <div style={{ marginTop: "10px" }}>
          <ButtonComponent text="Book now" />
        </div>
      </div>
    </div>
  );
}

const BespokePage = () => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (choice) => {
    setSelected(choice);
  };
  return (
    <>
      <div className="bespokepage">
        <Header />
        <BannerComponent />
        <section className="section-bespoke">
          <section className="section-bespoke-intro">
            <div className="left-intro">
              <h2>Men, face shape matters</h2>
              <h2>Identify the important factors in choosing a hairstyle</h2>
              <div className="button">
                <div className="left-button">
                  <ButtonComponent text="Test Style" />
                </div>
                <div className="right-button">
                  <ButtonComponent text="Test Color" />
                </div>
              </div>
            </div>
            <div className="right-intro">
              <ul>
                <li>
                  There are many face shapes: round, oval, square or diamond. A
                  suitable hairstyle will help to balance out the face shape and
                  improve some of the facial flaws.
                </li>
                <li>
                  Another factor to consider is hair density. Although there are
                  some beautiful hairstyles that you love, not all of them are
                  suitable, because each hairstyle requires different hair
                  densities, as well as hard, soft, curly, bouncy or frizzy
                  hair.
                </li>
                <li>
                  You can take the following test to find out which hairstyle
                  suits your face. Or go to Dream barbershop for more accurate
                  advice from skilled barbers with the "Bespoke Barbering"
                  service
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
              Hair thickness
            </h2>

            <section style={{ marginBottom: 30 }}>
              <div className="img-hair">
                <img src={ThinHair} alt="Thin Hair" />
                <img src={MediumHair} alt="Thin Hair" />
                <img src={ThickHair} alt="Thin Hair" />
              </div>
            </section>

            <section className="button-hair">
              <div
                className={`option ${selected === "thin" ? "selected" : ""}`}
                onClick={() => handleSelection("thin")}
              >
                <Link
                  className={`hair-btn ${selected === "thin" ? "active" : ""}`}
                  activeClass="active"
                  to="fashion"
                  spy={true}
                  smooth={true}
                >
                  Thin hair
                </Link>
              </div>

              <div
                className={`option ${selected === "medium" ? "selected" : ""}`}
                onClick={() => handleSelection("medium")}
              >
                <Link
                  className={`hair-btn ${
                    selected === "medium" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="fashion"
                  spy={true}
                  smooth={true}
                >
                  Medium hair
                </Link>
              </div>

              <div
                className={`option ${selected === "thick" ? "selected" : ""}`}
                onClick={() => handleSelection("thick")}
              >
                <Link
                  className={`hair-btn ${selected === "thick" ? "active" : ""}`}
                  activeClass="active"
                  to="fashion"
                  spy={true}
                  smooth={true}
                >
                  Thick hair
                </Link>
              </div>
            </section>
            <section>
              <div className="text-hair" style={{ marginTop: 20 }}>
                <span>
                  Hair is sparse, thin, and the scalp is easily visible.
                </span>
                <span>Medium hair, little scalp exposed.</span>
                <span>Thick hair, no visible scalp</span>
              </div>
            </section>
          </section>
          <section className="advise-step" id="fashion">
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
              Fashion style
            </h2>

            <section>
              <div className="img-hair" style={{ marginBottom: 30 }}>
                <img src={Formal} alt="Formal" />
                <img src={Comfortable} alt="Comfortable" />
                <img src={Sport} alt="Sport" />
              </div>
            </section>

            <section className="button-hair">
              <div
                className={`option ${selected === "formal" ? "selected" : ""}`}
                onClick={() => handleSelection("formal")}
              >
                <Link
                  className={`hair-btn ${
                    selected === "formal" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="freguency"
                  spy={true}
                  smooth={true}
                >
                  Formal
                </Link>
              </div>

              <div
                className={`option ${
                  selected === "comfortable" ? "selected" : ""
                }`}
                onClick={() => handleSelection("comfortable")}
              >
                <Link
                  className={`hair-btn ${
                    selected === "comfortable" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="freguency"
                  spy={true}
                  smooth={true}
                >
                  Comfortable
                </Link>
              </div>

              <div
                className={`option ${selected === "sport" ? "selected" : ""}`}
                onClick={() => handleSelection("sport")}
              >
                <Link
                  className={`hair-btn ${selected === "sport" ? "active" : ""}`}
                  activeClass="active"
                  to="freguency"
                  spy={true}
                  smooth={true}
                >
                  Sport
                </Link>
              </div>
            </section>
            <section>
              <div className="text-hair" style={{ marginTop: 20 }}>
                <span>
                  For office guys, often wear trousers, shirts, polo or suite
                </span>
                <span>Casual style, t-shirt, jeans, relaxed and low-key</span>
                <span>For men who prioritize strength and sportiness</span>
              </div>
            </section>
          </section>
          <section id="freguency" className="advise-step">
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
                <img src={Twotimes} alt="Thin Hair" />
                <img src={Occasion} alt="Thin Hair" />
              </div>
            </section>

            <section className="button-hair">
              <div
                className={`option ${selected === "daily" ? "selected" : ""}`}
                onClick={() => handleSelection("daily")}
                style={{ paddingLeft: 60 }}
              >
                <Link
                  className={`hair-btn ${selected === "daily" ? "active" : ""}`}
                  activeClass="active"
                  to="hairshape"
                  spy={true}
                  smooth={true}
                >
                  Daily
                </Link>
              </div>

              <div
                className={`option ${
                  selected === "twotimes" ? "selected" : ""
                }`}
                onClick={() => handleSelection("twotimes")}
                style={{ paddingLeft: 70 }}
              >
                <Link
                  className={`hair-btn ${
                    selected === "twotimes" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="hairshape"
                  spy={true}
                  smooth={true}
                >
                  2-3 times/week
                </Link>
              </div>

              <div
                className={`option ${
                  selected === "occasion" ? "selected" : ""
                }`}
                onClick={() => handleSelection("occasion")}
                style={{ paddingLeft: 30 }}
              >
                <Link
                  className={`hair-btn ${
                    selected === "occasion" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="hairshape"
                  spy={true}
                  smooth={true}
                >
                  On occasion
                </Link>
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
          <section id="hairshape" className="advise-step">
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
              Hair shape
            </h2>

            <section>
              <div className="img-hair" style={{ marginBottom: 30 }}>
                <img src={StraightHair} alt="Thin Hair" />
                <img src={WavyHair} alt="Thin Hair" />
                <img src={CurlyHair} alt="Thin Hair" />
              </div>
            </section>

            <section className="button-hair">
              <div
                className={`option ${
                  selected === "straight" ? "selected" : ""
                }`}
                onClick={() => handleSelection("straight")}
                style={{ paddingRight: 50 }}
              >
                <Link
                  className={`hair-btn ${
                    selected === "straight" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="faceshape"
                  spy={true}
                  smooth={true}
                >
                  Straight Hair
                </Link>
              </div>

              <div
                className={`option ${selected === "wavy" ? "selected" : ""}`}
                onClick={() => handleSelection("wavy")}
                style={{ paddingRight: 50 }}
              >
                <Link
                  className={`hair-btn ${selected === "wavy" ? "active" : ""}`}
                  activeClass="active"
                  to="faceshape"
                  spy={true}
                  smooth={true}
                >
                  Wavy Hair
                </Link>
              </div>

              <div
                className={`option ${selected === "curly" ? "selected" : ""}`}
                onClick={() => handleSelection("curly")}
                style={{ paddingRight: 30 }}
              >
                <Link
                  className={`hair-btn ${selected === "curly" ? "active" : ""}`}
                  activeClass="active"
                  to="faceshape"
                  spy={true}
                  smooth={true}
                >
                  Curly Hair
                </Link>
              </div>
            </section>
            <section>
              <div className="text-hair" style={{ marginTop: 20 }}>
                <span>Hair texture is straight, stiff, slightly pointed</span>
                <span>Wavy, bouncy, wavy hair</span>
                <span>Curly hair, prone to tangles and frizz</span>
              </div>
            </section>
          </section>
          <section id="faceshape" className="advise-step">
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
              Face shape
            </h2>

            <section>
              <div className="img-hair" style={{ marginBottom: 30 }}>
                <img src={RoundFace} alt="Thin Hair" />
                <img src={DiamondFace} alt="Thin Hair" />
                <img src={LongFace} alt="Thin Hair" />
              </div>
            </section>

            <section className="button-hair">
              <div
                className={`option ${selected === "round" ? "selected" : ""}`}
                onClick={() => handleSelection("round")}
              >
                <Link
                  className={`hair-btn ${selected === "round" ? "active" : ""}`}
                  activeClass="active"
                  to="roundface"
                  spy={true}
                  smooth={true}
                >
                  Round face
                </Link>
              </div>

              <div
                className={`option ${selected === "diamond" ? "selected" : ""}`}
                onClick={() => handleSelection("diamond")}
              >
                <Link
                  className={`hair-btn ${
                    selected === "diamond" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="diamondface"
                  spy={true}
                  smooth={true}
                >
                  Diamond Face
                </Link>
              </div>

              <div
                className={`option ${selected === "long" ? "selected" : ""}`}
                onClick={() => handleSelection("long")}
              >
                <Link
                  className={`hair-btn ${selected === "long" ? "active" : ""}`}
                  activeClass="active"
                  to="longface"
                  spy={true}
                  smooth={true}
                >
                  Long face
                </Link>
              </div>
            </section>
            <section>
              <div className="text-hair" style={{ marginTop: 20 }}>
                <span>
                  The distance from your cheekbones to your chin is
                  approximately equal to the length of your face.
                </span>
                <span>You have high cheekbones and a wide jawline</span>
                <span>
                  The length of the face is much longer than the width.
                </span>
              </div>
            </section>
            <section style={{ marginTop: 50, marginBottom: 30 }}>
              <div className="img-hair">
                <img src={SquareFace} alt="Thin Hair" />
                <img src={OvalFace} alt="Thin Hair" />
                <img src={TriangleFace} alt="Thin Hair" />
              </div>
            </section>

            <section className="button-hair">
              <div
                className={`option ${selected === "square" ? "selected" : ""}`}
                onClick={() => handleSelection("square")}
              >
                <Link
                  className={`hair-btn ${
                    selected === "square" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="squareface"
                  spy={true}
                  smooth={true}
                >
                  Square face
                </Link>
              </div>

              <div
                className={`option ${selected === "oval" ? "selected" : ""}`}
                onClick={() => handleSelection("oval")}
              >
                <Link
                  className={`hair-btn ${selected === "oval" ? "active" : ""}`}
                  activeClass="active"
                  to="ovalface"
                  spy={true}
                  smooth={true}
                >
                  Oval face
                </Link>
              </div>

              <div
                className={`option ${selected === "triagle" ? "selected" : ""}`}
                onClick={() => handleSelection("triagle")}
              >
                <Link
                  className={`hair-btn ${
                    selected === "triagle" ? "active" : ""
                  }`}
                  activeClass="active"
                  to="triangleface"
                  spy={true}
                  smooth={true}
                >
                  Triangle face
                </Link>
              </div>
            </section>
            <section>
              <div className="text-hair" style={{ marginTop: 20 }}>
                <span>
                  Facial length and horizontal direction are approximately
                  equal, jaw is angular
                </span>
                <span>
                  Ideal face, when the round face has a length proportional to
                  the width
                </span>
                <span>Forehead length is less than jaw width</span>
              </div>
            </section>
          </section>

          <div>
            <section className="faceshape" style={{ marginTop: 30 }}>
              <div id="roundface">
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: 40,
                    fontFamily: "Brush Script MT",
                    fontWeight: 30,
                  }}
                >
                  Round face
                </h2>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    textWrap: "balance",
                    color: "gray",
                  }}
                >
                  With a round face, choosing a hairstyle with length and volume
                  on the top is a great idea. Layers and varied textures will
                  help create highlights, and neat sides will help your face
                  look slimmer and more balanced.
                </div>
              </div>
            </section>
            <div className="barber-container">
              <BarberCard
                image={CurlySlickBack}
                title="Curly Slick Back"
                barber="Barber Phát - Le Van Viet"
              />
              <BarberCard
                image={Buzzcut}
                title="Buzzcut"
                barber="Barber Thủy - Le Van Viet"
              />
              <BarberCard
                image={Sideswept}
                title="Side Swept"
                barber="Barber Phát - Phan Van Tri"
              />
              <BarberCard
                image={LayerTextured}
                title="Layer Textured"
                barber="Barber Béo - Phan Van Tri"
              />
            </div>
          </div>
          <div>
            <section className="faceshape">
              <div id="diamondface">
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: 40,
                    fontFamily: "Brush Script MT",
                    fontWeight: 30,
                  }}
                >
                  Diamond Face
                </h2>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    textWrap: "balance",
                    color: "gray",
                  }}
                >
                  To accentuate a diamond-shaped face, choose a men's hairstyle
                  that adds width to the forehead. Hairstyles that add volume to
                  the top will help balance out the facial features, creating a
                  harmonious look.
                </div>
              </div>
            </section>
            <div className="barber-container">
              <BarberCard
                image={CropTexture}
                title="Crop Texture"
                barber="Barber Phát - Le Van Viet"
              />
              <BarberCard
                image={LayerCurly}
                title="Layer Curly"
                barber="Barber Thủy - Le Van Viet"
              />
              <BarberCard
                image={MiddlePart}
                title="Middle Part"
                barber="Barber Phát - Phan Van Tri"
              />
              <BarberCard
                image={IvyLeague}
                title="Ivy League"
                barber="Barber Béo - Phan Van Tri"
              />
            </div>
          </div>
          <div>
            <section className="faceshape">
              <div id="longface">
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: 40,
                    fontFamily: "Brush Script MT",
                    fontWeight: 30,
                  }}
                >
                  Long face
                </h2>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    textWrap: "balance",
                    color: "gray",
                  }}
                >
                  For a long face, you should choose a hairstyle that is not too
                  high on top and not too short on the sides. Try a
                  medium-length hairstyle with bangs or side bangs, with lots of
                  layers to create volume and texture.
                </div>
              </div>
            </section>
            <div className="barber-container">
              <BarberCard
                image={SidePartQuiff}
                title="Side Part Quiff"
                barber="Barber Phát - Le Van Viet"
              />
              <BarberCard
                image={MordenSidePart}
                title="Morden Side Part"
                barber="Barber Thủy - Le Van Viet"
              />
              <BarberCard
                image={CurlyMullet}
                title="Curly Mullet"
                barber="Barber Phát - Phan Van Tri"
              />
              <BarberCard
                image={LongCombover}
                title="Long Combover"
                barber="Barber Béo - Phan Van Tri"
              />
            </div>
          </div>
          <div>
            <section className="faceshape">
              <div id="squareface">
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: 40,
                    fontFamily: "Brush Script MT",
                    fontWeight: 30,
                  }}
                >
                  Square face
                </h2>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    textWrap: "balance",
                    color: "gray",
                  }}
                >
                  With a square face, you will look very masculine and suitable
                  for men's hairstyles with short and neat sides.
                </div>
              </div>
            </section>
            <div className="barber-container">
              <BarberCard
                image={MordenQuiff}
                title="Morden Quiff"
                barber="Barber Phát - Le Van Viet"
              />
              <BarberCard
                image={ClassicSidePart}
                title="Classic Side Part"
                barber="Barber Thủy - Le Van Viet"
              />
              <BarberCard
                image={CurlyPerm}
                title="Curly Perm"
                barber="Barber Phát - Phan Van Tri"
              />
              <BarberCard
                image={GentleMullet}
                title="Gentle Mullet"
                barber="Barber Béo - Phan Van Tri"
              />
            </div>
          </div>
          <div>
            <section className="faceshape">
              <div id="ovalface">
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: 40,
                    fontFamily: "Brush Script MT",
                    fontWeight: 30,
                  }}
                >
                  Oval face
                </h2>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    textWrap: "balance",
                    color: "gray",
                  }}
                >
                  With an oval face, you can try almost any men’s hairstyle.
                  However, a classic hairstyle with short, neat sides and long
                  top will always suit you.
                </div>
              </div>
            </section>
            <div className="barber-container">
              <BarberCard
                image={Undercut}
                title="Undercut"
                barber="Barber Phát - Le Van Viet"
              />
              <BarberCard
                image={CropLowFade}
                title="Crop Low Fade"
                barber="Barber Thủy - Le Van Viet"
              />
              <BarberCard
                image={FauxHawk}
                title="Faux Hawk"
                barber="Barber Phát - Phan Van Tri"
              />
              <BarberCard
                image={IvyLeauge2}
                title="Ivy League"
                barber="Barber Béo - Phan Van Tri"
              />
            </div>
          </div>
          <div id="triangleface">
            <section className="faceshape">
              <div>
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: 40,
                    fontFamily: "Brush Script MT",
                  }}
                >
                  Triangle face
                </h2>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    textWrap: "balance",
                    color: "gray",
                  }}
                >
                  For a triangular face with wide forehead and pointed chin, a
                  short hairstyle helps to highlight the angular lines of the
                  face, hairstyles with side-swept bangs are also a good choice.
                </div>
              </div>
            </section>
            <div className="barber-container">
              <BarberCard
                image={SidePartBleach}
                title="Side Part Bleach"
                barber="Barber Phát - Le Van Viet"
              />
              <BarberCard
                image={MiddlePart2}
                title="Middle Part"
                barber="Barber Thủy - Le Van Viet"
              />
              <BarberCard
                image={SidePartWavy}
                title="Side Part Wavy"
                barber="Barber Phát - Phan Van Tri"
              />
              <BarberCard
                image={MessyCrop}
                title="Messy Crop"
                barber="Barber Béo - Phan Van Tri"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BespokePage;
