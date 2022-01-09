import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ThreeDots } from "react-loader-spinner"
import { useForm } from "react-hook-form"
import axios from "axios"

import Icon from '../../assets/img/TrackIt.png'
import { useEffect, useState } from "react"

export default function Login() {

    const { register, handleSubmit } = useForm();
    const [ result, setResult ] = useState("");
    const [ loading ] = useState(true)

    useEffect(() => {

        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', result )

        promisse.then(response => console.log(response))
    }, [])

    const navigate = useNavigate()

    function teste(data) {
        setResult(data)
        console.log(result)
    }

    return (
        <DivContainer>
            <img src={Icon} alt="Icon-TrackIt" />
            <DivInput onSubmit={handleSubmit((data) => teste(data))}>
                <input {...register('email')} name='email' type="email" placeholder="email" />
                <input {...register('senha')} name='senha' type="password" placeholder="senha" />
                {
                    loading === true ?
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