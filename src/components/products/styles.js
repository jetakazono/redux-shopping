import styled from "styled-components"

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding: 40px;
    margin-top: 50px;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px;
    }
`
