import React from "react";
import "./item.scss";
/* jotai */

const Item = ({ item }) => {
  return (
    <div className="item">
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
    </div>
  );
};

export default Item;
