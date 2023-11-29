// import { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// // import OrderTab from "./OrderTab/OrderTab";
// import { useParams } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import useProducts from "../../Hooks/useProducts";
// import OrderTab from "../OrderTab/OrderTab";

// const Order = () => {
//   const categories = ['Smartphones and Accessories', 'Laptops and Computers', 'Audio Devices', 'Gaming Gear', 'Cameras and Photography', 'Wearable Tech' ]; 
//   const {category} = useParams(); 
//   const initialIndex = categories.indexOf(category); 

//     const [tabIndex, setTabIndex] = useState(initialIndex); 
//     // const [menu] = UseMenu(); 
//     const [products] = useProducts(); 
    
    // const Smartphones_and_Accessories = products.filter(item => item.category === "Smartphones and Accessories"); 
    // const Laptops_and_Computers = products.filter(item => item.category === "Laptops and Computers"); 
    // const Audio_Devices = products.filter(item => item.category === "Audio Devices"); 
    // const Gaming_Gear = products.filter(item => item.category === "Gaming Gear"); 
    // const Cameras_and_Photography = products.filter(item => item.category === "Cameras and Photography"); 
    // const Wearable_Tech = products.filter(item => item.category === "Wearable Tech"); 
//   return (  
//     <div>
//       <Helmet>
//         <title>Bistro-Boss | Order Food</title> 
//       </Helmet>
//       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//         <TabList className="text-center mt-12 mb-8 font-inter text-[24px] font-medium">
//           <Tab>Smartphones and Accessories</Tab> 
//           <Tab>Laptops and Computers</Tab>
//           <Tab>Audio Devices</Tab> 
//           <Tab>Gaming Gear</Tab>
//           <Tab>Cameras and Photography</Tab>
//           <Tab>Wearable Tech</Tab> 
//         </TabList> 
//         <TabPanel> 
//           <OrderTab items={Smartphones_and_Accessories}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//         <OrderTab items={Laptops_and_Computers}></OrderTab> 
//         </TabPanel>
//         <TabPanel>
//         <OrderTab items={Audio_Devices}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//         <OrderTab items={Gaming_Gear}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//         <OrderTab items={Cameras_and_Photography}></OrderTab>
//         </TabPanel> 
//         <TabPanel>
//         <OrderTab items={Wearable_Tech}></OrderTab> 
//         </TabPanel>
//         </Tabs>
//     </div>
//   );
// };

// export default Order;
