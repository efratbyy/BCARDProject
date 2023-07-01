import React from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "../../provider/ThemeProvider";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Main: React.FC<Props> = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <Paper
      sx={{
        minHeight: "90vh",
        backgroundColor: isDark ? "#333333" : "#e3f2fd",
      }}
    >
      {children}
    </Paper>
  );
};

export default Main;
