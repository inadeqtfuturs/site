import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { theme } from '../..';

const Dropdown = styled.ul`
  padding: ${theme.space[2]} 0 0;
  margin: ${theme.space[2]} 0 0;
  border-top: ${theme.borders[1]} ${theme.colors.text};
  ${theme.mediaQueries.md} {
    border: none;
    padding: 0;
  }
`;

const DropdownIcon = styled(FaChevronDown)`
  display: none;
  ${theme.mediaQueries.md} {
    display: flex;
    margin-left: ${theme.space[2]};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${theme.colors.text};
  &:hover {
    opacity: 0.6;
  }
`;

const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights[1]};
  font-size: ${theme.fontSizes[4]};
  padding: ${theme.space[2]} 0;
  // targets sub items
  ul li {
    padding: 0;
    margin: 0;
    font-weight: ${theme.fontWeights[1]};
    font-size: ${theme.fontSizes[4]};
  }
  ${theme.mediaQueries.md} {
    margin-right: ${theme.space[4]};
    display: block;
    transition-duration: 0.32;
    flex-direction: column;
    & ul {
      visibility: hidden;
      opacity: 0;
      display: none;
      transition: all 0.3s ease;
    }
    &:hover > ul,
    &:focus-within > ul {
      visibility: visible;
      opacity: 1;
      display: block;
      position: absolute;
    }
    &:last-child {
      margin: 0;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${theme.colors.background};
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  height: 100vh;
  width: 100%;
  padding: ${theme.space[4]};
  z-index: ${theme.zIndices[6]};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  ${theme.mediaQueries.md} {
    flex-direction: row;
    background-color: transparent;
    position: relative;
    background-color: transparent;
    height: auto;
    width: auto;
    transition: none;
    padding: 0;
    transform: none;
  }
`;

const Toggle = styled.button`
  position: absolute;
  right: ${theme.space[3]};
  top: ${theme.space[3]};
  z-index: ${theme.zIndices[6]};
  background-color: transparent;
  border: none;
  svg {
    path {
      fill: ${theme.colors.text};
    }
  }
  ${theme.mediaQueries.md} {
    display: none;
  }
`;

function Item({ label, to }) {
  return (
    <ListItem key={label}>
      <StyledLink to={to}>{label}</StyledLink>
    </ListItem>
  );
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

function MenuItem({ item }) {
  const { label, to, subItems } = item;

  return subItems ? (
    <ListItem key={label}>
      <StyledLink to={to}>
        {label} <DropdownIcon size={theme.fontSizes[2]} />
      </StyledLink>
      <Dropdown>
        {subItems.map(subItem => {
          return (
            <Item key={subItem.label} label={subItem.label} to={subItem.to} />
          );
        })}
      </Dropdown>
    </ListItem>
  ) : (
    <Item label={label} to={to} />
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string,
    subItems: PropTypes.array
  }).isRequired
};

function Menu({ menuItems }) {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <Nav open={open}>
        {menuItems.map(item => (
          <MenuItem key={item.label} item={item} />
        ))}
      </Nav>
      <Toggle onClick={() => toggleOpen(!open)}>
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </Toggle>
    </>
  );
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Menu;
