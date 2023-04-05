import "./Navbar.scss";

const Navbar = () => {
    const sections = ["About"];

    return (
        <div className="bg-[#12101C] text-xl sticky top-0 p-4 px-[15vw] navbar flex justify-between">
            LHSS Electric Vehicle Club
            <div>
                {sections.map((section, index) => {
                    return <a href={`#${section.toLowerCase()}`}>{section}</a>;
                })}
            </div>
        </div>
    );
};

export default Navbar;
