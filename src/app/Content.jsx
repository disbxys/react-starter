import React from "react";
import {Route, Routes} from "react-router-dom";

import styled from "styled-components";
import Home from "../pages/Home";
import {useUser} from "../hook/User";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    padding: 25px;
    
    box-shadow: inset 0 3px 5px -3px #000000;
`

const Content = () => {
    const {accessToken} = useUser();

    return (
        <StyledDiv>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </StyledDiv>
    );
}

export default Content;