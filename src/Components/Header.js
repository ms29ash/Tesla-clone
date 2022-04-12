import React, { useState } from "react";
import Styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const nav = [
    "Model 3",
    "Model X",
    "Model Y",
    "Model S",
    "Solar Panel",
    "Solar Roof",
  ];
  const navItem = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    " Solar Roof",
    " Solar Panels",
    "Existing Inventory",
    "Used Inventory",
    "Trade-In",
    "Test Drive",
    "Powerwall",
    "Commercial Energy",
    "Utilities",
    "Charging",
    "Find Us",
    "Support",
    "Investor Relations",
    "Shop",
    "Account",
    "More",
  ];
  return (
    <Nav>
      <Logo>
        <svg
          class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
            fill="currentColor"></path>
        </svg>
      </Logo>
      <CenterMenu>
        {nav.map((navitem, index) => {
          return <NavLink key={index}>{navitem}</NavLink>;
        })}
      </CenterMenu>
      <SideMenu>
        <NavLink href="">Shop</NavLink>
        <NavLink href="">Account</NavLink>
        <NavLink onClick={() => setMenuDisplay(true)} href="">
          Menu
        </NavLink>
      </SideMenu>

      <Menu show={menuDisplay}>
        <CloseButton>
          <AiOutlineClose onClick={() => setMenuDisplay(false)} />
        </CloseButton>
        <NavItems>
          {navItem.map((item, index) => {
            return <NavLink key={index}>{item}</NavLink>;
          })}
        </NavItems>
      </Menu>
    </Nav>
  );
}

export default Header;

const Nav = Styled.nav`
font-weight:500;
font-size:14px;
padding: 15px;
position: fixed;
top: 0;
left: 0;
right: 0;
display:flex;
align-items: center;
justify-content: space-between;
z-index: 100;

`;

const Logo = Styled.div`
svg{
    width:100px;
}`;
const CenterMenu = Styled.div`
list-style-type: none;
display:flex;
align-items: center;
justify-content: center;
flex:1;
flex-wrap: nowrap;
@media(max-width:1200px){
  display:none;
}
`;

const NavLink = Styled.button`
border:none;
background-color:transparent;
padding:10px 8px;
font-size:14px;
font-weight:600;
    margin:0 3px;
    transition:color 300ms ease;
    &:hover{
        background: rgba(0,0,0,0.08);
        border-radius: 12px;
        backdrop-filter:blur(5px);
    }

`;

const SideMenu = Styled.div`
display:flex;
align-items:center;

}

`;

const Menu = Styled.div`
background-color:#ffffff;
position:fixed;
top: 0;
right: 0;
bottom: 0;
width:250px;
padding:25px 30px;
justify-content:space-between;
overflow-y:scroll;
transition: all 250ms ease;
transform:${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
`;

const NavItems = Styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
width:100%;
button{
  width:100%;
  text-align:left;
}

`;

const CloseButton = Styled.div`
display:flex;
justify-content:flex-end;
align-items:flex-end;
svg{
  padding:5px;
  border-radius:1000px;
  font-size:30px;
  font-weight: bold;
  width:30px;
  &:hover{
    background: rgba(0,0,0,0.08);
    backdrop-filter:blur(5px);
  }
}
`;
