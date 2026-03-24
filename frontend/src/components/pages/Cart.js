import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import toast from 'react-hot-toast';
import CartItem from "../CartItem";
import CartSummary from "../CartSummary";

const Cart = () => {
    // subscribing to the cart using a selector
  const cartItems = useSelector((store)=> store.cart.items);

  const dispatch  = useDispatch();
  const handleClearCart = () => {
    // Dispatch an action
    dispatch(clearCart())
    toast.success("All items removed from cart",{
        duration: 2000,
        position: 'top-center',
      
        // Styling
        style: {
            backgroundColor:'#1a1a1a',
            color:"#ff4d4f",
            fontWeight:600,
            border: '1px solid #333'
        }
      });
  }
  
    return(
        <>
            <div className="mx-auto w-full max-w-7xl py-12 px-6 lg:px-8 min-h-[70vh]">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-dark-border pb-6 mb-8 gap-4">
                    <div>
                        <h2 className="text-4xl font-black text-white tracking-tight">Shopping Cart</h2>
                        <p className="mt-2 text-gray-400 font-medium">You have <span className="text-neon-blue font-bold">{cartItems.length}</span> items in your cart</p>
                    </div>
                    {
                        cartItems.length > 0 && (
                            <button className="py-2.5 px-6 border border-[#ff4d4f] text-[#ff4d4f] hover:bg-[#ff4d4f] hover:text-white rounded-lg transition-all shadow-[0_0_10px_rgba(255,77,79,0.1)] hover:shadow-[0_0_15px_rgba(255,77,79,0.3)] font-semibold" onClick={handleClearCart}>
                                Empty Cart
                            </button>
                        )
                    } 
                </div>

                {
                    cartItems.length == 0 ? (
                        <div className="flex flex-col justify-center items-center h-[40vh] bg-dark-card border border-dark-border rounded-2xl">
                            <svg className="w-24 h-24 text-gray-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <h1 className="text-center text-3xl font-bold text-gray-400 mb-2">Your cart is empty</h1>
                            <p className="text-gray-500 mb-6">Looks like you haven't added any premium dishes yet.</p>
                            <a href="/restaurants" className="py-3 px-8 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/10 transition-all backdrop-blur-sm">Browse Restaurants</a>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 py-2">
                            <div className="flex flex-col gap-6 col-span-2"> 
                                {
                                    cartItems.map((item,index) =>(
                                    <CartItem item={item}  key={item.id ? `${item.id}-${index}` : index} />
                                    )) 
                                }
                            </div>
                            <div className="mt-10 lg:mt-0">
                                <CartSummary cartItems={cartItems}/>
                            </div>
                        </div>
                    )
                } 
            </div>
        </>
    )
}

export default Cart;