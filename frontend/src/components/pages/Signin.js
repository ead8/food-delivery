import LoginTemp from '../../images/contacts-1.png'
import { Link } from 'react-router-dom'
const Signin = () => {
    return(
        <>
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
             {/* Background glow effects */}
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse pointer-events-none"></div>
             
            <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center relative z-10">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img className='w-full max-w-md drop-shadow-[0_0_30px_rgba(4,217,255,0.2)] animate-[float_6s_ease-in-out_infinite]' src={LoginTemp} alt="Sign In Illustration" style={{ animation: 'float 6s ease-in-out infinite' }} />
                </div>
                
                <div className="bg-dark-card/80 backdrop-blur-xl border border-dark-border w-full lg:w-1/2 mx-auto p-10 lg:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    {/* Decorative top accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-green to-neon-purple"></div>
                    
                    <h1 className="text-center text-4xl lg:text-5xl font-black mb-2 text-white tracking-tight">Welcome Back</h1>
                    <p className="text-center text-gray-400 mb-8">Sign in to access your premium delivery experience</p>
                    
                    <form action="" className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2 text-sm font-semibold text-gray-300">Email Address</label>
                            <input className="bg-dark-bg border border-dark-border rounded-lg p-3 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition-all placeholder-gray-600" type="email" name="email" placeholder="name@example.com" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-2 text-sm font-semibold text-gray-300">Password</label>
                            <input className="bg-dark-bg border border-dark-border rounded-lg p-3 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition-all placeholder-gray-600" type="password" name="password" placeholder="••••••••" required/>
                            <div className="flex justify-end mt-2">
                                <a href="#" className="text-xs text-neon-blue hover:text-blue-400 transition-colors">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="w-full py-4 px-8 bg-gradient-to-r from-neon-blue to-blue-600 hover:from-blue-500 hover:to-neon-blue text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(4,217,255,0.3)] hover:shadow-[0_0_25px_rgba(4,217,255,0.5)]">
                                Sign In
                            </button>
                        </div>
                    </form>
                    
                    <div className='pt-8 text-center text-gray-400 border-t border-dark-border mt-8'>
                        New to AuraEats? <Link className='text-neon-blue font-semibold hover:text-blue-400 transition-colors ml-1' to="/sign-up">Create an account</Link>
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
        </div>
        </>
    )
}

export default Signin;