import { usePerfil } from "../../context";
import { profile} from "../../components";
import { Container } from "./ProfilePages.styles";

export const ProfilePages = () => {
    const {profilePages} = usePerfil();
    return (
        <Container>
        {profilePages.map((p) => (   
        <profile key={p.id} profile={p} />
        ))}
         </Container>
    );
};