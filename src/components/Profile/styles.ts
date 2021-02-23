import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    > div {
        margin-left: 1.5rem;
    }
`;

export const Img = styled.img`
    width: 5.5rem;
    height: 5.5rem;

    border-radius: 50%;
`;

export const Strong = styled.strong`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--title);
`;

export const Level = styled.p`
    font-size: 1;
    margin-top: 0.5rem;

    > img {
        margin-right: 0.5rem;
    }
`;

