// import { useEffect, useState } from "react";
// import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
// import { useLoaderData, useParams } from "react-router-dom";


// const Checkout = () => {
//     const [product, setProduct] = useState({});
//     const axiosSecure = useAxiosSecure(); 
//     const { id } = useParams(); 
//     console.log(id);
// const  {_id} = useLoaderData(); 

//     useEffect(() => {
//       axiosSecure
//         .get(`/checkoutProduct/${_id}`)
//         .then((res) => {
//           setProduct(res.data);
//           console.log(res.data);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     }, [axiosSecure, id]);


//     return (
//         <div>
//          {_id}
//         </div>
//     );
// };

// export default Checkout;


// import React from 'react';

// const Checkout = () => {
//     return (
//         <div>
//             hello
//         </div>
//     );
// };

// export default Checkout;

// import { useEffect, useState } from "react";
// import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
// import { useParams } from "react-router-dom";

// const Checkout = () => {
//     const [product, setProduct] = useState({});
//     const axiosSecure = useAxiosSecure();
//     const { _id } = useParams(); // Assuming you're using "_id" in the URL parameter

//     useEffect(() => {
//         axiosSecure
//             .get(`/checkoutProduct/${_id}`)
//             .then((res) => {
//                 setProduct(res.data);
//                 console.log(res.data);
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     }, [axiosSecure, _id]);

//     return (
//         <div>
           
//         </div>
//     );
// };

// export default Checkout;

import React from 'react';

const Checkout = () => {
    return (
        <div>
            
        </div>
    );
};

export default Checkout;