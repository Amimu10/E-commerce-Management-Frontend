

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../../Components/SEctionTitle";
import { Helmet } from "react-helmet-async";
// import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;  

const UpdateProduct = () => { 

const {_id, product_name, product_price, product_image, product_location, product_quantity, product_category, production_cost, profit_margin,  product_added_date, discount, description } = useLoaderData(); 
  console.log(product_added_date); 

  const { register, handleSubmit } = useForm();   
  const axiosPublic = useAxiosPublic();     
  const axiosSecure = useAxiosSecure();   
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
        const ProductRes = await axiosSecure.patch(`/products/${_id}`, productItem);  
        console.log(ProductRes.data); 
        if(ProductRes.data.modifiedCount > 0){   
          console.log(ProductRes.data);
          // show success message 
          toast.success(`${data.name} is updated successfully!`, { duration: 3000 });  
        }  
     }
   
    }

  return (
    <div>
        <Helmet>
            <title>Tech-Buddy | Update Product</title>  
            </Helmet>
            <SectionTitle
             heading="Update Product"
             subHeading=""
            
            >
                 
            </SectionTitle>
          <form onSubmit={handleSubmit(onSubmit)}> 
          <div className="flex lg:flex-row flex-col gap-4">
          <div className="form-control  w-full ">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input 
            defaultValue = {product_name} 
            {...register("name", { required: true})} 
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
            <input 
            defaultValue={product_price}
            {...register("price", { required: true})} 
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
            <input 
            defaultValue={product_location}
            {...register("location", { required: true})} 
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
            defaultValue={product_quantity}
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
              <select defaultValue={product_category}
                {...register("category", { required: true})}
                className="select select-bordered w-full"
              >
                <option disabled value="default"> 
                  Select a category 
                </option>
                <option value="Smartphones and Accessories">Smartphones and Accessories</option>
                <option value="Laptops and Computers">Laptops and Computers</option>
                <option value="Audio Devices">Audio Devices</option>
                <option value="Gaming Gear">Gaming Gear</option>
                <option value="Cameras and Photography">Cameras and Photography</option>
                <option value="Wearable Tech">Wearable Tech</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Production Cost</span> 
              </label>
              <input 
              defaultValue={production_cost}
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
            defaultValue={product_added_date}   
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
            defaultValue={profit_margin}
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
              defaultValue={discount}
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
            <textarea 
              defaultValue={description}
            {...register("description", { required: true})} 
              type="text"
              className="textarea textarea-bordered h-24"
              placeholder="Product Description*" 
            ></textarea> 
          </div> 
          <div className="form-control"> 
          <label className="label">
              <span className="label-text">Product Image</span>
          </label>
           
            <input 
            defaultValue={product_image}
            {...register("image", { required: true})}    
              type="file" 
              className="file-input file-input-bordered w-full max-w-xs mb-6 "
            />
          </div> 
          <button
            type="submit"
            className="font-inter text-base  text-white p-2 w-[180px] rounded-md mb-8 btn capitalize "
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
          >
            Update Product
          </button> 
        </form>
    </div>
  );
};

export default UpdateProduct;