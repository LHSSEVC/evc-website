import Card from "../components/Card";

const About = () => {
    return (
        <div id="about" className="About p-[5rem] from-bg to-bg via-gray-800 bg-gradient-to-b">
            <h2 className="text-5xl text-center">About Us</h2>
            <p className='px-[20%] mt-4 text-lg text-center'>The Electric Vehicle Club is a team-based, STEM-related, project-oriented, student-driven, extracurricular project that centres around the design and construction of 12V and 24V electrically powered cars.</p>
            <div className='flex justify-evenly mt-12'>
                <Card rgb="72,153,255" title="Our mission" icon='globe' className="w-[25%]">
                    <p>Our mission is to provide an opportunity for young engineers to further their design, manufacturing, and engineering skills, as well as inspire more students to pursue a career in a STEM field. Students gain invaluable industry skills in manufacturing, welding, CAD design, CNC, and engineering design principles.</p>
                </Card>
                <Card rgb="48,242,149" title="Our competitions" icon='globe' className="w-[25%]">
                    <p>LHSS EVC participates in an annual endurance race hosted by the University of Waterloo. The event consists of two races; a 12V and a 24V race. Teams typically build two cars, one dedicated to either race. The goal is to produce an electric car that is fast as well as energy efficient.</p>
                </Card>
                <Card rgb="116,93,197" title="Our work" icon='globe' className="w-[25%]">
                    <p>Students gain invaluable industry skills in manufacturing, welding, CAD design, CNC, and engineering design principles. The club allows students to continue their learning outside the classroom and benefit from hands-on experience that cannot be obtained through traditional classroom work and textbooks. Additionally, our work helps students develop teamwork, cooperation, and leadership skills.</p>
                </Card>
            </div>
        </div>
    );
};

export default About;
