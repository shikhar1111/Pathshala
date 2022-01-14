import React, {useState} from "react";
import {SubHeading, Description} from "../styled";
import useMobile from '../../assets/js/useMobile';

const FeatureCards = (props) => {
    const isMobile = useMobile();

    return (
        <div>
            {
                !isMobile &&
                <div className="d-flex p-4" style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    width: "25rem"
                }}>

                    <img className="mb-3" src={props.imgUrl}
                         style={{alignSelf: "center", width: "8rem", height: "8rem"}}/>
                    <SubHeading style={{color: "#666666", fontSize: "1.8rem"}}>
                        {props.heading}
                    </SubHeading>
                    <Description
                        style={{color: "#666666", fontSize: "1rem", lineHeight: "1.6rem"}}
                    >
                        {props.description}
                    </Description>
                </div>
            }
            {
                isMobile &&
                <div className="d-flex p-1" style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    width: "9rem"
                }}>

                    <img className="mb-3" src={props.imgUrl}
                         style={{alignSelf: "center", width: "4rem", height: "4rem"}}/>
                    <SubHeading style={{color: "#666666", fontSize: "0.8rem"}}>
                        {props.heading}
                    </SubHeading>
                    <Description
                        style={{color: "#666666", fontSize: "0.6rem", lineHeight: "0.8rem"}}
                    >
                        {props.description}
                    </Description>
                </div>
            }
        </div>

    )
};

export default FeatureCards;
