import PropTypes from "prop-types";
import { usePerfil } from "../../context";
import {Container} from "./Profile.styles";

export const Profile = (profile) => {
    const {handleFollow} = usePerfil();
    return (
        <Container>
            <p>{profile.nome}</p>
            <button onClick={()=> handleFollow(profile.id)}>
                {profile.seguindo ? "Seguindo" : "Seguir"}
            </button>
        </Container>
    );
};

Profile.propTypes = {
    children: PropTypes.node,
};

