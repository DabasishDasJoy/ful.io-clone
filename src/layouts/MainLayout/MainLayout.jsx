import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import Header from "../../pages/shared/Header/Header";

const MainLayout = () => {
  return (
    <Box>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Box>
  );
};

export default MainLayout;
