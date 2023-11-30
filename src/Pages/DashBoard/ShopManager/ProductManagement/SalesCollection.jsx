import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SEctionTitle";
import useProducts from "../../../../Hooks/useProducts";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const SalesCollection = () => { 
    const [products] = useProducts(); 
    console.log(products);             

    return ( 
        <div className="overflow-hidden">
           <Helmet> 
             <title>Tech Buddy | Sales Collection</title>  
           </Helmet>
           <SectionTitle 
             heading="Sales Collection" 
           >
           </SectionTitle>

        <div className="overflow-x-auto">
        <table className="table table-zebra px-5">
          <thead
            className="bg-[#D1A054] text-white mb-4 px-5"
            style={{ borderRadius: "15px 15px 0px 0px" }}
          >
            <tr> 
              <th></th>  
              <th>Product Id</th>     
              <th>PRODUCT IMAGE</th>   
              <th>PRODUCT NAME</th>  
              <th>PRODUCT QUANTITY</th>         
              <th>DISCOUNT</th>    
              <th>SELLING PRICE</th>  
              <th>SOLD TO CUSTOMER</th>  
            </tr>
          </thead> 
          <tbody>
            {products.length > 0 ? (    
              products.map((item, index) => ( 
                <tr key={item._id}> 
                  <th>{index + 1}</th>
                  <td>
                    {item._id}
                  </td>
                  <td>
                    <div className="flex items-center gap-3"> 
                      <div className="avatar">
                        <div className="mask mask-squircle w-[75px]"> 
                          <img  
                            src={item.product_image}   
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-[#737373] text-base font-inter font-normal">
                    {item.product_name} 
                  </td>
                  <td className="text-[#737373] text-base font-inter font-normal">
                    {item.product_quantity} 
                  </td>
                  <td className="text-[#737373] text-base font-inter font-normal">
                   $ {item.discount}
                  </td> 
                  <td className="text-[#737373] text-base font-inter font-normal">
                   $ {item.product_price}
                  </td> 
                  <td className="text-[#737373] text-base font-inter font-normal">    
                  <Link to={`/dashboard/checkout/checkoutProduct/${item._id}`}>      
                   <button 
                      className=" p-2 flex items-center justify-center bg-green-600 rounded-md text-sm text-white"
                    >
                     Sold To CUstomer
                    </button>
                   </Link>
                  </td> 
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  There is no data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default SalesCollection;