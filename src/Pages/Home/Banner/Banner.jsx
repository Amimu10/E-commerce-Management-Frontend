
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../../assets/banner/1.avif";
import img2 from "../../../assets/banner/2.avif";
import img3 from "../../../assets/banner/3.avif";
import img4 from "../../../assets/banner/4.avif";
import img5 from "../../../assets/banner/5.avif";
import { Link } from "react-router-dom";

const Banner = () => {
  const containerStyle = {
    position: "relative",
    maxHeight: "570px", // Set the desired max height here
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "16px",
  };


  const textStyle = {
    fontSize: "18px",
    marginBottom: "24px",
  };

  return (
    <Carousel className="mt-[72px]">
   <div style={containerStyle}>
        <img src={img1} alt="slide-1" style={imageStyle} />
        <div style={overlayStyle}>
        <h2 style={headingStyle}>Discover a World of Tech Innovations</h2>
          <p style={textStyle}>
            Explore a curated selection of high-quality products that cater to
            your needs and desires.
          </p>
          <Link to="">
          <button className="w-full md:w-auto text-base hover:bg-secondary p-2 rounded-md">
           Browse Products
        </button>
          </Link>
        </div>
      </div>
      <div style={containerStyle}>
        <img src={img2} alt="slide-2" style={imageStyle} />
        <div style={overlayStyle}>
          <p>Shop the Latest Gadgets and Accessories</p>
          <p style={textStyle}>
          
          </p>
        </div>
      </div>
      <div style={containerStyle}>
        <img src={img3} alt="slide-3" style={imageStyle} />
        <div style={overlayStyle}>
          <p>Empower Your Business with Cutting-Edge Solutions</p>
        </div>
      </div>
      <div style={containerStyle}>
        <img src={img4} alt="slide-4" style={imageStyle} />
        <div style={overlayStyle}>
          <p>Join Our Tech Community for Exclusive Offers</p>
        </div>
      </div>
      <div style={containerStyle}>
        <img src={img5} alt="slide-5" style={imageStyle} />
        <div style={overlayStyle}>
          <p>Transform Your Lifestyle with Smart Technologies</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
