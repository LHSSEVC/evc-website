const Navbar = () => {
    const sections = ["About", "Support Us"];

    return (
        <div className="border-b-[1px] border-b-[#444] border-solid bg-[rbga(18, 16, 28, 0.8)] z-50 text-xl sticky top-0 py-6 px-[15vw] flex justify-center lg:justify-between backdrop-blur-lg">
            <a href="#" className='gap-2 text-white hover:no-underline hidden lg:flex'>
                <i className="bi bi-gear"></i>
                <h2 className=''>Electric Vehicle Club</h2>
            </a>
            <div className='flex gap-6'>
                {sections.map((section) => {
                    return <a href={`#${section.toLowerCase()}`} className='whitespace-nowrap decoration-2 font-semibold hover:underline underline-offset-4'>{section}</a>;
                })}
                <a href='/package.pdf' className='decoration-2 whitespace-nowrap font-semibold hover:underline underline-offset-4'>Sponsorship</a>
            </div>
        </div>
    );
};

export default Navbar;
