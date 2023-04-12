import "./Navbar.scss";

const Navbar = () => {
    const sections = ["About", "Support Us"];

    return (
        <div className="bg-[rbga(18, 16, 28, 0.5)] z-50 text-xl sticky top-0 py-6 px-[15vw] navbar flex justify-between backdrop-blur-md">
            <a href="#" className='flex gap-2 text-white hover:no-underline'>
                <i className="bi bi-gear"></i>
                Electric Vehicle Club
            </a>
            <div className='flex gap-6'>
                {sections.map((section, index) => {
                    return <a href={`#${section.toLowerCase()}`} className='decoration-2 font-semibold hover:underline underline-offset-4'>{section}</a>;
                })}
            </div>
        </div>
    );
};

export default Navbar;
