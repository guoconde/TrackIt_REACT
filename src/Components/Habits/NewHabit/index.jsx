import styled from "styled-components"

export default function NewHabit() {
    return (
        <DivNewHabit>
            <input type="text" placeholder="nome do hábito" />
            <WeekList>
                <li>D</li>
                <li>S</li>
                <li>T</li>
                <li>Q</li>
                <li>Q</li>
                <li>S</li>
                <li>S</li>
            </WeekList>
            <HabitConfirm>
                <p>Cancelar</p>
                <button>Salvar</button>
            </HabitConfirm>
        </DivNewHabit>
    )
}

const DivNewHabit = styled.div`
    width: 100%;
    height: 180px;

    border-radius: 5px;

    margin-bottom: 25px;
    padding: 20px;

    background-color: white;

    display: flex;
    flex-direction: column;
`

const WeekList = styled.ul`
    display: flex;
    gap: 5px;

    margin-top: 10px;

    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #DBDBDB;


    li {
        width: 30px;
        height: 30px;
        border: 1px solid #d4d4d4;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const HabitConfirm = styled.div `
    margin-top: 30px;

    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;

    button {
        width: 84px;
        height: 35px;
    }

    p {
        text-decoration: none;

        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
    }
`