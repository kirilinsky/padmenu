import React from "react";
import "../item.scss";
import def from "../../data/img/categories/default.jpg";
import { Link } from "react-router-dom";

/* jotai */

const GroupItem = ({ item }) => {
  return (
    <Link to={`/${item.id}`} className="item item-group" tabIndex="0">
      <div className="item-img">
        <img src={def} alt={item.img} />
      </div>
      <div className="item-info">
        <div className="item-info-terms">
          <span> {item.title}</span>
        </div>
      </div>
    </Link>
  );
};

export default GroupItem;
