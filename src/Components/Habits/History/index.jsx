import styled from "styled-components"

import Top from "../Top"
import Footer from "../Footer"

export default function History() {
    return (
        <>
            <Top />
            <DivHistory>
                <p>Histórico</p>
                <DivCalendar></DivCalendar>
            </DivHistory>
            <Footer />
        </>
    )
}

const DivHistory = styled.div`
    width: 100%;
    height: 100vh;
    
    padding: 0 20px;

    background-color: #f2f2f2;

    p {
        text-decoration: none;

        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        color: #126BA5;

        padding-top: 100px;
    }
`

const DivCalendar = styled.div `
    width: 335px;
    height: 402px;

    margin-top: 20px;
    border-radius: 10px;

    background-color: white;
`
