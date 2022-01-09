import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: Lexend Deca;
    }
    
    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52B6FF;

        cursor: pointer;
    }
    
    input {
        height: 45px;
        
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        font-family: Lexend Deca;

        border: 1px solid #d4d4d4;
        border-radius: 5px;
        padding: 0 15px;

        outline-color: #52B6FF;
        color: #52B6FF;

        ::placeholder {
            color: #DBDBDB;
        }
    }

    input[type="submit"] {
        background-color: #52B6FF;
        color: #FFF;
        
        :active {
            background-color: #52A6FF;
        }
    }

    button {
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;

        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: white;

        :active {
            background-color: #52A6FF;
        }
    }
`
