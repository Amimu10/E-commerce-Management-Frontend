import { Helmet } from "react-helmet-async";

const Products = () => {
    return (
        <div>
           <Helmet>
            <title>Tech-Buddy | Products</title>  
            </Helmet>
            <p className="my-32">this is product page</p>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas molestias tenetur temporibus ab asperiores commodi sapiente, dolores suscipit rem nobis, numquam odio praesentium, aspernatur voluptatibus ex quis velit blanditiis.
            </div>
        </div>
    );
};

export default Products;