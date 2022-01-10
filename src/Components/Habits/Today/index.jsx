import styled from "styled-components"
import axios from "axios"

import { useEffect, useState } from 'react'

import Top from "../Top"
import Footer from "../Footer"
import { useAuth } from "../../Generic/Providers/Auth"

export default function Today() {

    const { user } = useAuth()
    const [ habit, setHabit ] = useState('')

    useEffect(() => {
        if (user.token) {

            const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
                { headers: { 'Authorization': `Bearer ${user.token}` } })

            promisse.then(response => {
                setHabit(response.data)
            })

            promisse.catch(error => console.log(error))
        }
    }, [user.token])

    console.log(habit)

    return (
        <>
            <Top />
            <DivToday>
                <HeaderToday>
                    <span>Segunda, 17/05</span>
                    <p>Nenhum hábito concluído ainda</p>
                </HeaderToday>
                <DivHabit>
                    <DivInfo>
                        <span>Ler 1 capítulo de livro</span>
                        <span>Sequência atual: 3 dias</span>
                        <span>Seu recorde: 5 dias</span>
                    </DivInfo>
                    <DivCheck>
                        <ion-icon name="checkmark-outline"></ion-icon>
                    </DivCheck>
                </DivHabit>
            </DivToday>
            <Footer />
        </>
    )
}

const DivToday = styled.div`
    width: 100%;
    height: 100vh;
    
    padding: 0 20px;

    background-color: #f2f2f2;
`

const HeaderToday = styled.header`
    padding-top: 100px;

    margin-bottom: 20px;

    span {
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        color: #126BA5;
    }

    p {
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #BABABA;
    }
`

const DivHabit = styled.div`
    height: 100px;

    background-color: white;

    padding: 0 15px;

    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: #666666;

    span:first-child {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;

        margin-bottom: 5px;
    }
`

const DivCheck = styled.div`
    width: 70px;
    height: 70px;

    background-color: #EBEBEB;

    border-radius: 5px;

    font-size: 50px;
    --ionicon-stroke-width: 80px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`