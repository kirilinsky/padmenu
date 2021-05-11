import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { AiFillCaretLeft, AiFillHome } from "react-icons/ai";
import { useHistory, useLocation } from "react-router";
const Navbar = ({ header = "Меню" }) => {
  const [canGoHome, setCanGoHome] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);

  const _history = useHistory();
  const _location = useLocation();
  const goHome = () => {
    _history.push("/");
  };

  useEffect(() => {
    _location.pathname !== "/menu" && setCanGoHome(true);
    _history.action !== "POP" && setCanGoBack(true);
  }, []);
  return (
    <div className="gallery-nav">
      {canGoBack && (
        <button onClick={_history.goBack} className="gallery-nav-side">
          <AiFillCaretLeft />
        </button>
      )}
      <div className="gallery-nav-center">{header}</div>
      {canGoHome && (
        <button onClick={goHome} className="gallery-nav-side">
          <AiFillHome />
        </button>
      )}
    </div>
  );
};

export default Navbar;
