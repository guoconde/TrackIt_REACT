import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import Icon from '../../assets/img/TrackIt.png'

export default function Login() {

    const navigate = useNavigate()

    return (
        <DivContainer>
            <img src={Icon} alt="Icon-TrackIt" />
            <DivInput>
                <input type="email" name="" placeholder="email" />
                <input type="password" name="" placeholder="senha" />
                <input type="submit" value="Entrar" />
            </DivInput>
            <p onClick={() => navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</p>
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

    font-family: Lexend Deca;
`

const DivInput = styled.form`
    width: 80%;

    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
`