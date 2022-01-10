import styled from "styled-components"

import MiniIcon from './assets/TrackIt.png'
import { useAuth } from "../../Generic/Providers/Auth"

export default function Top() {

    const { user } = useAuth()
    console.log(user)

    return (
        <DivTop>
            <img src={MiniIcon} alt="Mini-Icon" />
            <div>
                <img src={user.image} alt="tem que trocar" />
            </div>
        </DivTop>
    )
}

const DivTop = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
    background-color: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    position: fixed;
    top: 0;

    img {
        width: 100px;
    }

    div {
        width: 51px;
        height: 51px;

        border-radius: 51%;

        background-color: white;

        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background-size: contain;
    }
`