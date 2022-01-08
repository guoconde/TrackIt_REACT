import styled from "styled-components"

import Top from "../Top"
import Footer from "../Footer"
import NewHabit from "../NewHabit"

export default function Habits() {
    return (
        <>
            <Top />
            <DivMain>
                <HeaderMain>
                    <span>Meus hábitos</span>
                    <button>+</button>
                </HeaderMain>
                <NewHabit />
                <SpanMain>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SpanMain>
            </DivMain>
            <Footer />
        </>
    )
}

const DivMain = styled.div`
    width: 100%;
    height: 100vh;
    
    padding: 0 20px;

    background-color: #f2f2f2;
`

const HeaderMain = styled.header`
    padding-top: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;

    span {
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;

        font-size: 27px;
        font-weight: 400;
        line-height: 34px;
    }
`
const SpanMain = styled.span`
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;

    color: #666666;
`