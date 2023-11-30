

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SEctionTitle";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
  const { register, handleSubmit, setValue } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axiosSecure
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [axiosSecure, id]);

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const productItem = {
        product_name: data.name || product.product_name,
        product_price: data.price || product.product_price,
        product_image: res.data.data.display_url,
        product_location: data.location || product.product_location,
        product_quantity: data.quantity || product.product_quantity,
        product_category: data.category || product.product_category,
        production_cost: data.production_cost || product.production_cost,
        product_added_date: data.date || product.product_added_date,
        profit_margin: data.profit_margin || product.profit_margin,
        discount: data.discount || product.discount,
        description: data.description || product.description,
      };

      const ProductRes = await axiosSecure.patch(`/products/${id}`, productItem);

      if (ProductRes.data.modifiedCount > 0) {
        toast.success(`${product.product_name} is updated successfully!`, {
          duration: 3000,
        });
        console.log(res.data); 
      }
    }
  };

  useEffect(() => {
    setValue("name", product.product_name);
    setValue("price", product.product_price);
    setValue("location", product.product_location);
    setValue("quantity", product.product_quantity);
    setValue("category", product.product_category);
    setValue("production_cost", product.production_cost);
    setValue("date", product.product_added_date);
    setValue("profit_margin", product.profit_margin);
    setValue("discount", product.discount);
    setValue("description", product.description);
  }, [product, setValue]);

  return (
    <div>
      <Helmet>
        <title>Tech-Buddy | Update Product</title>
      </Helmet>
      <SectionTitle heading="Update Product" subHeading=""></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex lg:flex-row flex-col gap-4">
           <div className="form-control  w-full ">
             <label className="label">
             <span className="label-text">Product Name</span>
            </label>
         <input
              defaultValue={product.product_name}
              {...register("name", { required: true })}
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
              defaultValue={product.product_price}
              {...register("price", { required: true })}
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
              defaultValue={product.product_location}
              {...register("location", { required: true })}
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
              defaultValue={product.product_quantity}
              {...register("quantity", { required: true })}
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
            <select
              defaultValue={product.product_category}
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="Smartphones_and_Accessories">
                Smartphones_and_Accessories
              </option>
              <option value="Laptops_and_Computers">
                Laptops_and_Computers
              </option>
              <option value="Audio_Devices">Audio_Devices</option>
              <option value="Gaming_Gear">Gaming_Gear</option>
              <option value="Cameras_and_Photography">
                Cameras_and_Photography
              </option>
              <option value="Wearable_Tech">Wearable_Tech</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Production Cost</span>
            </label>
            <input
              defaultValue={product.production_cost}
              {...register("production_cost", { required: true })}
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
              defaultValue={product.product_added_date}
              {...register("date", { required: true })}
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
              defaultValue={product.profit_margin}
              {...register("profit_margin", { required: true })}
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
              defaultValue={product.discount}
              {...register("discount", { required: true })}
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
            defaultValue={product.description}
            {...register("description", { required: true })}
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
            defaultValue={product.product_image}
            {...register("image", { required: true })}
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
