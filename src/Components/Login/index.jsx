import styled from "styled-components"
import axios from "axios"
import schema from "../Generic/ValidationLogin"
import Load from "../Generic/Load"

import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from "../Generic/Providers/Auth"

import Icon from '../../assets/img/TrackIt.png'

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [loading, setLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const { setUser } = useAuth()

    const navigate = useNavigate()

    function postSignIn(data) {
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', data)

        promisse.then((response) => {
            navigate('/hoje')
            handleLogin(response.data)
        })

        promisse.catch(() => {
            alert('Por favor verifique os dados informados.')
            setLoading(false)
            setIsDisabled(false)
        })
    }

    function handleLogin(info) {
        localStorage.setItem('user', JSON.stringify(info))
        setUser(info)
    }

    function postLogin(data) {
        postSignIn(data)
        setLoading(true)
        setIsDisabled(true)
        handleLogin(data)
    }
    
    return (
        <DivContainer>
            <img src={Icon} alt="Icon-TrackIt" />
            <DivInput onSubmit={handleSubmit(data => postLogin(data))}>
                <input {...register('email')} disabled={isDisabled} name='email' type="email" placeholder="email" />
                <p>{errors.email?.message}</p>
                <input {...register('password')} disabled={isDisabled} name='password' type="password" placeholder="senha" />
                <p>{errors.password?.message}</p>
                <Load loading={loading} value='Entrar'/>
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

    p {
        text-decoration: none;
        color: red;
        padding-left: 15px;
    }
`