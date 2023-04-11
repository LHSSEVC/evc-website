import world from "../assets/world.png";

const Landing = () => {
    return (
        <div className="Landing flex px-[5rem] h-[95vh] Landing">
            <div className="w-[50%] mt-[10rem]">
                <h2 className="text-dimmed text-2xl mb-4">
                    Laurel Heights Electric Vehicle Club
                </h2>
                <h1 className="text-6xl mb-8 font-bold">
                    Building for a <span className="gradient">sustainable</span>{" "}
                    future.
                </h1>
                <p className="text-dimmed text-xl">
                    Join a team of creative and curious students who are
                    passionate about pushing the boundaries of what's possible
                    in electric vehicle design and racing.
                </p>
                <button
                    onClick={() =>
                        document
                            .getElementById("about")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:brightness-90"
                >
                    Learn More
                </button>
            </div>
            <div className="flex items-center justify-center w-[50%]">
                <a>car goes here</a>
            </div>
        </div>
    );
};

export default Landing;
