import React from "react";
import {UserProvider} from "../hook/User";
import styled from "styled-components";
import NavBar from "./NavBar";
import Content from "./Content";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const App = () => {
    return (
        <UserProvider>
            <StyledDiv>
                <NavBar/>
                <Content/>
            </StyledDiv>
        </UserProvider>
    );
}

export default App