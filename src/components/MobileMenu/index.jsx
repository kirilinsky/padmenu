import React, { useState } from "react";

import "./menu.scss";

/* jotai */
import { useAtom } from "jotai";
import { loginAtom, MenuAtom, tokenAtom } from "../../Atoms";
import Form from "./modules/Form";
import Orgs from "./modules/Orgs";
import axios from "axios";

const Menu = () => {
  const [menu, set_menu] = useAtom(MenuAtom);
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
      set_menu("settings will-closed");
      setTimeout(() => {
        set_menu("settings closed");
      }, 1000);
    }
  };
  return (
    <div className={menu + " trigger"} /* onClick={closeMenu} */>
      <div className="settings-menu">
        <div className="settings-menu-order">
          <Form getOrgs={getOrgs} />

          <Orgs orgs={orgs} />
        </div>
        <button className="settings-menu-close trigger" onClick={closeMenu}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Menu;
