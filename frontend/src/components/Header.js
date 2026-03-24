import { useSelector } from "react-redux";
import logo from "../logo.png";
import "./css/Header.css";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Header = () => {
  function navbarToggle() {
    const element = document.getElementById("toggleNavbar");
    element.classList.toggle("hidden");
  }

  // subscribing to the cart using a selector
  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <>
      <div className="sticky top-0 z-50">
        <header className="relative bg-dark-bg/80 backdrop-blur-md border-b border-dark-border shadow-sm">
          <p className="flex h-10 items-center justify-center bg-gradient-to-r from-neon-blue to-neon-purple px-4 text-sm font-semibold tracking-wide text-white sm:px-6 lg:px-8">
            Get free premium delivery on orders over ₹1000
          </p>
          <nav
            aria-label="Top"
            className="px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex h-20 items-center">
                <div className="flex lg:ml-0">
                  <Link to="/" className="flex items-center space-x-3 group" >
                    <img className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(4,217,255,0.5)]" src={logo} alt="AuraEats Logo" />
                    <div className="text-2xl font-black tracking-tight text-white hidden lg:block uppercase">
                      Aura<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">Eats</span>
                    </div>
                  </Link>
                </div>

                <div id="toggleNavbar" className="hidden ml-8 lg:block relative z-50 transition-all">
                  
                  <div className="flex space-x-8 absolute lg:relative bg-dark-card lg:bg-transparent h-[33vh] lg:h-[0vh] w-full left-[0%] top-[101%] flex-col lg:flex-row justify-between justify-center items-center p-[15px] lg:p-[0px] shadow-xl lg:shadow-none border-b border-dark-border lg:border-none">
                    <NavLink
                      to="/"
                      className={({ isActive }) => `flex items-center text-xl lg:text-base font-semibold transition-colors duration-300 ${isActive ? "text-neon-green" : "text-gray-300 hover:text-neon-blue"} border-transparent border-b-2 hover:border-neon-blue`}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/restaurants"
                      className={({ isActive }) => `flex items-center text-xl lg:text-base font-semibold transition-colors duration-300 ${isActive ? "text-neon-green" : "text-gray-300 hover:text-neon-blue"} border-transparent border-b-2 hover:border-neon-blue`}
                    >
                      Restaurants
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => `flex items-center text-xl lg:text-base font-semibold transition-colors duration-300 ${isActive ? "text-neon-green" : "text-gray-300 hover:text-neon-blue"} border-transparent border-b-2 hover:border-neon-blue`}
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => `flex items-center text-xl lg:text-base font-semibold transition-colors duration-300 ${isActive ? "text-neon-green" : "text-gray-300 hover:text-neon-blue"} border-transparent border-b-2 hover:border-neon-blue`}
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="pr-2 lg:pr-0 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <NavLink
                      to="/sign-in"
                      className="lg:pr-0 text-sm font-semibold text-gray-300 hover:text-neon-blue transition-colors duration-300"
                    >
                      Sign In
                    </NavLink>
                    <span
                      className="h-6 w-px bg-dark-border"
                      aria-hidden="true"
                    ></span>
                    <NavLink
                      to="/sign-up"
                      className="hidden lg:block text-sm font-semibold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-white transition-all duration-300 backdrop-blur-sm border border-white/10"
                    >
                      Join AuraEats
                    </NavLink>
                  </div>
                  <div className="pr-6 lg:pr-0 ml-4 flow-root lg:ml-6 lg:block">
                    <NavLink to="/cart" className="group -m-2 flex items-center p-2 relative">
                      <div className="p-2 rounded-full bg-dark-card border border-dark-border group-hover:border-neon-green transition-colors duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                        <ShoppingCartCheckoutIcon className="text-gray-300 group-hover:text-neon-green transition-colors duration-300" />
                      </div>
                      {cartItems.length > 0 && (
                        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-neon-green to-green-600 text-[10px] font-bold text-dark-bg shadow-md">
                          {cartItems.length}
                        </span>
                      )}
                    </NavLink>
                  </div>
                  <div onClick={navbarToggle} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg lg:hidden hover:bg-dark-card focus:outline-none focus:ring-2 focus:ring-neon-blue transition-colors cursor-pointer">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
