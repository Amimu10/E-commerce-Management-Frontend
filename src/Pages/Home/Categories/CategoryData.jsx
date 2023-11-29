

// import { useLoaderData } from "react-router-dom";
// import CategoryDataCard from "./CategoryDataCard";
// // import CategoryDataCard from "./CategoryDataCard";

// const CategoryData = () => {
//     const categorydata = useLoaderData();    
//     console.log(categorydata._id);  

//     return ( 
//         <div>
//            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-[1200px] lg:px-5 px-4 my-8">
//            {
//                 categorydata?.map(data => <CategoryDataCard key={data._id} data={data}></CategoryDataCard>)
//             }
//            </div>
//         </div>
//     );
// };

// export default CategoryData; 


















import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";

const CategoryData = () => {
  const axiosSecure = useAxiosSecure();
  const { category } = useParams(); 
  const [categories, setCategories] = useState(); 

  useEffect(() => {  
    axiosSecure  
      .get(`/updateproducts/${category}`)   
      .then((res) => {
        setCategories(res.data); 
      })
      .catch((err) => { 
        console.error(err); 
      });
  }, [axiosSecure, category]);  

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
                  {/* <Link
                    to={`/productDetails/${category._id}`}
                    className="bg-[#f33f3f] font-inter font-semibold px-3 py-2 text-white rounded-md"
                  >
                    View Details
                  </Link> */}
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


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import useAxiosSecure from "../../../Hooks/UseAxiosSecure";

// const CategoryData = () => {
//   const axiosSecure = useAxiosSecure();
//   const { category } = useParams();
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     axiosSecure
//       .get(`/updateproducts/${category}`)
//       .then((res) => {
//         setCategories(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err);
//         setLoading(false);
//       });
//   }, [axiosSecure, category]);

//   if (loading) {
//     return <p>Loading...</p>; // You can replace this with a loading spinner or other UI indication
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>; // Display an error message
//   }

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-[1200px] lg:px-5 px-4 my-8">
//         {categories.map((category) => (
//           <div key={category._id} className="card card-compact font-inter shadow-xl my-14">
//             <figure>
//               <img className="h-[240px] w-full" src="" alt="" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title"></h2>
//               <p className="font-inter">Category: </p>
//               <p className="font-inter">Author:</p>
//               <p className="font-inter">Rating: </p>
//               <div className="card-actions justify-end">
//                 {/* <Link
//                   to={`/productDetails/${category._id}`}
//                   className="bg-[#f33f3f] font-inter font-semibold px-3 py-2 text-white rounded-md"
//                 >
//                   View Details
//                 </Link> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryData;
