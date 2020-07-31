/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Button = styled.button`

    color: var(--white);
    border: 1.25px solid var(--white);
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 8px;
    text-decoration: none;
    display: inline-block;
    opacity: 0.7;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: 1;
        transform: scale(1.025);
    }
`;

export default Button;
