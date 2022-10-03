import { Box } from "@mui/material";

export const Badge = ({
  count,
  color = "#FFD900",
}: {
  count: number;
  color?: string;
}) => (
  <Box
    borderRadius="50%"
    bgcolor={color}
    minWidth="20px"
    sx={{ aspectRatio: "1" }}
    display="flex"
    alignItems="center"
    justifyContent="center"
    alignSelf="center"
  >
    {count}
  </Box>
);
