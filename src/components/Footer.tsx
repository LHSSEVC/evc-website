import logo from "../assets/logo.png";

function Footer() {
    return (
        <div className="overflow-hidden mt-[5rem]">
            <div className="skew-y-2 origin-top-left bg-blue py-20">
                <div className="-skew-y-2 origin-top-left grid md:grid-flow-col md:auto-cols-fr items-center text-center">
                    <div>
                        <a
                            href="https://www.google.com/maps/place/Laurel+Heights+Secondary+School/@43.4712794,-80.5926591,17z/data=!3m1!5s0x882bf72f4ff24b0b:0x94998552929ccb7f!4m6!3m5!1s0x882bf77cb1fd2133:0x27d315c3c62de77d!8m2!3d43.471009!4d-80.5941144!16s%2Fg%2F11h3df5kwt?hl=en-CA"
                            target="_blank"
                            className="text-[#104A8A] hover:text-white"
                        >
                            <i className="bi bi-geo-alt-fill text-[4rem] " />
                        </a>
                        <p className="text-white">
                            Laurel Heights Secondary School <br />
                            650 Laurelwood Dr. <br />
                            Ontario, CA. N2V 2V1
                        </p>
                    </div>
                    <div>
                        <img
                            src={logo}
                            alt="EVC logo"
                            width={300}
                            className="mx-auto"
                        />
                        <br />
                        <p className="text-white">
                            Copyright © 2023 Laurel Heights Secondary School
                            Electric Vehicle Club
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-evenly my-16">
                            <a
                                href="https://www.instagram.com/sjamevc/"
                                className="text-[#104A8A] hover:text-white"
                                target="_blank"
                            >
                                <i className="bi bi-instagram text-[4rem]" />
                            </a>
                            <a
                                href="mailto:lhssevc@gmail.com"
                                className="text-[#104A8A] hover:text-white"
                                target="_blank"
                            >
                                <i className="bi bi-envelope-fill text-[4rem]" />
                            </a>
                        </div>
                        <div className="flex justify-evenly my-16">
                            <a className="text-white" href='/package.pdf'>Sponsorship Prospectus</a>
                            <a className="text-white" href='https://docs.google.com/document/d/1ikCvpgrNkIX4J_g4hpdmcniawIHCKofy_OtoMjwNDHM/edit'>Donation Instructions</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
