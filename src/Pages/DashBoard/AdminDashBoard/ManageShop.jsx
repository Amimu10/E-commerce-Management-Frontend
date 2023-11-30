
import { RiDeleteBin5Line } from "react-icons/ri";
import useShop from "../../../Hooks/useShop";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageShops = () => { 
  const [shops,, refetch] = useShop();  
  console.log(shops);  
 const axiosSecure = useAxiosSecure(); 

  const handleDeleteProduct = (item) => { 
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!", 
      icon: "warning",
      showCancelButton: true, 
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",  
    }).then( async(result) => { 
      if (result.isConfirmed) {  
          const res = await axiosSecure.delete(`/shops/${item._id}`);    
          console.log(res.data); 
          if (res.data.deletedCount > 0) {    
            console.log(res.data);
            toast.success("Successfully Deleted!");  
            refetch();
          }
     
      }
    });
  };



  return (
    <div>
      <div className="text-center">
        <p className="text-[#D99904] font-inter text-[20px] font-normal italic my-5">
          {" "}
          ---Hurry Up!---
        </p>
        <h3 className="font-inter text-[#151515] text-[40px] font-normal">
          MANAGE ALL ITEMS
        </h3>
      </div>
      <div>
        <h3 className="font-cinzel text-[#151515] text-[32px] font-bold"></h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead
            className="bg-[#D1A054] text-white mb-4"
            style={{ borderRadius: "15px 15px 0px 0px" }}
          >
            <tr>
              <th></th>
              <th>SHOP LOGO</th>
              <th>SHOP NAME</th> 
              <th>Product Limit</th>
              <th>Shop Description</th>
              <th>Send Notice</th>
            </tr>
          </thead> 
          <tbody>
            {shops.length > 0 ? (
              shops.map((item, index) => ( 
                <tr key={item._id}> 
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-[75px]">
                          <img
                            src={item.logo} 
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-[#737373] text-base font-inter font-normal">
                    {item.name} 
                  </td>
                  <td className="text-[#737373] text-base font-inter font-normal">
                    {/* $ {item.price}  */}
                  </td>
                  <td className=" text-base font-inter font-normal">
                     {item.info} 
                  </td>
                  <td className="mb-4">
                    <button 
                    onClick={() => handleDeleteProduct(item)} 
                      className="p-2 flex items-center justify-center rounded-md bg-[#B91C1C] text-[25px] text-white"
                    >
                      <RiDeleteBin5Line />
                    </button>
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

export default ManageShops;
