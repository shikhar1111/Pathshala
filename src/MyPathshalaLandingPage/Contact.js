import React, { useState } from "react";
import {primary_colors} from "../global";
import {Button, Input} from "antd";
import {
    HomeOutlined,
    MailOutlined,
    SkypeOutlined,
    PhoneOutlined,
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined
} from "@ant-design/icons";
import {ContactForm} from "./styled";
import {message} from "antd";

const Contact = () => {
    const [name, setName]=useState();
    const [Message,setMessage] = useState();
    const [email,setEmail]= useState();
    const submit= () =>
    {
        const data = {
            name:name,
            email:email, 
            message:Message
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          fetch("https://backend.mypathshala.net/contact_us/", requestOptions)
            .then(response => response.text())
            .then(result => {setName(null);setMessage(null);setEmail(null);message.success("Response submitted")})
            .catch(error => console.log('error', error));
    }
    return (
        <div className="container p-5">
            <div className="row m-xl-3 text-center">
                <div className="col-12 col-md-4 p-5" style={{backgroundColor: primary_colors[4]}}>
                    <div className="mt-5 p-3">
                        <div className="d-flex text-left mt-2" style={{color: "white"}}>
                            <HomeOutlined className="mr-4" style={{fontSize: "2rem"}}/>
                            <h5>A-747 Rajendra Nagar, Bareilly</h5>
                        </div>
                        <div className="d-flex text-left mt-4" style={{color: "white"}}>
                            <MailOutlined className="mr-4" style={{fontSize: "2rem"}}/>
                            <h5>mypathshala.net@gmail.com</h5>
                        </div>
                        {/*<div className="d-flex text-left mt-4" style={{color: "white"}}>*/}
                        {/*    <SkypeOutlined className="mr-4" style={{fontSize: "2rem"}}/>*/}
                        {/*    <h5>Pathshala</h5>*/}
                        {/*</div>*/}
                        <div className="d-flex text-left mt-4" style={{color: "white"}}>
                            <PhoneOutlined className="mr-4" style={{fontSize: "2rem"}}/>
                            <h5>8171781016, 9997859777</h5>
                        </div>
                        <div className="d-flex ml-4 mt-5">
                            {/*<a href="/" style={{color: "white"}}>*/}
                            {/*    <FacebookOutlined className="mr-4" style={{fontSize: "2rem"}}/>*/}
                            {/*</a>*/}
                            {/*<a href="/" style={{color: "white"}}>*/}
                            {/*    <InstagramOutlined className="mr-4" style={{fontSize: "2rem"}}/>*/}
                            {/*</a>*/}
                            {/*<a href="/" style={{color: "white"}}>*/}
                            {/*    <LinkedinOutlined className="mr-4" style={{fontSize: "2rem"}}/>*/}
                            {/*</a>*/}
                            {/*<a href="/" style={{color: "white"}}>*/}
                            {/*    <PhoneOutlined className="mr-4" style={{fontSize: "2rem"}}/>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8 p-5 text-left pl-xl-4" style={{backgroundColor: primary_colors[0]}}>
                    <div className="ml-xl-3">
                        <h1 style={{color: primary_colors[4], fontWeight: 600}}>Get in Touch</h1>
                        <span style={{color: "#666666", fontStyle: "italic"}}>Feel free to drop us a line below</span>
                        <ContactForm>
                            <Input className="mt-4 p-4" value={name} placeholder="Your Name" onChange={(e)=>setName(e.target.value)} style={{
                                border: "1.3px solid #ECECEC",
                                // width: "80%",
                                outline: "none",
                                backgroundColor: "white",
                                borderRadius: 5,
                            }}/>
                            <Input className="mt-4 p-4" value={email} placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} style={{
                                border: "1.3px solid #ECECEC",
                                // width: "80%",
                                outline: "none",
                                backgroundColor: "white",
                                borderRadius: 5,
                            }}/>
                            <Input.TextArea className="mt-4 p-4" value={Message} placeholder="Message" onChange={(e)=>setMessage(e.target.value)} style={{
                                border: "1.3px solid #ECECEC",
                                // width: "80%",
                                outline: "none",
                                backgroundColor: "white",
                                borderRadius: 5,
                            }}/>
                            <Button style={{
                                color: "white",
                                outline: "none",
                                backgroundColor: primary_colors[4],
                                width: "30%",
                                border: `1px solid ${primary_colors[4]}`,
                                boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
                                borderRadius: 4
                            }} onClick={()=>submit()} className="mt-5 p-3" type="primary">
                                Send
                            </Button>
                        </ContactForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;