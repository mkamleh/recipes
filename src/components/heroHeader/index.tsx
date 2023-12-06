import "./index.css";
import heroImage from "../../assets/heroImage.png";

const HeroHeader = () => {
  return (
    <div className="hero-Container">
      <div className="row hero-wrapper">
        <div className="hero-title col-lg-6">
          <h1>Best Food Which Makes You Hungry </h1>
          <h4>
            Exploring the world of cuisine is like embarking on a flavorful
            adventure. Testy foods add a thrilling twist, turning every bite
            into a delightful journey for the taste buds.
          </h4>
        </div>
        <div className="hero-image-wrapper col-lg-6">
          <img src={heroImage} title="hero" alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
