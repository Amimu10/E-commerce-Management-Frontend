import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../../../src/assets/home/01.jpg"
import slide2 from "../../../../src/assets/home/02.jpg"
import slide3 from "../../../../src/assets/home/03.png"
import slide4 from "../../../../src/assets/home/04.jpg"
import slide5 from "../../../../src/assets/home/05.png"
import slide6 from "../../../../src/assets/home/06.png"
import SectionTitle from '../../../Components/SEctionTitle';
// import SectionTitle from '../../component/SectionTitle';

const Category = () => {
    return (
      <section className="px-5 max-w-[1200px] mx-auto"> 
      <SectionTitle 
        subHeading={"---From 11:00am to 10:00pm---"} 
        heading={"ORDER ONLINE"}  
      ></SectionTitle>
  <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]} 
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">Salads</h3> 
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">Soups</h3> 
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">pizzas</h3> 

        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">desserts</h3> 

        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">Salads</h3> 
        </SwiperSlide>
        <SwiperSlide><img src={slide6} alt="" />
        <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">Salads</h3> 
        </SwiperSlide>
      </Swiper>
      </section>
    );
};

export default Category;