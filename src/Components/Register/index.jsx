import styled from 'styled-components'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Icon from '../../assets/img/TrackIt.png'

export default function Register() {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate()

    function postSignUp(data) {
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', data)
        promisse.then(response => console.log(response))
        promisse.catch(error => console.log(error))
    }
    
    function postRegister(data) {
        postSignUp(data)
    }

    return (
        <DivContainer>
            <img src={Icon} alt="Icon-TrackIt" />
            <DivInput onSubmit={handleSubmit((data) => postRegister(data))}>
                <input {...register('email')} type="email" name="email" placeholder="email" />
                <input {...register('password')} type="password" name="password" placeholder="senha" />
                <input {...register('name')} type="text" name="name" placeholder="nome" />
                <input {...register('image')} type="url" name="image" placeholder='foto' />
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