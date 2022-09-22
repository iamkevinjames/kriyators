import { Button, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { userDataContext } from "../context/userDataContext";
import { useContext } from "react";

function TopBar() {
  const date = new Date();
  const { data } = useContext(userDataContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div>
        <div style={{ fontWeight: "bold " }}>
          Good Morning, {data?.firstName}
        </div>
        <div id="currentDate">
          {date.toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          style={{ marginRight: "15px" }}
        >
          ADD PROJECT
        </Button>
        <Avatar
          style={{ marginRight: "15px" }}
          alt="Travis Howard"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BgNn7YxMymvDaZD8m-k2LEbRCD3uQAMPAQ&usqp=CAU"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: "bold " }}>{data?.firstName}</div>
            <div>Russian President</div>
          </div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}
export default TopBar;
