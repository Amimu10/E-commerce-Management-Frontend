
// Import Swiper React components
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../../assets/banner/1.avif"
import img2 from "../../../assets/banner/2.avif"
import img3 from "../../../assets/banner/3.avif"
import img4 from "../../../assets/banner/4.avif"
import img5 from "../../../assets/banner/5.avif"
const Banner = () => {
    const imageStyle = {
        maxHeight: "570px", // Set the desired max height here
    };
    return (
        <Carousel className=" mt-[72px]"> 
                <div>
                <img src={img1} style={imageStyle}/> 
                
                </div>
                <div>
                <img src={img2} style={imageStyle}/>
                </div>
                <div>
                <img src={img3} style={imageStyle}/>
                </div>
                <div>
                <img src={img4} style={imageStyle}/>
                </div>
                <div>
                <img src={img5} style={imageStyle}/>
                </div>
            </Carousel>
    );
};

export default Banner;

