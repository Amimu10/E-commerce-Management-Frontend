import ProductsCard from "../../Components/ProductsCard/ProductsCard";


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1200px] px-5"> 
           {
               items.map((item => <ProductsCard key={item._id} item={item}></ProductsCard>))
            }

           </div>
    );
};

export default OrderTab;