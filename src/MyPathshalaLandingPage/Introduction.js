import React,{ forwardRef, useRef } from "react";
import {Heading, Description} from "./styled";
import {Button} from "antd";
import useMobile from '../assets/js/useMobile'
import {primary_colors} from "../global";
import Landing from "../assets/landing image picture.svg"

const Intro = forwardRef(({ onBackClick }, ref) =>  {
    const isMobile = useMobile()

    return (
        <div ref={ref}>
            {
                !isMobile &&
                <div className="row pl-5 ml-3"
                     style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%"}}>
                    <div className="col-md-5 p-4">
                        <Heading className="ml-3 mb-4" style={{color: "#444444", fontSize: "5rem"}}>
                            Launch your online teaching portal easily
                        </Heading>
                        <Description className="mr-3 ml-3 mt-4"
                                     style={{color: "#666666", fontSize: "2rem", lineHeight: "2.6rem"}}
                        >
                            Get your own website and app to run your institute digitally.
                        </Description>
                        <Button style={{
                            color: "white",
                            outline: "none",
                            backgroundColor: primary_colors[4],
                            width: "30%",
                            border: `1px solid ${primary_colors[4]}`,
                            boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
                            borderRadius: 4
                        }} className="m-3 p-2" type="primary" danger onClick={() => window.scrollTo(0,document.body.scrollHeight)}>
                            Book A Demo
                        </Button>
                    </div>
                    <div className="col-md-7 pt-4 pl-4">
                        <img
                            style={{width: "100%"}}
                            src={Landing}
                        />
                    </div>
                </div>
            }
            {
                isMobile &&
                <div style={{width: "100%", minHeight: "100vh"}}>
                    <img
                        style={{width: "100%"}}
                        src={Landing}
                    />
                    <div className="p-3">
                        <div className="mt-3" style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                            width: "100%"
                        }}>
                            <Heading style={{color: "#444444", fontSize: "2.3rem"}}>
                                Launch your online teaching portal easily
                            </Heading>
                            <div style={{
                                alignSelf: "center",
                                height: "0.5rem",
                                width: "4.5rem",
                                backgroundColor: "#ff4d4f"
                            }}/>
                        </div>

                        <Description className="ml-2 mr-2"
                                     style={{
                                         color: "#666666",
                                         fontSize: "1rem",
                                         lineHeight: "1.3rem",
                                         marginTop: "30px",
                                         textAlign: "center"
                                     }}
                        >
                            Get your own website and app to run your institute digitally.
                        </Description>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginTop: "35px"
                        }}>
                            <Button style={{
                                color: "white",
                                outline: "none",
                                backgroundColor: primary_colors[4],
                                width: "30%",
                                border: `1px solid ${primary_colors[4]}`,
                                boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
                                borderRadius: 4
                            }} className="m-3 p-2" type="primary" onClick={() => window.scrollTo(0,document.body.scrollHeight)}>
                                Book A Demo
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
});

export default Intro;
