import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledH1 = styled.h1`
    font-size: 50px;
`

const Home = () => {
    return (
        <StyledDiv>
            <StyledH1>Home</StyledH1>
        </StyledDiv>
    );
}

export default Home;