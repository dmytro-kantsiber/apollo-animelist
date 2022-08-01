import { MenuItem, Select } from "@mui/material";
import React from "react";
import { memo } from "react";
import * as Styles from "./styles";
const HomePageOption = ({ element, handleChange, options }) => {
  return (
    <Styles.HomePageOptionsItem>
      <Styles.HomePageOptionsItemName>
        <p>{element.title}</p>
      </Styles.HomePageOptionsItemName>

      <Select
        sx={{
          width: "200px",
          height: "50px",
          backgroundColor: "gray",
          color: "white",
        }}
        MenuProps={{
          MenuListProps: { disablePadding: true },
        }}
        value={options || ""}
        name={element.type}
        onChange={handleChange}
      >
        {element.values.map((option, index) => {
          return (
            <MenuItem
              key={index}
              sx={{
                height: "50px",
                backgroundColor: "gray",
                disablePadding: true,
                color: "white",

                "&:hover": {
                  backgroundColor: "#929292",
                },

                "&.Mui-selected": {
                  backgroundColor: "#929292 !important",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#929292",
                },
              }}
              value={option.value || "Any"}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </Styles.HomePageOptionsItem>
  );
};

export default memo(HomePageOption);
