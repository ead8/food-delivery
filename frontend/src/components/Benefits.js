import BenefitCard from './BenefitCard';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';

const Benefits = () => {
    // Custom styled icon properties for the dark theme
    const iconStyle = { fontSize: 50, color: '#04d9ff' }; // Neon blue

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 gap-8 px-4 max-w-7xl mx-auto">
            <BenefitCard icon={<FastfoodOutlinedIcon sx={iconStyle} />} title="Lightning Delivery" desc="Experience unmatched speed. Your favorite premium meals delivered to your door while they're still piping hot." />
            <BenefitCard icon={<WatchLaterOutlinedIcon sx={iconStyle} />} title="24/7 Service" desc="Cravings don't sleep, and neither do we. Order anytime, day or night, and we'll be there." />
            <BenefitCard icon={<SellOutlinedIcon sx={iconStyle} />} title="Exclusive Perks" desc="Unlock premium discounts, early access to new restaurants, and special member-only experiences." />
            <BenefitCard icon={<SoupKitchenOutlinedIcon sx={iconStyle} />} title="Culinary Excellence" desc="We partner only with the highest-rated kitchens to ensure every bite meets our stringent quality standards." />
       </div>
        </>
    )
}
export default Benefits;