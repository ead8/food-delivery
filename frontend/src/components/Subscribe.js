import Newsletter from "../images/illustration-4.png"
const Subscribe = () => {
    return(
        <>
        <div className="mt-16 bg-dark-card border-y border-dark-border relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-purple/10 rounded-full mix-blend-screen filter blur-[80px] -translate-y-1/2"></div>
            
            <div className="flex flex-col gap-12 lg:flex-row max-w-7xl mx-auto py-20 justify-between items-center px-8 relative z-10">
                <div className="lg:w-1/2 flex justify-center">
                    <img src={Newsletter} alt="Newsletter illustration" className="w-4/5 drop-shadow-[0_0_30px_rgba(4,217,255,0.2)] animate-[float_5s_ease-in-out_infinite]" style={{ animation: 'float 5s ease-in-out infinite' }} />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-3xl lg:text-5xl font-black leading-tight text-center lg:text-left text-white tracking-tight">
                        Never miss an <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Exclusive Offer</span>
                    </h2>
                    <p className="text-gray-400 text-center lg:text-left text-lg">
                        Subscribe to our newsletter and be the first to know about new premium restaurants, secret menus, and VIP discounts.
                    </p>
                    <form action="" className="flex flex-col sm:flex-row gap-4 pt-4">
                        <input 
                            className="bg-dark-bg border border-dark-border rounded-lg p-4 flex-grow text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition-all placeholder-gray-600 shadow-inner" 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email address" 
                            required
                        />
                        <button className="py-4 px-8 bg-gradient-to-r from-neon-blue to-blue-600 hover:from-blue-500 hover:to-neon-blue text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(4,217,255,0.4)] hover:shadow-[0_0_25px_rgba(4,217,255,0.6)]">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
                100% { transform: translateY(0px); }
                }
            `}</style>
        </div>
        </>
    )
}
export default Subscribe;