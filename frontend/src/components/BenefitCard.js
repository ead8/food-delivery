const BenefitCard = (props) => {
    return(
        <>
        <div className="p-8 bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl cursor-pointer hover:bg-dark-card transition-all duration-300 hover:-translate-y-2 group shadow-lg hover:shadow-[0_0_20px_rgba(4,217,255,0.15)] hover:border-neon-blue/50">
            <div className='mb-6 inline-block p-4 rounded-xl bg-dark-bg border border-dark-border group-hover:border-neon-blue/50 transition-colors duration-300'>
                {props?.icon}
            </div>
            <h3 className="capitalize text-2xl font-bold text-center lg:text-left pb-4 text-white group-hover:text-neon-blue transition-colors duration-300">{props?.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{props?.desc}</p>
        </div>
        </>
    )
}
export default BenefitCard;