    import { styled } from "styled-components";

    export const Container = styled.button`
        background-color: ${({theme}) => theme.COLORS.RED};
        color: ${({theme}) => theme.COLORS.WHITE};

        width: 100%;
        height: 4.8rem;
        padding: 1.2rem 3.3rem;
        gap: 0.8rem;
        border: 0;
        border-radius: 1rem;
    
    font-weight: 500;
    font-size: 1.4rem;

        &:disabled {
            opacity: 0.5;
        }
    `;