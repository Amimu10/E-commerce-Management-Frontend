import { Link } from "react-router-dom";

const CategoryDataCard = ({data}) => {

    const {_id, product_image, product_price, product_name,} = data;  
    console.log(data);     
      
    return (   
        <div className="card card-compact font-inter shadow-xl my-14">
        <figure>
          <img className="h-[240px] w-full" src={product_image} alt="Book Cover" />   
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_name}</h2>
          <p className="font-inter">Category: </p>
          <p className="font-inter">Author: {product_price}</p> 
          <p className="font-inter">Rating: </p> 
          <div className="card-actions justify-end">   
            <Link  to={`/productDetails/${_id}`} className="bg-[#f33f3f] font-inter font-semibold px-3 py-2 text-white rounded-md">View Details</Link> 
          </div> 
        </div>
      </div>
    );
};

export default CategoryDataCard;