import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import BusinessIcon from "@mui/icons-material/Business";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LogoutIcon from "@mui/icons-material/Logout";
import { Fragment } from "react";
import { green, orange, red, yellow } from "@mui/material/colors";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const styles = {
  display: "flex",
  alignItems: "center",
  paddingLeft: "70px",
};
const MenuDrawer = ({ toggleDrawer, state }) => {
  const navigate = useNavigate();
  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/radio")}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: yellow[500] }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <Typography variant="h6" component="p" color="secondary" sx={styles}>
          Categories
        </Typography>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/radio/death")}>
            <ListItemIcon>
              <SentimentDissatisfiedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="Death" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/radio/business")}>
            <ListItemIcon>
              <BusinessIcon sx={{ color: green[500] }} />
            </ListItemIcon>
            <ListItemText primary="Business" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/radio/corporate")}>
            <ListItemIcon>
              <CorporateFareIcon sx={{ color: orange[500] }} />
            </ListItemIcon>
            <ListItemText primary="Corporate" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={(e) => handleLogout(e)}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon sx={{ color: red[500] }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await signOut(auth);
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

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
export default MenuDrawer;
