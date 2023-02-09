import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Anderson Mourot</h1>
      {props.children}
    </header>
  );
}

export default Header;
