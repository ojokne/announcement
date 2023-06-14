import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CreateIcon from "@mui/icons-material/Create";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Fragment } from "react";
import { green, orange, red, yellow } from "@mui/material/colors";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = {
  display: "flex",
  alignItems: "center",
  paddingLeft: "70px",
};
const ClientMenuDrawer = ({ toggleDrawer, state }) => {
  const navigate = useNavigate();
  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Typography variant="h6" component="p" color="secondary" sx={styles}>
          Announcements
        </Typography>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/radio/death")}>
            <ListItemIcon>
              <CreateIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/radio/business")}>
            <ListItemIcon>
              <AutorenewIcon sx={{ color: green[500] }} />
            </ListItemIcon>
            <ListItemText primary="Status" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Fragment>
        <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
          {list}
        </Drawer>
      </Fragment>
    </div>
  );
};
export default ClientMenuDrawer;
