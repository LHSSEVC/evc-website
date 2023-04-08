const Landing = () => {
    return (
        <div className="Landing flex px-[5rem] h-[95vh] Landing">
            <div className="w-[60%] mt-[10rem]">
                <h2 className="text-dimmed text-2xl mb-4">
                    Laurel Heights Electric Vehicle Club
                </h2>
                <h1 className="text-6xl mb-12 font-bold">Building for a <span className='gradient'>sustainable</span> future.</h1>
                <p className='text-dimmed text-xl'>Join a team of creative and curious students who are passionate about pushing the boundaries of what's possible in electric vehicle design and racing.</p>
            </div>
            <div className="flex items-center justify-center w-[40%]">
                <p>car goes here</p>
            </div>
        </div>
    );
};

export default Landing;
