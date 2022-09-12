import styled from "styled-components";


export const Container = styled.header`
    background-color: ${({theme})=>theme.colors.ba};
    padding: ${({theme})=>theme.spacing.xl};
    display: flex;
    justify-content: space-between;
`;

export const ContentTitle = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme})=>theme.spacing.md};
`;

export const Title = styled.h1`
color: ${({theme})=>theme.colors.primary};
`;

export const Button = styled.button`
background-color: ${({theme})=>theme.colors.secundary};
color: ${({theme})=>theme.colors.primary};
cursor: pointer;
padding: ${({theme})=>theme.spacing.md};
border: none;
border-radius:${({theme})=>theme.spacing.sm};
`;
