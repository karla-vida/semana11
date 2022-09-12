import PropTypes from "prop-types";
import {ButtonStyled} from "./Button.styles";

export const Button = (onClick, children) => {
    return (
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    );
};

Button.propTypes = {
    children: PropTypes.node,
};
