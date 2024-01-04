import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  useTheme,
  createTheme,
  ThemeProvider,
  styled,
} from "@mui/material/styles";
import PestañaTablas from "./components/Tablas/pestañaTablas";

function DashBoard() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    width: "100%",
    typography: "body1",
  };
  let theme = useTheme();

  theme = createTheme(theme, {
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "rgba(0,0,255)",
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            color: "rgba(0,0,0)",
            "&:hover": {
              color: "rgba(0,0,0)",
            },
            "&.Mui-selected": {
              color: "rgba(0,0,255)",
              bold: true,
            },
            "&.Mui-disabled": {
              color: "rgba(105,105,105)",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="max-w-full">
        <h1 className="text-2xl text-slate-900 font-bold text-center mb-4 block px-2 pt-6">
          Dashboard DATA
        </h1>
        <Box sx={style}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 0,
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TabList onChange={handleChange} variant="scrollable">
                <Tab label="Gráficos de Yahoo Finance" value="1" />
                <Tab label="Tablas" value="2" />
              </TabList>
            </Box>

            <TabPanel value="1">{/* <AddUsers /> */}</TabPanel>
            <TabPanel value="2">
              <PestañaTablas />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default DashBoard;
