import styled from "styled-components"

import Top from "../Top"
import Footer from "../Footer"

export default function Habits() {
    return (
        <>
            <Top />
            <DivMain>
                <HeaderMain>
                    <span>Meus hábitos</span>
                    <button>+</button>
                </HeaderMain>
                <DivNewHabit>
                    <input type="text" placeholder="nome do hábito"/>
                    <ul>
                        <li>D</li>
                        <li>S</li>
                        <li>T</li>
                        <li>Q</li>
                        <li>Q</li>
                        <li>S</li>
                        <li>S</li>
                    </ul>
                    <div>
                        <p>Cancelar</p>
                        <button>Salvar</button>
                    </div>
                </DivNewHabit>
                <SpanMain>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SpanMain>
            </DivMain>
            <Footer />
        </>
    )
}

const DivMain = styled.div `
    width: 100%;
    height: 100vh;
    
    padding: 0 20px;

    background-color: #f2f2f2;
`

const HeaderMain = styled.header `
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

        background-color: #52B6FF;
        border: none;
        border-radius: 5px;

        font-size: 27px;
        font-weight: 400;
        line-height: 34px;
        color: white;

        :active {
            background-color: #52A6FF;
        }
    }
`
const SpanMain = styled.span `
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;

    color: #666666;
`

const DivNewHabit = styled.div `
    width: 100%;
    height: 180px;

    border-radius: 5px;

    margin-bottom: 25px;
    padding: 20px;

    background-color: white;

    display: flex;
    flex-direction: column;

    ul {
        display: flex;
        gap: 5px;

        margin-top: 10px;

        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #DBDBDB;


        li {
            width: 30px;
            height: 30px;
            border: 1px solid #d4d4d4;
            border-radius: 5px;

            display: flex;
            justify-content: center;
            align-items: center;
        }

    }

    div {
        margin-top: 30px;

        display: flex;
        justify-content: end;
        gap: 20px;
    }
`