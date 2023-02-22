// import LocalFloristIcon from "@material-ui/icons";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const StyledBox = styled(Stack)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  padding: theme.spacing(1),
  borderRadius: "5px",
  width: "50%",
  margin: "0 auto",
  gap: theme.spacing(1),
  flexDirection: "row",
}));

// const StyledIcon = styled()({
//   fontSize: "30px",
//   color: "green",
//   marginRight: "10px",
// });

const Home = () => {
  return (
    <Box>
      <StyledBox boxShadow={3}>
        {/* <StyledIcon /> */}
        <Typography variant="body1" component="span">
          73821 new domains added on 22 February 2023
        </Typography>
        <Link href="#" color="primary" underline="always">
          Read More
        </Link>
      </StyledBox>
    </Box>
  );
};

export default Home;
