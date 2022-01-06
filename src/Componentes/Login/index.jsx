import styled from "styled-components"

import { GlobalStyle } from '../assets/css'
import Icon from './assests/TrackIt.png'

export default function Login() {
    return (
        <DivContainer>
            <GlobalStyle />
            <img src={Icon} alt="Icon-TrackIt" />
            <DivInput>
                <input type="email" name="" placeholder="email" />
                <input type="password" name="" placeholder="senha" />
                <input type="submit" value="Entrar" />
            </DivInput>
            <p>Não tem uma conta? Cadastre-se!</p>
        </DivContainer>
    )
}

const DivContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

    margin-top: 70px;
`

const DivInput = styled.form`
    width: 305px;

    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
`