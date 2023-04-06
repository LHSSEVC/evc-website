import "./About.scss";
import Card from "../../components/Card";

const About = () => {
    return (
        <div id="about" className="About p-[5rem] skew-y-3">
            <div className="-skew-y-3">
                <h2 className="text-5xl text-center">About us</h2>
                <Card rgb="0, 0, 255" title="Our goal" className="w-64">
                    <p>amongus</p>
                </Card>
            </div>
        </div>
    );
};

export default About;
