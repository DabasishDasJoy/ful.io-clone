// import LocalFloristIcon from "@material-ui/icons";
import styled from "@emotion/styled";
import { Box, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SearchWeb from "../SearchWeb/SearchWeb";

const InfoWrapper = styled(Stack)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  padding: theme.spacing(1, 5),
  borderRadius: "0.5rem",
  margin: "0 auto",
  gap: theme.spacing(4),
  flexDirection: "row",
  maxWidth: "fit-content",
  boxShadow:
    "rgb(136 165 191 / 48%) 6px 2px 16px 0px, rgb(255 255 255 / 80%) -6px -2px 16px 0px;",
}));

const Home = () => {
  return (
    <Box>
      <InfoWrapper>
        <Typography variant="body1" component="span">
          🎉 73821 new domains added on 22 February 2023
        </Typography>
        <Link href="#" color="primary" underline="none">
          Read More
        </Link>
      </InfoWrapper>

      <SearchWeb></SearchWeb>
    </Box>
  );
};

export default Home;
