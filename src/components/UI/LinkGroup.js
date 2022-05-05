import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  display: inline-flex;
  text-decoration: none;
  font-size: 1.5rem;
  width: 150px;

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    width: unset;
  }
`;

const Div = styled.div`
  position: relative;
`;

const SubMenu = styled.div`
  position: absolute;
  background-color: white;
  z-index: 100;
  width: 100%;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const SpecialLink = styled(Link)`
  color: black;
  padding: 8px;

  &:hover {
    color: black;
    background-color: grey;
    cursor: pointer;
  }
`;

const LinkGroup = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [opened, setOpened] = useState(false);
  const open = !!anchorEl;

  const handleClose = () => {
    setAnchorEl();
  };

  return (
    <Div
      onClick={() => setOpened(!opened)}
      onMouseEnter={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}
    >
      <StyledLink accent onClick={(event) => setAnchorEl(event.currentTarget)}>
        {props.title}
      </StyledLink>
      {opened && (
        <SubMenu>
          {props.links.map((el) => (
            <SpecialLink to={el.to}>{el.name}</SpecialLink>
          ))}
        </SubMenu>
      )}
    </Div>
  );
};

export default LinkGroup;
