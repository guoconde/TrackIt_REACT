import styled from 'styled-components'
import axios from 'axios'
import schema from '../Generic/ValidationRegister'
import Load from '../Generic/Load'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

import Icon from '../../assets/img/TrackIt.png'

export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    function postSignUp(data) {
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', data)

        promisse.then(
            setTimeout(() => {
                navigate('/')
            }, 3000)
        )

        promisse.catch(() => {
            alert('Por favor verifique os dados informados.')
            setLoading(true)
            setIsDisabled(true)
        })
    }

    function postRegister(data) {
        postSignUp(data)
        setLoading(true)
        setIsDisabled(true)
    }

    return (
        <DivContainer>
            <img src={Icon} alt="Icon-TrackIt" />
            <DivInput onSubmit={handleSubmit((data) => postRegister(data))}>
                <input {...register('email')} disabled={isDisabled} type="email" name="email" placeholder="email" />
                <p>{errors.email?.message}</p>
                <input {...register('password')} disabled={isDisabled} type="password" name="password" placeholder="senha" />
                <p>{errors.password?.message}</p>
                <input {...register('name')} disabled={isDisabled} type="text" name="name" placeholder="nome" />
                <p>{errors.name?.message}</p>
                <input {...register('image')} disabled={isDisabled} type="url" name="image" placeholder='foto' />
                <p>{errors.image?.message}</p>
                <Load loading={loading} value='Cadastrar' />
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

    p {
        text-decoration: none;
        color: red;
        padding-left: 15px;
    }
`