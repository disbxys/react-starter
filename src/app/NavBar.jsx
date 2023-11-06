import { useUser } from "../hook/User";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;

    width: calc(100vw - 10px);
    height: 50px;
    padding: 5px;

    background-color: #7d8591;
`;

const StyledNavLink = styled(NavLink)`
    padding: 10px;
    font-size: 25px;
    color: #c97a04;
    font-weight: 600;
    text-decoration: none;
    text-shadow: 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black
`;

const NavBar = () => {
    const {accessToken} = useUser();

    return (
        <StyledNav>
            <StyledNavLink to="/">Home</StyledNavLink>
        </StyledNav>
    );
}

export default NavBar;