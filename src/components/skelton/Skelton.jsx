import { Grid, Skeleton, Box } from "@mui/material";
import React from "react";

const SkeletonComponent = ({ perPageCount }) => {
  return (
    <Grid container spacing={2} p="30px">
      {new Array(perPageCount).fill("").map((_, inx) => (
        <Grid key={inx} item lg={2} md={3} sm={6} xs={12}>
          <Skeleton variant="rectangular" height={250} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonComponent;
