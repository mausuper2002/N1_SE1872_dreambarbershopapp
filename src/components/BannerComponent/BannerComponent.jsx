import Banner from "../../assets/images/banner.jpg";
import "./style.css";
const BannerComponent = () => {
  return (
    <div class="banner-container">
      <div class="banner">
        <img src={Banner} alt="Barbershop Banner" />
      </div>
    </div>
  );
};

export default BannerComponent;
