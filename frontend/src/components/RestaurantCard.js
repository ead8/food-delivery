import{RESTRO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const RestaurantCard = (props) => {
    const data = props.item
    return(
        <>
        <div className="bg-dark-card border border-dark-border rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(4,217,255,0.15)] cursor-pointer overflow-hidden group relative transition-all duration-300 flex flex-col h-full hover:border-neon-blue/50">
            {
                data?.avgRating > 4 && (
                    <span className="absolute top-4 left-0 bg-gradient-to-r from-neon-blue to-blue-600 text-white text-xs font-bold px-3 py-1 z-20 rounded-r-md shadow-md uppercase tracking-wide">Top Rated</span>
                )
            }
            <div className="overflow-hidden relative pb-[60%]">
                <img src={RESTRO_URL+data?.cloudinaryImageId} alt={data?.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-80 pointer-events-none"></div>
            </div>
            
            <div className='p-5 flex flex-col flex-grow relative z-10 -mt-8'>
                <div className='text-xl font-bold text-white hover:text-neon-blue transition-colors duration-300 line-clamp-1'>
                    <Link to={`/restaurant/${data.id}`} className="hover:underline decoration-neon-blue underline-offset-4">{data?.name}</Link>
                </div>
                <div className='text-sm text-gray-400 font-normal mt-2 line-clamp-1' title={data?.cuisines?.join(', ')}>{data?.cuisines?.join(', ')}</div>
                
                <div className='flex justify-between items-center mt-3 text-sm'>
                    <span className='font-bold text-gray-300'>{data?.costForTwo}</span>
                    <span className='text-gray-500 flex items-center gap-1 max-w-[50%] truncate'>
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                        <span className="truncate">{data?.areaName}</span>
                    </span>
                </div>
                
                <div className="flex gap-3 py-4 mt-auto border-t border-dark-border/50">
                    <span className="bg-dark-bg border border-dark-border text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                        <StarIcon style={{ fontSize: '14px', color: '#FFD700' }} /> {data?.avgRating}
                    </span>
                    {data?.veg && (
                        <span className="bg-green-900/30 border border-green-500/50 text-green-400 text-xs font-bold px-2 py-1 rounded flex items-center">
                            100% Veg
                        </span>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantCard;
