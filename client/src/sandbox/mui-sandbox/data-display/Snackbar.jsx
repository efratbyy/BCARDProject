import { Button } from "@mui/material";
import React, { useState } from "react";
import MuiSnackbar from "@mui/material/Snackbar";

const Snackbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open snackbar
      </Button>
      <MuiSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isOpen}
        onClose={() => setOpen((prev) => !prev)} // false-ל isOpen הופך את
        autoHideDuration={3000} // קובע לכמה זמן הסנייק בר יהיה פתוח
        message="In Snackbar" // קובע מה יהיה כתוב על הסנייק בר
      />
    </>
  );
};

export default Snackbar;
