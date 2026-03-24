import HeaderHero from '../../images/hero_banner.png';
import RestaurantList from '../RestaurantList';
import CustomerWords from '../CustomerWords';
import Topcarausal from "../Carausel";
import FoodItemCarausal from '../FoodItemCarausal';

const Home = () => {
 
  return (
    <>
      <div className="relative min-h-[40rem] w-full flex items-center px-6 lg:px-8 overflow-hidden bg-dark-bg">
        {/* Abstract background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-col-reverse lg:flex-row relative z-10 py-16 lg:py-0">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start space-y-8 mt-12 lg:mt-0">
            <h1 className="capitalize text-5xl lg:text-7xl font-black leading-tight text-center lg:text-left text-white tracking-tight">
              Experience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple pb-2">
                 Premium Delivery
              </span>
            </h1>
            <p className="text-xl text-gray-400 text-center lg:text-left max-w-lg font-light leading-relaxed">
              Elevate your dining experience with lightning-fast delivery from the city's most exclusive restaurants.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="px-8 py-4 bg-gradient-to-r from-neon-green to-green-600 hover:from-green-500 hover:to-neon-green text-dark-bg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]">
                    Order Now
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-sm">
                    Explore Menu
                </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[500px]">
                 {/* Decorative ring around image */}
                 <div className="absolute inset-0 rounded-full border border-white/5 bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 backdrop-blur-3xl transform scale-105 z-0"></div>
                 <img 
                    className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite]" 
                    src={HeaderHero} 
                    alt="Premium Food Delivery" 
                    style={{ animation: 'float 6s ease-in-out infinite' }}
                 />
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      
      <Topcarausal />
      <RestaurantList />
      <CustomerWords />
      <div className="mx-auto w-full max-w-7xl py-16 px-6 lg:px-8 border-t border-dark-border">
          <FoodItemCarausal title="Trending Dishes"/>
      </div>
    </>
  );
};
export default Home;
