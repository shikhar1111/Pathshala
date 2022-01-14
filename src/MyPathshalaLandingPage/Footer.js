import React from "react";
import useMobile from '../assets/js/useMobile'

const Footer = (props) => {
    const isMobile = useMobile()

    return (
        <div>
              {
                !isMobile &&
                <div className="p-2" style={{
                    // display: "flex",
                    // flexDirection: "row",
                    backgroundColor: "#FF4D4F",
                    color: "#F4F4F4",
                    width: "100%",
                    textAlign:"center"
                }}>
                    {/*<div className="ml-5 mr-auto" style={{display: "flex", flexDirection: "row", fontSize: "0.9rem"}}>*/}
                    {/*    Terms of Use | Privacy Policy | Payment Terms | Refund and Cancellation*/}
                    {/*</div>*/}
                    <div className="mr-3" style={{fontSize: "0.9rem"}}>
                        mypathshala Institute | All Rights Reserved.
                    </div>
                </div>
            }
            {
                isMobile &&
                <div className="p-2" style={{
                    // display: "flex",
                    // flexDirection: "row",
                    backgroundColor: "#FF4D4F",
                    color: "#F4F4F4",
                    textAlign:"center",
                    width: "100%"
                }}>
                    {/*<div className="ml-5 mr-auto" style={{display: "flex", flexDirection: "row", fontSize: "0.4rem"}}>*/}
                    {/*    Terms of Use | Privacy Policy | Payment Terms | Refund and Cancellation*/}
                    {/*</div>*/}
                    <div className="mr-3" style={{fontSize: "0.4rem"}}>
                        © 2020 Institute | All Rights Reserved.
                    </div>
                </div>
            }

        </div>

    )
};

export default Footer;
