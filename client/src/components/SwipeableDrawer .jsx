import * as React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";

import { CiSettings } from "react-icons/ci";

export default function SwipeableTemporaryDrawer() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  function handleClick() {
    toggleDrawer(false)();
    navigate("/");
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ListCon text={"Home"} icon={<FaHome />} onClick={handleClick} />
      <ListCon text={"Search"} icon={<CiSearch onClick={() => {}} />} />
      <ListCon
        text={"My Books"}
        icon={<ImBooks />}
        onClick={() => {
          navigate("/mybooks");
        }}
      />
      <ListCon text={"Setting"} icon={<CiSettings />} />
      <ListCon
        text={"Checkout"}
        icon={<IoBagCheckOutline />}
        onClick={() => navigate("/checkout")}
      />
      {!token ? (
        <ListCon
          text={"Login"}
          icon={<IoBagCheckOutline />}
          onClick={() => navigate("/signin")}
        />
      ) : null}
      <Divider />
      <List sx={{ marginTop: "15.5em", marginLeft: "3.5em" }}>
        {["About", "Support", "Tems and Conditions"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ style: { fontSize: "0.8em" } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function ListCon({ text, icon, onClick }) {
    return (
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={onClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    );
  }

  return (
    <>
      <div>
        <Button onClick={toggleDrawer(true)}>
          <RiMenu2Fill className="h-8 w-8" />
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </div>
    </>
  );
}
