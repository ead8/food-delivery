import { useDispatch } from "react-redux";
import { additem } from "../redux/slices/cartSlice";
import StarIcon from '@mui/icons-material/Star';
import toast from 'react-hot-toast';

const ProductCard = (props) => {
  const item = props.item;

  const dispatch  = useDispatch()
  const handleAddToCart = (item) => {
    // Dispatch an action
    dispatch(additem(item))
    toast.success(item.name+" Added to cart",{
        duration: 2000,
        position: 'top-center',
      
        // Styling
        style: {
            backgroundColor:'#121212',
            color:"#39FF14", // Neon Green
            fontWeight:600,
            border: '1px solid #27272a'
        }
      });
  }

  return (
    <>
      <div className="bg-dark-card border border-dark-border rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] cursor-pointer overflow-hidden group transition-all duration-300 flex flex-col h-full hover:border-neon-green/50">
        <div className="overflow-hidden relative pb-[75%]">
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              src={item.image}
              alt={item.name}
            />
            {/* Gradient overlay to make text more legible if any was placed over the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
            <h5 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors duration-300 line-clamp-1">
              {item.name}
            </h5>
            <p className="text-sm text-gray-400 font-normal mb-4 flex-grow line-clamp-2">{item.description}</p>
          
          <div className="flex items-center gap-3 py-3 mt-auto">
            <span className="bg-dark-bg border border-dark-border text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                <StarIcon style={{ fontSize: '14px', color: '#FFD700' }} /> 
                {item.rating}
            </span>
            <span
                className={`${
                item.isVeg
                    ? "bg-green-900/30 border-green-500/50 text-green-400"
                    : "bg-red-900/30 border-red-500/50 text-red-400"
                } text-xs font-semibold px-2.5 py-1 rounded-md flex items-center border`}
            >
                {item.isVeg ? "Veg" : "Non-Veg"}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-black text-white">
              ₹{item.price}
            </span>
            <button 
                className="py-2 px-5 bg-dark-bg border border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-bg font-semibold rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(57,255,20,0.1)] hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]" 
                onClick={(e)=>{ e.preventDefault(); handleAddToCart(item);}}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
