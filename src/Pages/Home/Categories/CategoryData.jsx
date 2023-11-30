
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CategoryData = () => {
  // const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { category } = useParams(); 
  const [categories, setCategories] = useState(); 

  useEffect(() => {  
    axiosPublic.get(`updateproducts/${category}`)    
      .then((res) => { 
        setCategories(res.data); 
      })
      .catch((err) => { 
        console.error(err); 
      });
  }, [    axiosPublic
    , category]);  

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-[1200px] lg:px-5 px-4 my-8">
        {categories?.map((category) => (
          <>
            <div className="card card-compact font-inter shadow-xl my-14">
              <figure>
                <img
                  className="h-[240px] w-full"
                  src={category.product_image}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category.product_name}</h2>
                <p className="font-inter">Category: </p>
                <p className="font-inter">Author: {category.product_price}</p>
                <p className="font-inter">Rating: </p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/productDetails/${category._id}`}
                    className="bg-[#f33f3f] font-inter font-semibold px-3 py-2 text-white rounded-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CategoryData;


// import React from 'react';

// const CategoryData = () => {
//   return (
//     <div className="my-12">
//       hello 
//     </div>
//   );
// };

// export default CategoryData;