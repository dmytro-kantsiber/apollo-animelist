import React from "react";
import { Link } from "react-router-dom";
import { logoutAC } from "../../../../context/actions";
import { useDispatch } from "../../../../context/AppContext";
import * as Styles from "./styles";

const Dropdown = () => {
  const dispatch = useDispatch();
  return (
    <Styles.Dropdown>
      <Styles.DropdownLink>
        <Link to={`/myanimelist/`}>Anime List</Link>
      </Styles.DropdownLink>
      <Styles.DropdownLink>
        <Link to={`/favourites/`}>Favourites</Link>
      </Styles.DropdownLink>
      <div onClick={() => dispatch(logoutAC())}> Logout</div>
    </Styles.Dropdown>
  );
};

export default Dropdown;
