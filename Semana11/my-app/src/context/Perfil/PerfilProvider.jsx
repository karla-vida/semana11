import PropTypes from 'prop-types';
import {PerfilContext} from './PerfilContext';
import { useState } from 'react';
import {service} from '../../services';

export const PerfilProvider = ({children}) => {
const [profile,setProfile] = useState(service);
const handleFollow = (id) => {
    const profileUpDated = profile.map((p)=> p.id === id ? {...p, seguindo: !p.seguindo}:p,);
    setProfile(profileUpDated);
};

    return (<PerfilContext.Provider 
    value={{profile, handleFollow}}>
        {children}
        </PerfilContext.Provider>)
};

PerfilProvider.propTypes = {
    children: PropTypes.node,
};

