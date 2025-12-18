import { Link } from "react-router-dom";
import styled from "styled-components";

//styling
const StyledLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: Large;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
margin-left: 20px;
transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px); 
  }

  @media (min-width: 768px) {
    margin-left: 50px;
  }
`;

//component
const NavLink = ({ to = "/", children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default NavLink;