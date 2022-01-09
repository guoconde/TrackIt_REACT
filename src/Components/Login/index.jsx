import styled from "styled-components"
import axios from "axios"

import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"

import Icon from '../../assets/img/TrackIt.png'

export default function Login() {

    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    const navigate = useNavigate()

    function postSignIn(data) {
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', data)
        
        promisse.then((response) => {
            navigate('/hoje')
            console.log(response)
        })
        
        promisse.catch(error => {
            console.log(error.name)
            setLoading(false)
            setIsDisabled(false)
        })
    }

    function postLogin(data) {
        postSignIn(data)
        setLoading(true)
        setIsDisabled(true)
    }

    return (
        <DivContainer>
            <img src={Icon} alt="Icon-TrackIt" />
            <DivInput onSubmit={handleSubmit((data) => postLogin(data))}>
                <input {...register('email')} disabled={isDisabled} name='email' type="email" placeholder="email" />
                <input {...register('password')} disabled={isDisabled} name='password' type="password" placeholder="senha" />
                {
                    loading === false ?
                        <input type="submit" value="Entrar" /> :
                        <DivLoader>
                            <ThreeDots type="ThreeDots" color="white" height={80} width={80} />
                        </DivLoader>
                }
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
`

const DivInput = styled.form`
    width: 80%;

    display: flex;
    flex-direction: column;
    gap: 5px;
`

const DivLoader = styled.div`
    width: 303px;
    height: 45px;

    border-radius: 5px;
    background-color: #52B6FF;
    opacity: 0.7;

    display: flex;
    justify-content: center;
    align-items: center;
`