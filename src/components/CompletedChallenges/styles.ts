import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 3.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #D7D8DA;

    font-weight: 500;
`;

export const Text = styled.p`
    font-size: 1.25rem;

    > span {
        font-size: 1.5rem;
    }
`;