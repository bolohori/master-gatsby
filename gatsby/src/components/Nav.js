import React from 'react';
import { Link, navigate } from 'gatsby';

// Imperative declaration to navigate to a page
// The replace option from navigate gives the options to click back to a page - don't use buttons
// function goToSliceMasters() {
//   // 1. Wait for 2 seconds
//   setTimeout(() => {
//     console.log('go to slicemasters page');
//   }, 2000);
//   navigate('/slicemasters', { replace: true });
//   // 2. Change the page
// }

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          {/* The link is declarative */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
        <li>
          <Link to="/order">Order ahead</Link>
        </li>
        {/* <li>
          <button type="button" onClick={goToSliceMasters}>
            Click me to see slicemasters after 2 seconds
          </button>
        </li> */}
      </ul>
    </nav>
  );
}

// Other way to create a component, same as export default, no fallbacks is

// const Nav = () => {

// }
