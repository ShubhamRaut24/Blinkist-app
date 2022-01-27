import { Box } from "@mui/system";

function Image(props:any) {
  return (
    <Box {...props} alt="not found" component="img" />
  );
}

export default Image;