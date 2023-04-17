import Card from "../components/Card";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {
    return (
        <div
            id="about"
            className="About p-[5rem] from-bg to-bg via-gray-800 bg-gradient-to-b pt-[7rem] block"
        >
            <h2 className="text-5xl text-center">About Us</h2>
            <p className="px-[20%] mt-4 text-lg text-center">
                The Electric Vehicle Club is a team-based, STEM-related,
                project-oriented, student-driven, extracurricular project that
                centres around the design and construction of 12V and 24V
                electrically powered cars.
            </p>
            <div className="grid lg:grid-flow-col lg:auto-cols-fr gap-16 justify-evenly mt-12">
                <Card rgb="72,153,255" title="Our mission" icon="globe">
                    <p>
                        Our mission is to provide an opportunity for young
                        engineers to further their design, manufacturing, and
                        engineering skills, as well as inspire more students to
                        pursue a career in a STEM field. Students gain
                        invaluable industry skills in manufacturing, welding,
                        CAD design, CNC, and engineering design principles.
                    </p>
                </Card>
                <Card rgb="48,242,149" title="Our competitions" icon="globe">
                    <p>
                        LHSS EVC participates in an annual endurance race hosted
                        by the University of Waterloo. The event consists of two
                        races; a 12V and a 24V race. Teams typically build two
                        cars, one dedicated to either race. The goal is to
                        produce an electric car that is fast as well as energy
                        efficient.
                    </p>
                </Card>
                <Card rgb="116,93,197" title="Our work" icon="globe">
                    <p>
                        Students gain invaluable industry skills in
                        manufacturing, welding, CAD design, CNC, and engineering
                        design principles. The club allows students to continue
                        their learning outside the classroom and benefit from
                        hands-on experience that cannot be obtained through
                        traditional classroom work and textbooks. Additionally,
                        our work helps students develop teamwork, cooperation,
                        and leadership skills.
                    </p>
                </Card>
            </div>
            <div className="block lg:flex px-[6%] mt-[5rem] gap-8">
                <div className="w-full lg:w-[50%] flex flex-col justify-center">
                    <h3 className="text-3xl">
                        Experiencing the engineering world first-hand
                    </h3>
                    <p className="mt-8">
                        LHSS Electric Vehicle Club has built several cars since
                        its inception in 2009. Our team aims to build at least
                        one new car each year, whilst simultaneously working to
                        modify our pre-existing model.
                        <br />
                        <br />
                        We chose to do this to keep existing students involved
                        and to get new students to join the club. Last year we
                        created a new concept for the 801 car that focused on
                        momentum retention, weight reduction, and a smooth,
                        streamlined appearance involving the use of high-tech
                        manufacturing technologies. This new design performed
                        exceedingly well.
                        <br />
                        <br />
                        We hope EVC can open up opportunities, introduce our
                        students into the engineering world, and let them
                        experience it first-hand.
                    </p>
                </div>
                <div className="w-full lg:w-[50%] mt-8 flex gap-4 items-center">
                    <div className="w-[50%] h-[100%] flex items-center">
                        <LazyLoadImage
                            src={pic1}
                            alt="pic1"
                            className="rounded-lg object-cover"
                            effect='blur'
                        ></LazyLoadImage>
                    </div>
                    <div className="w-[50%] flex-col flex gap-4">
                        <LazyLoadImage
                            src={pic2}
                            alt="pic2"
                            className="rounded-lg object-cover h-[100%]"
                            effect='blur'
                        ></LazyLoadImage>
                        <LazyLoadImage
                            src={pic3}
                            alt="pic3"
                            className="rounded-lg object-cover h-[100%]"
                            effect='blur'
                        ></LazyLoadImage>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h3 className="text-2xl text-center">Each year, EVC has</h3>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-8">
                    <div className="bg-gray-700 w-[60%] lg:w-[20%] text-center p-4 py-8 rounded-md">
                        <p className="text-4xl text-blue">50+</p>
                        members
                    </div>
                    <div className="bg-gray-700 w-[60%] lg:w-[20%] text-center p-4 py-8 rounded-md">
                        <p className="text-4xl text-blue">$20000</p>
                        worth of materials
                    </div>
                    <div className="bg-gray-700 w-[60%] lg:w-[20%] text-center p-4 py-8 rounded-md">
                        <p className="text-4xl text-blue">2</p>
                        races
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
