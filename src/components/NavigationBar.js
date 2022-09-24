import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Badge,
} from "@mui/material";
import { MenuSharp } from "@mui/icons-material";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ForumIcon from "@mui/icons-material/Forum";
import ArticleIcon from "@mui/icons-material/Article";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Navigationbar() {
  return (
    <Box
      className="navigationbar"
      sx={{
        width: "25%",
        maxWidth: 250,
        height: "100vh",
        bgcolor: "background.paper",
        boxShadow: "10px 0px 20px 0px  rgba(0, 0, 0, 0.05)",
        float: "left",
        paddingLeft: "40px",
      }}
    >
      <nav aria-label="main mailbox folders">
        <div
          style={{
            display: "flex ",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Typography
            className="primary-color"
            sx={{ fontWeight: "bold " }}
            variant="h4"
          >
            KYRO
          </Typography>
          <MenuSharp fontSize="large" />
        </div>
        <List style={{ marginTop: "40px" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary="Messages" />
              <Badge
                badgeContent={6}
                color="primary"
                style={{ marginRight: "50px" }}
              ></Badge>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Documents" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CorporateFareIcon />
              </ListItemIcon>
              <ListItemText primary="Organizations" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{ marginTop: "150px" }}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default Navigationbar;
