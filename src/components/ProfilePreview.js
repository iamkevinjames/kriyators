import { Typography, Card } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { userDataContext } from "../context/userDataContext";
import { useContext } from "react";

function ProfilePreview() {
  const { data } = useContext(userDataContext);
  return (
    <Card
      style={{
        width: "30%",
        height: "88vh",
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        boxShadow: "10px 0px 20px 0px  rgba(0, 0, 0, 0.05)",
        paddingLeft: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ position: "relative" }}>
        <Card
          style={{
            width: "150px",
            height: "150px",
            marginTop: "100px",
            borderRadius: "15px",
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BgNn7YxMymvDaZD8m-k2LEbRCD3uQAMPAQ&usqp=CAU)",
            backgroundSize: "100% 100%",
          }}
        ></Card>
        <Card
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "175px",
            left: "125px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CameraAltOutlinedIcon />
        </Card>
      </div>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold ", marginTop: "20px" }}
      >
        {data?.firstName + " " + data?.lastName}
      </Typography>
      <Typography>{data?.emailAddress}</Typography>
    </Card>
  );
}

export default ProfilePreview;
