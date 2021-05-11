import React, { useState } from "react";

import "./mobileMenu.scss";

/* jotai */
import { useAtom } from "jotai";
import { loginAtom, mobileMenuAtom, tokenAtom } from "../../Atoms";
import Form from "./modules/Form";
import Orgs from "./modules/Orgs";
import axios from "axios";

const MobileMenu = () => {
  const [mobile, set_mobile] = useAtom(mobileMenuAtom);
  const [orgs, setOrgs] = useState([]);
  const [login] = useAtom(loginAtom);
  const [token] = useAtom(tokenAtom);

  function getOrgs() {
    axios
      .get("/organization/list", {
        baseURL: login.url,
        params: {
          access_token: token.token,
        },
      })
      .then((x) => setOrgs(x.data))
      .catch((e) => {
        console.log(e, "ошибка при получении списка организаций");
      });
  }

  const closeMenu = (e) => {
    if (e.target.classList.contains("trigger")) {
      set_mobile("mobile will-closed");
      setTimeout(() => {
        set_mobile("mobile closed");
      }, 1000);
    }
  };
  return (
    <div className={mobile + " trigger"} /* onClick={closeMenu} */>
      <div className="mobile-menu">
        <div className="mobile-menu-order">
          <Form getOrgs={getOrgs} />

          <Orgs orgs={orgs} />
        </div>
        <button className="mobile-menu-close trigger" onClick={closeMenu}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
