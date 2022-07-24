import React from "react";
import { SEARCH_OPTIONS } from "../../../utils/constants";
import { MenuItem, Select } from "@mui/material";
import * as Styles from "./styles";
import { memo } from "react";

const HomePageOptions = ({ handleChange, options }) => {
  return (
    <>
      <Styles.HomePageOptions>
        <form>
          <Styles.HomePageOptionsFilters>
            {SEARCH_OPTIONS.map((element, index) => {
              return (
                <Styles.HomePageOptionsItem key={index}>
                  <Styles.HomePageOptionsItemName>
                    <p>{element.title}</p>
                  </Styles.HomePageOptionsItemName>

                  <Select
                    key={index}
                    sx={{
                      width: "200px",
                      height: "50px",
                      backgroundColor: "gray",
                      color: "white",
                    }}
                    MenuProps={{
                      MenuListProps: { disablePadding: true },
                    }}
                    value={options[element.type] || ""}
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
                          value={option.value || ""}
                        >
                          {option.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </Styles.HomePageOptionsItem>
              );
            })}
          </Styles.HomePageOptionsFilters>
        </form>
      </Styles.HomePageOptions>
    </>
  );
};

export default memo(HomePageOptions);
