import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../src/Navbar';
import NavBrand from '../../src/NavBrand';
import Nav from '../../src/Nav';
import Affix from '../../src/Affix';

const NAV_LINKS = {
  'introduction': {
    link: '/introduction.html',
    title: 'Lojas'
  },
  'components': {
    link: '/components.html',
    title: 'Compartilhar'
  },
  'contact': {
    link: '/contact.html',
    title: 'Contato'
  }
};

const NavMain = React.createClass({
  propTypes: {
    activePage: React.PropTypes.string
  },

  render() {
    let brand = <Link to="/" className="navbar-brand">Shop List</Link>;
    let links = Object.keys(NAV_LINKS).map(this.renderNavItem).concat([
      <li key="shop-link">
        <a href="http://shop.martche.ca" target="_blank">Old Version</a>
      </li>
    ]);

    return (
      <Affix
        className="bs-top-menu hidden-print"
        role="complementary"
        offsetTop={0}>
        <Navbar componentClass="header" staticTop className="bs-docs-nav" role="banner" toggleNavKey={0} >
          <NavBrand>{brand}</NavBrand>
          <Nav className="bs-navbar-collapse" role="navigation" eventKey={0} id="top">
            {links}
          </Nav>
        </Navbar>
      </Affix>
    );
  },

  renderNavItem(linkName) {
    let link = NAV_LINKS[linkName];

    return (
        <li className={this.props.activePage === linkName ? 'active' : null} key={linkName}>
          <Link to={link.link}>{link.title}</Link>
        </li>
      );
  }
});

export default NavMain;
