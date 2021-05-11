import React from "react";
import { Link } from "react-router-dom";
import "../item.scss";
/* jotai */

const Item = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="item">
      <div className="item-img">
        <img
          src={require(`../../data/img/${item.img}`).default}
          alt={item.img}
        />
      </div>
      <div className="item-info">
        <div className="item-info-terms">
          <span> {item.title}</span>
          <span> {item.price}</span>
        </div>
        {/*  <div className="item-info-control">
          <button onClick={() => addItem(item)}>добавить</button>
        </div> */}
      </div>
    </Link>
  );
};

export default Item;
