import React from "react";
import Styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import withReveal from "react-reveal/withReveal";
import { Fade } from "react-reveal";

function Section({ bgImg, title, description, descriptionLink, rightBtn, leftBtn }) {


  return (
    <SectionContain bgImg={bgImg} >
      <TextItem>
        <h1>{title}</h1>
        <p>
          {description} <a href="/">{descriptionLink}</a>
        </p>
      </TextItem>
      <Buttons>
        <ButtonGroup>
          <RightButton>{rightBtn}</RightButton>
          {leftBtn &&
            <LeftButton>{leftBtn}</LeftButton>}
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
scroll-snap-align: start;
width:100vw;
height:100vh;
background: ${props => `url("/images/${props.bgImg}")`} no-repeat center/cover;
justify-content: space-around;
display:flex;
flex-direction: column;
align-items: center;
`;

const TextItem = withReveal(
  Styled.div`
height:100vh;
padding:35vh 0;
text-align: center;
p{
    font-size:14px;
    margin-top:7px;
    a{
      text-decoration:underline;
    }
}
`,
  <Fade duration={1000} distance={"100px"} bottom />
);
const Buttons = Styled.div`

display:flex;
flex-direction:column;
align-items: center;
margin-bottom:25vh;
`;

const ButtonGroup = withReveal(
  Styled.div`
display:flex;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
  flex-direction: column;
}
`,
  <Fade duration={1000} distance={"50px"} bottom />
);

const RightButton = Styled.button`
background-color:rgba(0, 0, 0, 0.7);
border:none;
font-weight:600;
border-radius:50px;
color:white;
width:300px;
padding:10px 0px;
margin:8px 5px;
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
