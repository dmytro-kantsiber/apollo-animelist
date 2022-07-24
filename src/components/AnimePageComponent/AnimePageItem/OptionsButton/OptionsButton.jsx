import { Button } from "@mui/material";
import React from "react";

const OptionsButton = ({ data, openModal }) => {
  return (
    <>
      {!data.Media.mediaListEntry?.status ||
      data.Media.mediaListEntry?.status === "Not in list" ? (
        <Button variant="contained" sx={{ width: "160px" }} onClick={openModal}>
          Add to list
        </Button>
      ) : (
        <Button
          variant="outlined"
          sx={{
            width: "160px",
            backgroundColor: "#383838",
            color: "white",
            border: "none",
          }}
          onClick={openModal}
        >
          Edit entry
        </Button>
      )}
    </>
  );
};

export default OptionsButton;
