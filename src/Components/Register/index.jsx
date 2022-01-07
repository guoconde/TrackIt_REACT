import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Icon from '../../assets/img/TrackIt.png'

export default function Register() {
    const navigate = useNavigate()

    return (
        <DivContainer>
            <img src={Icon} alt="Icon-TrackIt" />
            <DivInput>
                <input type="email" name="" placeholder="email" />
                <input type="password" name="" placeholder="senha" />
                <input type="text" name="" placeholder="nome" />
                <input type="url" name="" placeholder='foto' />
                <input type="submit" value="Cadastrar" />
            </DivInput>
            <p onClick={() => navigate('/')}>Já tem uma conta? Faça login!</p>
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

    font-family: Lexend Deca; 
    
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
`