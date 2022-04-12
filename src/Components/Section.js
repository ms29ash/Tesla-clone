import React from "react";
import Styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";

function Section() {
  return (
    <SectionContain>
      <TextItem>
        <h1>Model 3</h1>
        <p>
          Order Online for <a href="">Touchless Delivery</a>
        </p>
      </TextItem>
      <Buttons>
        <ButtonGroup>
          <RightButton>Custom Order</RightButton>
          <LeftButton>Existing Inventory</LeftButton>
        </ButtonGroup>
        <Arrowrpper>
          <DownArrow />
        </Arrowrpper>
      </Buttons>
    </SectionContain>
  );
}

export default Section;

const SectionContain = Styled.div`
width:100vw;
height:100vh;
background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD") no-repeat center/cover;
justify-content: space-around;
display:flex;
flex-direction: column;
align-items: center;
`;

const TextItem = Styled.div`
height:100vh;
padding:15vh;
text-align: center;
p{
    font-size:14px;
    a{
      text-decoration:underline;
    }
}
`;
const Buttons = Styled.div`

display:flex;
flex-direction:column;
align-items: center;
`;

const ButtonGroup = Styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-bottom:5vh;
`;

const RightButton = Styled.button`
background-color:rgba(0, 0, 0, 0.7);
border:none;
font-weight:600;
border-radius:50px;
color:white;
padding:10px 65px;
margin:0 5px;
`;

const LeftButton = Styled(RightButton)`
background-color:rgba(255, 255, 255, 0.7);
color:#171a20;
`;

const DownArrow = Styled(AiOutlineDown)`
font-size:25px;
font-weight:bold;
animation:move_down infinite 2s;
`;

const Arrowrpper = Styled.a``;
