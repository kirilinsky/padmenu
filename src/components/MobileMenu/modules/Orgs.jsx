import React, { useEffect, useState } from "react";
import "./orgs.scss";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useAtom } from "jotai";
import { orgAtom } from "../../../Atoms";
const Orgs = ({ orgs }) => {
  const [currentOrg, setCurrentOrg] = useAtom(orgAtom);
  const [_orgs, set_orgs] = useState(orgs);

  const tryToSetCurrentOrg = (e, x) => {
    const { id, name, fullName } = x;

    if (id === currentOrg.id) {
      return;
    }
    setCurrentOrg({ name, id, fullName });
  };

  useEffect(() => {
    if (currentOrg.id) {
      set_orgs([...orgs, currentOrg]);
    }
  }, [currentOrg]);

  if (_orgs.length === 0) {
    return <div className="orgs">список организаций пуст</div>;
  }
  return (
    <div className="orgs">
      <h4>Организации</h4>
      <ul className="orgs-list">
        {_orgs.map((x) => (
          <li
            key={x.id}
            onClick={(e) => tryToSetCurrentOrg(e, x)}
            className="orgs-list-item"
            tabIndex="0"
          >
            <div className="orgs-list-item-wrap">
              <span className="orgs-list-item_title">{x.name}</span>
              <span className="orgs-list-item_subtitle">{x.fullName}</span>
            </div>
            {x.id === currentOrg.id ? (
              <MdCheckBox className="orgs-list-item-status green" />
            ) : (
              <MdCheckBoxOutlineBlank className="orgs-list-item-status" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orgs;
