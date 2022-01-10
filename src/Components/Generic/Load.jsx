import styled from "styled-components"

import { ThreeDots } from "react-loader-spinner"

export default function Load({ loading, value }) {

    return (
        loading === false ?
        <input type="submit" value={value} /> :
            <DivLoader>
                <ThreeDots type="ThreeDots" color="white" height={80} width={80} />
            </DivLoader>
    )
}

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