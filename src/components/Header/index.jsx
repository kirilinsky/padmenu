import React, { useEffect, useState } from "react";
import styles from "./assets/header.module.scss";
import table from "./assets/table.svg";

/* jotai */

import { useAtom } from "jotai";
import { tableNumberAtom, mobileMenuAtom } from "../../Atoms";

const Header = () => {
  const [tableNumber] = useAtom(tableNumberAtom);
  const [_, set_mobile] = useAtom(mobileMenuAtom);
  const [buttonCount, setButtonCount] = useState(0);

  const debug = () => {
    setButtonCount(buttonCount + 1);
  };

  const openMobile = () => {
    set_mobile("mobile will-opened");
    setTimeout(() => {
      set_mobile("mobile");
    }, 500);
  };

  useEffect(() => {
    if (buttonCount >= 2) {
      openMobile();
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
