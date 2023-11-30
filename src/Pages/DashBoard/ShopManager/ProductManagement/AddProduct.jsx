
import { useForm } from "react-hook-form"; 
import toast from "react-hot-toast";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
// import SectionTitle from "../../Components/SEctionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../../Components/SEctionTitle";
// import useAuth from "../../../../Hooks/useAuth";
import { useState } from "react";
import useShop from "../../../../Hooks/useShop";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`; 

const AddProduct = () => { 
    const { register, handleSubmit } = useForm();      
    const axiosPublic = useAxiosPublic(); 
    // const { user } = useAuth(); 
    const [productCount, setProductCount] = useState(0);
    const productLimit = 3;
   const [shop] = useShop();

    const onSubmit = async (data) => {
        console.log(data); 
    
        // image upload to imagebb and then get an url 
         const imageFile = {image: data.image[0]}; 
         const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { 
              'Content-Type':'multipart/form-data'  
            } 
         });
         if(res.data.success){
            // now send the menu item to the server with the image url
             const productItem = {    
                 shop_name: data.shop_name, 
                 product_name: data.name,          
                 product_price: data.price,
                 product_image: res.data.data.display_url, 
                 product_location: data.location,
                 product_quantity: data.quantity,
                 product_category: data.category,   
                 production_cost: data.production_cost, 
                 product_added_date: data.date,  
                 profit_margin: data.profit_margin, 
                 discount: data.discount, 
                 description: data.description
                 
             } 
            //  
            const productRes = await axiosPublic.post("/products", productItem); 
            console.log(productRes.data); 
            if(productRes.data.insertedId){   
              toast.success(`${data.name} is added successfully!`, { duration: 3000 }); 
            //   useForm.reset(); 
            } 
         }
         console.log(res.data);
         if (productCount >= productLimit) {
            toast.error(`Product limit reached (${productLimit} products allowed)`, { duration: 3000 });
            return;
          }
          setProductCount((prevCount) => prevCount + 1);
      }

      
    return (
         <div className="mt-32"> 
           <Helmet>
            <title>Tech-Buddy | Add Product</title>  
            </Helmet>
            <SectionTitle
             heading="Add Product" 
             subHeading=""
            
            >
                 
            </SectionTitle>
          
          <form onSubmit={handleSubmit(onSubmit)}> 
          <div className="form-control  w-full ">
            <label className="label">
              <span className="label-text">Shop Name</span>               
            </label>      
            <input 
            {...register("shop_name", { required: true})} 
            required 
              type="text"
              placeholder="Shop Name*" 
              className="input input-bordered w-full"
            />
          </div> 
          <div className="flex lg:flex-row flex-col gap-4">
          <div className="form-control  w-full ">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input {...register("name", { required: true})} 
            required 
              type="text"
              placeholder="Product Name*"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control  w-full ">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input {...register("price", { required: true})} 
            required 
              type="number"
              placeholder="Product Price*"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control  w-full ">
            <label className="label">
              <span className="label-text">Product Location</span>
            </label>
            <input {...register("location", { required: true})} 
            required 
              type="location"
              placeholder="Product Location*"
              className="input input-bordered w-full"
            />
          </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-4">
            <div className="form-control w-full"> 
              <label className="label"> 
                <span className="label-text">Product Quantity</span>
              </label>
            <input  
            {...register("quantity", { required: true})} 
            required 
              type="number"
              placeholder="Product Quantity*"
              className="input input-bordered w-full"
            /> 
            </div> 
            <div className="form-control w-full">  
              <label className="label"> 
                <span className="label-text">Category</span>  
              </label>
              <select defaultValue="default"
                {...register("category", { required: true})}
                className="select select-bordered w-full"
              >
                <option disabled value="default"> 
                  Select a category 
                </option>
                <option value="Smartphones and Accessories">Smartphones_and_Accessories</option>
                <option value="Laptops and Computers">Laptops_and_Computers</option>
                <option value="Audio Devices">Audio_Devices</option>
                <option value="Gaming Gear">Gaming_Gear</option>
                <option value="Cameras and Photography">Cameras_and_Photography</option>
                <option value="Wearable Tech">Wearable_Tech</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Production Cost</span> 
              </label>
              <input 
              {...register("production_cost", { required: true})}
                type="number"
                placeholder="Production Cost*"
                className="input input-bordered w-full" 
              /> 
            </div> 
          </div>
          <div className="flex lg:flex-row flex-col gap-4">
            <div className="form-control w-full"> 
              <label className="label"> 
                <span className="label-text">Product Added Date</span>
              </label> 
            <input    
            {...register("date", { required: true})} 
            required 
              type="date"
              placeholder="Product Added Date*"
              className="input input-bordered w-full"
            /> 
            </div> 
            <div className="form-control w-full"> 
              <label className="label"> 
                <span className="label-text">Profit Margin </span>
              </label>
            <input  
            {...register("profit_margin", { required: true})} 
            required 
              type="number"
              placeholder="Profit Margin*"
              className="input input-bordered w-full"
            /> 
            </div> 
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Discount</span> 
              </label>
              <input 
              {...register("discount", { required: true})}
                type="number"
                placeholder="Discount*"
                className="input input-bordered w-full" 
              /> 
            </div> 
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label> 
            <textarea {...register("description", { required: true})} 
              type="text"
              className="textarea textarea-bordered h-24"
              placeholder="Product Description*" 
            ></textarea> 
          </div> 
          <div className="form-control"> 
          <label className="label">
              <span className="label-text">Product Image</span>
          </label>
            <input {...register("image", { required: true})}    
              type="file" 
              className="file-input file-input-bordered w-full max-w-xs mb-6 "
            />
          </div> 
          <button disabled={productCount >= productLimit} 
            type="submit"
            className="font-inter text-base  text-white p-2 w-[180px] rounded-md mb-8 btn capitalize "
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
          >
            Add Product
          </button> 
        </form>
         </div>
        
     
    );
};

export default AddProduct;
