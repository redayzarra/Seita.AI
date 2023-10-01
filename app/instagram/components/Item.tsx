// ItemClient.tsx
"use client"; // Indicate this is a client component

import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.background.level1
      : "#121212",
  ...theme.typography["body-sm"],
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

export default Item;
