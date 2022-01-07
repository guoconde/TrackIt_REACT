import styled from "styled-components"

export default function Footer() {
    return (
        <>
            <DivFooter>
                <p>Hábitos</p>
                <div>
                    <span>Hoje</span>
                </div>
                <p>Históricos</p>
            </DivFooter>
        </>
    )
}

const DivFooter = styled.footer`
    width: 375px;
    height: 70px;

    position: fixed;
    bottom: 0;

    background-color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 35px;

    p {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;

        text-decoration: none;
    }

    div {
        width: 91px;
        height: 91px;

        position: fixed;
        left: 140px;
        bottom: 10px;

        border-radius: 51%;

        background-color: #52B6FF;

        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`