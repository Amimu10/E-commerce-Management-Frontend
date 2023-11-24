
const SectionTitle = ({heading, subHeading}) => { 
    return ( 
        <div className="text-center my-8 md:w-4/12 mx-auto font-inter pb-4 border-[#E8E8E8]">  
       {subHeading}  
            <h3 className="text-[40px] text-[#151515] border-y-2 font-cinzel font-semibold">{heading}</h3>   
        </div>
    );
};

export default SectionTitle;