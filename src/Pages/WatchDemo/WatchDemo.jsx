// import { Helmet } from "react-helmet-async";
// import SectionTitle from "../../Components/SEctionTitle";

// const WatchDemo = () => {
//   return (
//     <div className="text-center mt-32">
//       <Helmet>
//         <title>Tech Buddy | Watc Demo</title>
//       </Helmet>
//       <SectionTitle
//         heading="Watche Demo" 
//         subHeading="Start your journey" 
//       ></SectionTitle>
//       <video className="h-[450px] mx-auto rounded-lg" controls autoPlay>
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/OzMCn_2sImQ?si=PSJZUPFGpWxMVFE2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default WatchDemo;


// import { Helmet } from "react-helmet-async";
// import SectionTitle from "../../Components/SEctionTitle";

// const WatchDemo = () => {
//   const openVideoInNewWindow = () => {
//     window.open("https://www.youtube.com/embed/OzMCn_2sImQ?si=PSJZUPFGpWxMVFE2", "_blank");
//   };

//   return (
//     <div className="text-center mt-32 mb-8">
//       <Helmet>
//         <title>Tech Buddy | Watch Demo</title>
//       </Helmet>
//       <SectionTitle
//         heading="Watch Demo" 
//         subHeading="Start your journey" 
//       ></SectionTitle>
//       <button onClick={openVideoInNewWindow} className="cursor-pointer focus:outline-none">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl50ksyRfoD1Iffy2Fq6kp34qsCnBaT37x4A&usqp=CAU"
//           alt="Watch Demo"
//         />
//       </button>
//     </div>
//   );
// };

// export default WatchDemo;


import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SEctionTitle";
// import SectionTitle from "../../Components/SectionTitle";
import AOS from "aos"; 
AOS.init(); 

const WatchDemo = () => {
  const openVideoInNewWindow = () => {
    window.open("https://www.youtube.com/embed/OzMCn_2sImQ?si=PSJZUPFGpWxMVFE2", "_blank");
  };

  return (
    <div data-aos="zoom-in-up" className="text-center mt-32 mb-8">
      <Helmet>
        <title>Tech Buddy | Watch Demo</title>
      </Helmet>
      <SectionTitle heading="Watch Demo" subHeading="Start your journey" />
      <button onClick={openVideoInNewWindow} className="relative focus:outline-none">
        <div className="group overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
          <img
            className="object-cover object-center w-[450px] h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl50ksyRfoD1Iffy2Fq6kp34qsCnBaT37x4A&usqp=CAU"
            alt="Watch Demo"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white opacity-80 transform scale-0 group-hover:scale-100 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
};

export default WatchDemo;
