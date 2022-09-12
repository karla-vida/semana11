import { useCustomTheme } from "../../context"
import { Container, Title, Button, ContentTitle } from "./NavBarStyled"
import logo from "../../assets/react.svg"

export const NavBar = ()=> {
    const {handleTheme} = useCustomTheme();
    return (
    <Container>
        <ContentTitle>
        <img src={logo} alt= "logo"/>
        <Title>Perfils</Title>
        </ContentTitle>
        <Button onClick={handleTheme}> Alterar tema </Button>
    </Container>
);
};