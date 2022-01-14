import React from 'react';
import Landing from "../src/MyPathshalaLandingPage/Introduction";
import Features from "./MyPathshalaLandingPage/Features";
import Contact from "./MyPathshalaLandingPage/Contact";
import Footer from "./MyPathshalaLandingPage/Footer";
import useMobile from "./assets/js/useMobile";
import Logo from "./assets/Group 148.svg";

function App() {
    const isMobile = useMobile()

    return (
        <div>
            {
                !isMobile && <nav className="p-4 navbar navbar-expand-lg navbar-light bg-white mb-5" style={{position:"fixed",top:0,width:"100%",zIndex:"100"}}>
                    <a className="navbar-brand ml-3" href="#">
                        <img
                            style={{alignSelf: "center", width: "8rem", height: "3rem", borderRadius: "50%"}}
                            src={Logo}
                        /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active mr-3">
                                <a className="nav-link" href="#intro" style={{fontSize: "1.2rem"}}>Home <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="#features" style={{fontSize: "1.2rem"}}>Features</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="#contact" style={{fontSize: "1.2rem"}}>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            }
            {
                isMobile && <nav className="p-1 navbar navbar-expand-lg navbar-light bg-white navbar-fixed" style={{position:"fixed",top:0,width:"100%",zIndex:"100"}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"
                            style={{fontSize: "1rem", color: "#FF4d4f"}}>
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <a className="navbar-brand " href="#">
                        <img
                            style={{alignSelf: "center", width: "6rem", height: "2rem"}}
                            src={Logo}
                        /></a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active mr-3">
                                <a className="nav-link" href="#intro" style={{fontSize: "1rem"}}>Home <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="#features" style={{fontSize: "1rem"}}>Features</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="#contact" style={{fontSize: "1rem"}}>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            }
            <div id="intro" className="mt-5 pt-5" >
                <Landing/>
            </div>
            <div id="features">
                <Features/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
