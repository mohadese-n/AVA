import React from "react"; 
import { NavLink, useLocation } from "react-router-dom";
const MultiNavLink = ({to,children,activePaths,...props}) =>{
    const location = useLocation();
    const isActive = activePaths.some(path => location.pathname.includes(path));
    return(
        <NavLink to={to} {...props}  isActive={() => isActive}>
            {children}
        </NavLink>
    )
}
export default MultiNavLink;