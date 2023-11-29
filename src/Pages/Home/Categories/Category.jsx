// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import slide1 from "../../../../src/assets/home/01.jpg"
// import slide2 from "../../../../src/assets/home/02.jpg"
// import slide3 from "../../../../src/assets/home/03.png"
// import slide4 from "../../../../src/assets/home/04.jpg"
// import slide5 from "../../../../src/assets/home/05.png"
// import slide6 from "../../../../src/assets/home/06.png"
// import SectionTitle from '../../../Components/SEctionTitle';
// // import SectionTitle from '../../component/SectionTitle';

// const Category = () => {
//     return (
//       <section className="px-5 max-w-[1200px] mx-auto">
//       <SectionTitle
//         subHeading={"---From 11:00am to 10:00pm---"}
//         heading={"ORDER ONLINE"}
//       ></SectionTitle>
//   <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         centeredSlides={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//         <img src={slide1} alt="" />
//         <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">Salads</h3>
//         </SwiperSlide>
//         <SwiperSlide><img src={slide2} alt="" />
//         <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">Soups</h3>
//         </SwiperSlide>
//         <SwiperSlide><img src={slide3} alt="" />
//         <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">pizzas</h3>

//         </SwiperSlide>
//         <SwiperSlide><img src={slide4} alt="" />
//         <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">desserts</h3>

//         </SwiperSlide>
//         <SwiperSlide><img src={slide5} alt="" />
//         <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">Salads</h3>
//         </SwiperSlide>
//         <SwiperSlide><img src={slide6} alt="" />
//         <h3 className="font-inter lg:text-[32px] md:text-[20px] -mt-16 text-center text-white">Salads</h3>
//         </SwiperSlide>
//       </Swiper>
//       </section>
//     );
// };

// export default Category;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }, []);

  if (!Array.isArray(categories)) {
    console.error("Data is not in the expected format:", categories);
    return null;
  }
  return (
    <div className="max-w-[1200px] mx-auto lg:px-5 px-4">
      <div className="text-center font-inter mt-12 mb-8">
        <h2 className="text-3xl font-semibold">Our Latest Category</h2>
        <p className="text-base font-inter mt-3">
          Dive into our freshest tech innovations, thoughtfully curated to spark
          your curiosity and elevate your tech experience. From cutting-edge
          gadgets to revolutionary software, we have something for every tech
          enthusiast. Explore the future with Tech Buddy – where innovation
          meets excitement.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="card mx-auto shadow-md border cursor-pointer">
              <figure className="overflow-hidden">
                <img
                  className="h-[300px] object-cover w-full"
                  src={category.image}
                  alt=""
                />
              </figure>
              <div className="p-2">
                <h3 className="text-lg text-pink-700  font-semibold font-inter text-center">
                  {category.category}
                </h3>
              </div>
              <Link to={`/showCategory/${category.category}`}> 
                <button className=" bg-[#f33f3f] w-full font-inter font-medium p-2 rounded-md text-white">
                  {" "}
                  See Products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
