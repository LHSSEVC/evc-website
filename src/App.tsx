import Landing from "./sections/Landing";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Sponsor from "./sections/Sponsor";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Landing />
            <About />
            <Sponsor />
            <Footer />
        </>
    );
}

export default App;
