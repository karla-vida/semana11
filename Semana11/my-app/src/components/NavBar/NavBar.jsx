import { useCustomTheme } from "../../context"
import { Container, Title, ContentTitle } from "./NavBarStyled"
import logo from "../../assets/react.svg"
import { Button } from "../Button/Button";

export const NavBar = ()=> {
    const {handleTheme} = useCustomTheme();
    return (
    <Container>
        <ContentTitle>
        <img src={logo} alt= "logo"/>
        <Title>Perfils</Title>
        </ContentTitle>
        <Button onClick={handleTheme}>Alterar Tema</Button>
    </Container>
);
};