import React from "react";
import {Description, Heading, ButtonStyle} from "./styled";
import FeatureCards from './Shared/FeatureCards'
import useMobile from '../assets/js/useMobile'
import Feature1 from "../assets/Group 41.svg";
import Feature2 from "../assets/Group 42.svg"
import Feature3 from "../assets/Group 43.svg";
import Feature4 from "../assets/Group 44.svg"
import Feature5 from "../assets/Group 45.svg"
import Feature6 from "../assets/Group 46.svg"


const Features = (props) => {
    const isMobile = useMobile()

    return (
        <div className="p-5" style={{backgroundColor: "#FFF4F5"}}>
            {
                isMobile &&
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    width: "100%"
                }}>
                    <Heading style={{color: "#444444", fontSize: "1.7rem"}}>
                        Features
                    </Heading>
                    <div style={{
                        alignSelf: "center",
                        height: "0.4rem",
                        width: "4.5rem",
                        backgroundColor: "#ff4d4f"
                    }}/>
                </div>
            }
            {
                !isMobile &&
                <div style={{width: "100%"}}>
                    <Heading style={{color: "#444444", fontSize: "3.5rem"}}>
                        Features
                    </Heading>
                    <div style={{height: "0.5rem", width: "5rem", backgroundColor: "#ff4d4f"}}/>
                </div>
            }
            <div className="p-4 d-flex" style={{display: "flex", justifyContent: "space-around"}}>
                <FeatureCards heading={"Customised App"}
                              description={"Provides the institute with their own customised mobile and web application for their students, teachers and administration."}
                              imgUrl={Feature1}
                />
                <FeatureCards heading={"Automatic Attendance"}
                              description={"Attendance reports generated automatically after prompting only after ensuring student’s attention."}
                              imgUrl={Feature2}
                />
                <FeatureCards heading={"Performance Tracker"}
                              description={"Individual dashboards for teachers, students and admins to monitor their respective performance."}
                              imgUrl={Feature4}
                />
            </div>
            <div className="p-4 d-flex" style={{display: "flex", justifyContent: "space-around"}}>
                <FeatureCards heading={"Live and Recorded Classes"}
                              description={"Allows institute to conduct live classes and also, provide recordings to students."}
                              imgUrl={Feature5}
                />
                <FeatureCards heading={"Online Test Portal"}
                              description={"Take a picture of your question paper and automatically generate e-question paper for students. Also, provide detailed analysis at student, batch and institute level."}
                              imgUrl={Feature3}
                />
                <FeatureCards heading={"Class Management Solution"}
                              description={"Digital management of all the classes including Interactive and easy-to-use automatic schedule maker for administration."}
                              imgUrl={Feature6}
                />
            </div>
            <div className="col-12 col-md-12 text-center p-5">
                <h3>Ready to Get Started? </h3>
                <Description className="text-center mt-4">
                    Get your own website and app to run your institute digitally.
                </Description>
                <ButtonStyle className="m-3 p-2" type="primary"
                             onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                    Book A Demo
                </ButtonStyle>
            </div>
        </div>

    )
};

export default Features;
