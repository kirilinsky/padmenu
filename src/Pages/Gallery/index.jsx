import React from "react";

/* jotai */
/* import { useAtom } from "jotai";
import { orderAtom } from "../../Atoms"; */
import { main } from "./data";
import Item from "./modules/Item";
import "./gallery.scss";
import Navbar from "../../components/Navbar";
const Gallery = () => {
  /* const [order, setOrder] = useAtom(orderAtom); */

  return (
    <div className="menu">
      <div className="cell gallery">
        <Navbar />
        <div className="gallery-grid">
          {main.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
