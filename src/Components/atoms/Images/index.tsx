import { Box } from "@mui/system";
import React from "react";


function Image(props:any) {
  return (
    <Box {...props} alt="not found" component="img" />
  );
}

export default Image;