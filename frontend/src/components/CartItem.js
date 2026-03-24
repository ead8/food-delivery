import CloseIcon from '@mui/icons-material/Close';
import { useDispatch} from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";
import toast from 'react-hot-toast'

const CartItem = (props) => {
    const item = props.item
    const dispatch  = useDispatch();
    const handleRemoveItem = (item) => {
        // Dispatch an action
        dispatch(removeItem(item))
        toast.success(item.name+" Removed from cart",{
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
         <div className="flex flex-col lg:flex-row justify-between items-center p-4 rounded-xl shadow-lg border border-dark-border bg-dark-card hover:border-neon-blue/30 transition-colors duration-300">
            <div className="flex gap-4 w-full lg:w-3/4 items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border border-dark-border">
                    <img className="w-full h-full object-cover" src={item?.image} alt={item?.name} />
                </div>
                <div className="flex flex-col justify-between">
                    <h2 className="text-lg font-bold text-white hover:text-neon-blue transition-colors cursor-pointer">{item?.name}</h2>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">{item?.description}</p>
                </div>
            </div>
            <div className="flex pt-4 lg:pt-0 justify-between lg:justify-end lg:gap-8 w-full items-center">
                <span className="font-bold text-gray-300">₹{item?.price}</span>
                <span className="font-bold text-white bg-dark-bg px-3 py-1 rounded-md border border-dark-border">{item?.quantity}</span>
                <span className="font-bold text-neon-green">₹{item?.price * item?.quantity}</span>
                <button onClick={() => handleRemoveItem(item)} className="p-2 text-gray-500 hover:text-[#ff4d4f] hover:bg-[#ff4d4f]/10 rounded-lg transition-colors flex items-center justify-center" aria-label="Remove item">
                    <CloseIcon />
                </button>
            </div>
        </div>
        </>
    )
} 

export default CartItem;