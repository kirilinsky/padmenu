import React, { useEffect, useState } from "react";
import styles from "./assets/header.module.scss";
import table from "./assets/table.svg";

/* jotai */

import { useAtom } from "jotai";
import { tableNumberAtom, MenuAtom } from "../../Atoms";

const Header = ({ openMenu }) => {
  const [tableNumber] = useAtom(tableNumberAtom);
  const [_, set_menu] = useAtom(MenuAtom);
  const [buttonCount, setButtonCount] = useState(0);

  const debug = () => {
    setButtonCount(buttonCount + 1);
  };

  useEffect(() => {
    if (buttonCount >= 2) {
      openMenu();
      setButtonCount(0);
    }
  }, [buttonCount]);

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={debug}></div>

      <div className={styles.header_wrap}>
        <div className={styles.name}>
          {tableNumber || "000"} <img src={table} alt="table" />
        </div>{" "}
      </div>
    </div>
  );
};

export default Header;
