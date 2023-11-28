import useCart from "../../../../Hooks/useCart";

const SalesSummary = () => {
  const [cart] = useCart();

  console.log(cart);

//   const totalPrice = cart.reduce(
//     (total, item) => total + parseInt(item.product_price), 
//     0
//   );
//   console.log("total price", totalPrice);
const totalPrice = cart.reduce((total, item) => {
    const productPrice = parseInt(item.product_price);

    if (isNaN(productPrice)) {
        console.error(
            `Invalid product_price for item with _id ${item._id}: ${item.product_price}`
        );
        return total;
    }

    return total + productPrice * item.cartQuantity;
}, 0);

console.log("Total Sale:", totalPrice);

  // const totalInvest = cart.reduce((total, item) => total + parseInt(item.production_cost), 0);
  // console.log("Total Invest:", totalInvest);

  const totalInvest = cart.reduce((total, item) => {
    const productionCost = parseInt(item.production_cost);

    if (isNaN(productionCost)) {
      console.error(
        `Invalid production_cost for item with _id ${item._id}: ${item.production_cost}`
      );
      return total;
    }

    return total + productionCost;
  }, 0);

  console.log("Total Invest:", totalInvest);

  const totalProfit = totalPrice - totalInvest;
  console.log("Total Profit:", totalProfit);

  return (
    <div>
      <p>Sales Count</p>
      <div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-8">
        <div className="card  bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Total Sale</h2>
            <p>$ {totalPrice}</p>
          </div>
        </div>
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Total Invest</h2>
            <p> $ {totalInvest}</p>
          </div>
        </div>
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Total Profit</h2>
            <p>$ {totalProfit}</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto my-8 w-full">
        <table className="table table-zebra mx-auto w-full">
          <thead
            className="bg-[#D1A054] text-white mb-4"
            style={{ borderRadius: "15px 15px 0px 0px" }}
          >
            <tr>
              <th></th>
              <th>PRODUCT NAME</th>
              <th>SELLING DATE</th>
              <th>PROFIT</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td className="text-[#737373] text-base font-inter font-normal">
                    {item.product_name}
                  </td>
                  <td className="text-[#737373] text-base font-inter font-normal">
                    $ {item.selling_date}
                  </td>
                  <td className="text-[#737373] text-base font-inter font-normal">
                  {parseInt(item.product_price - item.production_cost)}
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

export default SalesSummary;
