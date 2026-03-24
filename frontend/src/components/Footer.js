import logo from "../logo.png";
import { Link, NavLink } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return(
        <>
        <footer className="bg-dark-card border-t border-dark-border mt-16">
            <div className="mx-auto w-full max-w-7xl p-4 py-12 lg:py-16">
                <div className="md:flex md:justify-between">
                  <div className="mb-8 md:mb-0">
                      <Link to="/" className="flex items-center group">
                          <img src={logo} className="h-10 mr-3 transition-transform duration-300 group-hover:scale-110" alt="AuraEats Logo" />
                          <div className="text-2xl font-black tracking-tight text-white uppercase">
                              Aura<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">Eats</span>
                          </div>
                      </Link>
                      <p className="mt-4 text-gray-400 max-w-xs text-sm">
                          Redefining the premium food delivery experience. Fast, fresh, and exceptionally vibrant.
                      </p>
                  </div>
                  <div className="grid grid-cols-2 gap-12 sm:gap-16 sm:grid-cols-3">
                      <div>
                          <h2 className="mb-6 text-sm font-bold text-white uppercase tracking-wider">Resources</h2>
                          <ul className="text-gray-400 font-medium space-y-4">
                              <li>
                                  <NavLink to="/restaurants" className="hover:text-neon-blue transition-colors">Restaurants</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/about" className="hover:text-neon-blue transition-colors">About Us</NavLink>
                              </li>
                              <li>
                                    <NavLink to="/contact" className="hover:text-neon-blue transition-colors">Contact Us</NavLink>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 className="mb-6 text-sm font-bold text-white uppercase tracking-wider">Follow us</h2>
                          <ul className="text-gray-400 font-medium space-y-4">
                              <li>
                                  <a href="https://github.com/Sourav326" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors">GitHub</a>
                              </li>
                              <li>
                                  <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors">Twitter</a>
                              </li>
                              <li>
                                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors">Facebook</a>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 className="mb-6 text-sm font-bold text-white uppercase tracking-wider">Legal</h2>
                          <ul className="text-gray-400 font-medium space-y-4">
                              <li>
                                  <a href="#" className="hover:text-neon-blue transition-colors">FAQ</a>
                              </li>
                              <li>
                                  <a href="#" className="hover:text-neon-blue transition-colors">Terms &amp; Conditions</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <hr className="my-8 border-dark-border sm:mx-auto" />
              <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-400 sm:text-center">© {new Date().getFullYear()} <Link to="/" className="hover:text-neon-blue transition-colors font-semibold">AuraEats</Link>. All Rights Reserved.
                  </span>
                  <div className="flex mt-6 space-x-6 sm:justify-center sm:mt-0">
                      <a href="https://facebook.com" className="text-gray-400 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                          <FacebookOutlinedIcon />
                      </a>
                      <a href="https://twitter.com/" className="text-gray-400 hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
                         <TwitterIcon />
                      </a>
                      <a href="https://github.com/Sourav326" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                         <GitHubIcon />
                      </a>
                  </div>
              </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;