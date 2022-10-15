import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

export default function GroupCheckboxes() {
  return (
    <Box>
      <Typography
        id="sandwich-group"
        level="body2"
        fontWeight="lg"
        mb={1}
      ></Typography>
      <Box role="group" aria-labelledby="sandwich-group">
        <List size="sm">
          <ListItem>
            <Checkbox label="pamkaj" style={{ color: "red" }} />
          </ListItem>
          <ListItem>
            <Checkbox label="Tomato" />
          </ListItem>
          <ListItem>
            <Checkbox label="Mustard" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
