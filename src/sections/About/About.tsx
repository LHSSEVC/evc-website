import "./About.scss";
import Card from "../../components/card";

const About = () => {
    return (
        <div id="about" className="About p-[5rem] skew-y-3">
            <div className="-skew-y-3">
                <h2 className="text-5xl text-center">About us</h2>
                <Card color="#0000ff" title="Our goal">
                    <p>amongus</p>
                </Card>
            </div>
        </div>
    );
};

export default About;
