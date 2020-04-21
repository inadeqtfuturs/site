import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { theme } from '../..';

const Brand = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 100;
`;

const ListItem = styled.li`
  padding: ${theme.space[1]} 0;
  font-weight: ${theme.fontWeights[1]};
  font-size: ${theme.fontSizes[3]};
  &:hover {
    text-decoration: underline;
  }
  ${theme.mediaQueries.sm} {
    margin-right: ${theme.space[3]};
  }
`;

const Menu = styled(motion.ul)`
  flex-basis: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-direction: column;
  ${theme.mediaQueries.sm} {
    display: flex !important;
    height: auto !important;
    flex-direction: row;
    flex-basis: unset;
    li:last-child {
      margin-right: 0;
    }
  }
`;

const Navbar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Toggle = styled.button`
  border: none;
  background: transparent;
  svg {
    stroke: ${theme.colors.primary};
  }
  ${theme.mediaQueries.sm} {
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

const variants = {
  initial: { height: '0', display: 'none' },
  hidden: { height: '0', overflow: 'hidden' },
  show: { height: '100%', display: 'flex' }
};

function IfMenu({ menuItems }) {
  const [open, toggleOpen] = useState(false);
  return (
    <Navbar>
      <Brand>
        <StyledLink to="/">if.</StyledLink>
      </Brand>
      <Toggle onClick={() => toggleOpen(!open)}>
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </Toggle>
      <Menu
        initial="initial"
        animate={open ? 'show' : 'hidden'}
        exit="initial"
        variants={variants}
      >
        {menuItems.map(item => (
          <Item key={item.label} label={item.label} to={item.to} />
        ))}
      </Menu>
    </Navbar>
  );
}

IfMenu.propTypes = {
  menuItems: PropTypes.array.isRequired
};

export default IfMenu;
