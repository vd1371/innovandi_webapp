import styled from "styled-components"

const MessageContainer = styled.div`
    margin-top: 40vh;
    margin-left: 10vw;
    margin-right: 10vw;
    padding: 20;
    background-color: white !important;
    display: flex;
    justify-content: center;
`

const H = styled.h3`
    text-align: center;
`

export default function NoResultsMesssage(){
    return(
        <MessageContainer>
            <H>You need to perform the computation before seeing the results</H>
        </MessageContainer>
    )
}