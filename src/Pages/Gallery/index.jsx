import React from "react";
import { main, categories } from "./data";
import Item from "./modules/Item";
import "./gallery.scss";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router";
import GroupItem from "./modules/GroupItem";

const Gallery = () => {
  const { id } = useParams();
  return (
    <div className="menu">
      <div className="cell gallery">
        <Navbar />
        {/*   <div className="gallery-grid">
          {categories.map((item, index) => (
            <GroupItem key={index} item={item} />
          ))}
        </div> */}
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
