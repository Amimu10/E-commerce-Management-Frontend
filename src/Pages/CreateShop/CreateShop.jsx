
import { useForm } from "react-hook-form"; 
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SEctionTitle";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`; 

const CreateShop = () => { 
    const { register, handleSubmit } = useForm();    
    const {user} = useAuth();   
    const axiosPublic = useAxiosPublic();  

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
             const shop = {  
                 name: data.name, 
                 logo: res.data.data.display_url,
                 location: data.location,  
                 owner_email: data.email,
                 owner_name: data.owner_name,
                 image: res.data.data.display_url   
             } 
            //  
            const shopRes = await axiosPublic.post("/shops", shop); 
            console.log(shopRes.data); 
            if(shopRes.data.insertedId){  
              toast.success(`${data.name} is added successfully!`, { duration: 3000 }); 
            //   useForm.reset();
            } 
         }
         console.log(res.data);
      }

      
    return (
         <div className="mt-32"> 
           <Helmet>
            <title>Tech-Buddy | Create Shop</title>  
            </Helmet>
            <SectionTitle
             heading="Create Shop"
             subHeading="Create a new shop"
            
            >
                 
            </SectionTitle>
          
          <form onSubmit={handleSubmit(onSubmit)}> 
          <div className="flex lg:flex-row flex-col gap-4">
          <div className="form-control  w-full ">
            <label className="label">
              <span className="label-text">Shop Name*</span>
            </label>
            <input {...register("name", { required: true})} 
            required 
              type="text"
              placeholder="Shop Name*"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control  w-full ">
            <label className="label">
              <span className="label-text">Shop Location</span>
            </label>
            <input {...register("location", { required: true})} 
            required 
              type="location"
              placeholder="Shop Location*"
              className="input input-bordered w-full"
            />
          </div>
          </div>
          
          <div className="flex lg:flex-row flex-col gap-4">
            <div className="form-control w-full"> 
              <label className="label"> 
                <span className="label-text">Shop-Owner Name</span>
              </label>
            <input 
            defaultValue={user?.displayName}  
            {...register("owner_name", { required: true})} 
            required 
              type="text"
              placeholder="Owner_Name*"
              className="input input-bordered w-full"
            /> 
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Shop-Owner Emai</span>
              </label>
              <input 
              defaultValue={user?.email} 
              {...register("owner_email", { required: true})}
                type="email"
                placeholder="Your email*"
                className="input input-bordered w-full" 
              /> 
            </div> 
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Shop Info</span>
            </label> 
            <textarea {...register("recipe", { required: true})} 
              className="textarea textarea-bordered h-24"
              placeholder="Shop Description*" 
            ></textarea> 
          </div> 
          <div className="form-control"> 
          <label className="label">
              <span className="label-text">Shop Logo</span>
          </label>
            <input {...register("image", { required: true})} 
              type="file"
              className="file-input file-input-bordered w-full max-w-xs my-6 "
            />
          </div>
          <button 
            type="submit"
            className="font-inter text-base  text-white p-2 w-[180px] rounded-md mb-8 btn capitalize "
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
          >
            Create Shop 
          </button> 
        </form>
         </div>
        
     
    );
};

export default CreateShop;
