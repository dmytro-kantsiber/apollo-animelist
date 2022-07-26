import { Input } from "@mui/material";
import React, { memo } from "react";

const HomePageSearch = ({ options, handleChange }) => {
  return (
    <Input
      placeholder="Search"
      sx={{
        height: "50px",
        width: "250px",
        color: "white",
        "&:after": {
          borderBottom: `2px solid #3457f3`,
        },
      }}
      value={options.search || ""}
      name="search"
      onChange={handleChange}
      autoComplete="off"
    ></Input>
  );
};

export default memo(HomePageSearch);
