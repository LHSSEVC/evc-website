import "./Landing.scss";

const Landing = () => {
    return (
        <div className="mt-[10rem] flex px-[5rem] h-[95vh] Landing">
            <div className="w-[60%]">
                <h2 className="text-dimmed font-normal">
                    Laurel Heights Electric Vehicle Club
                </h2>
                <h1 className="text-6xl">Building for a sustainable future.</h1>
                <p>The Electric Vehicle Club believes in a </p>
            </div>
            <div className="flex items-center justify-center w-[40%]">
                <p>car goes here</p>
            </div>
        </div>
    );
};

export default Landing;
