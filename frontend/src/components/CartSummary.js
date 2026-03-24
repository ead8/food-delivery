import { useSelector } from "react-redux";

const CartSummary = (props) => {
    const total = useSelector((store)=> store.cart.total);
    const shipping = useSelector((store)=> store.cart.shipping_fee);

    return(
        <>
        {
            props.cartItems.length > 0 && (
                <div className="bg-dark-card border border-dark-border rounded-2xl p-6 lg:p-8 shadow-lg sticky top-32">
                    <h2 className="text-2xl font-black tracking-tight text-white mb-6">Order Summary</h2>
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between text-gray-300 font-medium pb-4 border-b border-dark-border/50">
                            <p>Subtotal ({props.cartItems.length} items)</p>
                            <p className="text-white">₹{total}</p>
                        </div>
                        <div className="flex justify-between text-gray-300 font-medium pb-4 border-b border-dark-border/50">
                            <p>Delivery Fee</p>
                            <p className="text-white">₹{shipping}</p>
                        </div>
                        
                        {/* Example of a discount row to make it feel premium */}
                        {total > 1000 && (
                           <div className="flex justify-between text-neon-green font-medium pb-4 border-b border-dark-border/50">
                               <p>Premium Discount applied</p>
                               <p>-₹{Math.floor(total * 0.1)}</p>
                           </div> 
                        )}

                        <div className="flex justify-between font-black text-white text-xl pt-2 pb-6">
                            <p>Total</p>
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                                ₹{total > 1000 ? (shipping + total) - Math.floor(total * 0.1) : shipping + total}
                            </p>
                        </div>
                        <button className="w-full py-4 bg-gradient-to-r from-neon-green to-green-600 hover:from-green-500 hover:to-neon-green text-dark-bg font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)] uppercase tracking-wide">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )
        } 
        </>
    )
}

export default CartSummary;