import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: #222222;
    display: flex;
    justify-content: space-between;
    color: #eee;
    padding: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
`

export const Logo = styled.div`
    font-size: 1.25rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;

    div {
        position: relative;
        font-weight: 500;

        &:hover {
            cursor: pointer;
            color: #ff007a;
        }

        &:nth-child(1),
        &:nth-child(2) {
            margin-right: 40px;
        }

        span {
            position: absolute;
            top: -10px;
            right: -14px;
            font-size: 14px;
            background: #d932d22e;
            color: #ff007a;
            border-radius: 100%;
            width: 20px;
            height: 20px;
            text-align: center;
        }
        svg {
            font-size: 20px;
        }
    }

    @media (max-width: 768px) {
        div {
            &:nth-child(1),
            &:nth-child(2) {
                margin-right: 10px;
            }
        }
    }
`
