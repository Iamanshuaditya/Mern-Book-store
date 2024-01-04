import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { FaShoppingCart } from "react-icons/fa";
import Book from "./Book";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <p className="font-semibold ml-5 mt-5">
          Shopping Bag <span>(2)</span>
        </p>
        <ListItem disablePadding>
          <ListItemButton>
            <Book />
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <p className="font-semibold ml-5 mt-5">
          Subtotal:<span>(2)</span>
        </p>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <div className="p-4">
          <Button color="success" variant="contained" className="w-full">
            Go to checkout
          </Button>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        className="h-[2em] w-15 flex items-center justify-between box-border p-5 font-bold font-[nunito-sans] rounded-lg text-[#FFFFFF] bg-[#FFCE1A] border-none"
        onClick={toggleDrawer("right", true)}
      >
        <FaShoppingCart />
        Basket
      </Button>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
