import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';
import './styles.css';

const Header = () => {

  useEffect(() => {
    // #region Smart Header
    const ScrollElement: HTMLDivElement = document.querySelector<any>("#Main");
    const Header: HTMLDivElement = document.querySelector<any>("#Header");
    const delta = 1;
    let didScroll = true;
    let lastScrollTop = 0;
    // Scroll validation
    ScrollElement.onscroll = () => {
      didScroll = true;
    }
    setInterval(() => {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 0);
    function hasScrolled() {
      const st = ScrollElement.scrollTop;
      // Only validate if scroll > delta
      if (Math.abs(lastScrollTop - st) <= delta) {
        return;
      }
      // If scroll beyond Header, add class HeaderSlide
      // This is necessary so you never see what is "behind" the Header.
      if (st > lastScrollTop && st > Header.offsetHeight) {
        // Scroll Down
        Header.classList.add("HeaderSlide");
      } else {
        // Scroll Up
        if (st + window.innerHeight < ScrollElement.scrollHeight) {
          Header.classList.remove("HeaderSlide");
        }
      }
      lastScrollTop = st;
    }
    // #endregion
  }, [])

  return (
    <div id="Header">
      <hr />
      <Link to="/">
        <img src={logo} className="Logo" alt="Logo" width="64px" height="64px" />
      </Link>
      <hr />
    </div>
  )
}

export default Header;
