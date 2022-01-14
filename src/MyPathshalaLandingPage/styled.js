import styled from "styled-components";
import {primary_colors} from "../global";

export const Heading = styled.h1`
  font-family:'Roboto', 'arial', sans-serif ;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 9px!important;
 `;
export const SubHeading = styled.h1`
  font-family: 'Roboto', 'arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.02em;
`;
export const Description = styled.h1`
  font-family: 'Roboto', 'arial', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.005em;
`;
export const ContactForm = styled.div`
 width:80%;
 display:grid;
 @media(max-width:767px){
 width:100%;
 }
`;

export const ButtonStyle = styled.button`
 color: white;
 outline: none;
                    background-color: ${primary_colors[4]};
                    width: 10%;
                    border:1px solid ${primary_colors[4]};
                    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
                    border-radius: 4;
                     @media(max-width:767px){
 width:60%;
 }
`