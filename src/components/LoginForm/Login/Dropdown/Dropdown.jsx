import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./styles";
import { useDispatch } from "../../../../context/AppContext";
import { logoutAC } from "../../../../context/actions";

const Dropdown = () => {
  const dispatch = useDispatch();
  return (
    <Styles.Dropdown>
      <Styles.DropdownLink>
        <Link to={`/myanimelist/`}>Anime List</Link>
      </Styles.DropdownLink>
      <div onClick={() => dispatch(logoutAC())}> Logout</div>
    </Styles.Dropdown>
  );
};

export default Dropdown;
