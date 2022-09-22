import React, { useContext } from "react";
import { userDataContext } from "../context/userDataContext";
import {
  Typography,
  Card,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import axios from "axios";

function EditProfile() {
  const { data, setData, load, setLoad } = useContext(userDataContext);
  const handleChange = (event) => {
    let changedField = event.target.id;
    if (changedField === "firstName")
      setData({ ...data, firstName: event.target.value });
    if (changedField === "lastName")
      setData({ ...data, lastName: event.target.value });
    if (changedField === "emailAddress")
      setData({ ...data, emailAddress: event.target.value });
  };

  const clearData = () => {};

  const resetData = () => {
    setLoad(!load);
    clearData();
  };
  const saveData = () => {
    axios
      .post("http://localhost:8000/postData", data)
      .then((response) => {
        console.log(response);
        setLoad(!load);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "40px",
        float: "left",
      }}
    >
      <Typography variant="h6" style={{ marginBottom: "20px" }}>
        {" "}
        My Profile
      </Typography>
      <Card style={{ padding: "20px", maxWidth: "700px", height: "64vh" }}>
        <div>
          <TextField
            sx={{ m: 2, width: "300px" }}
            id="firstName"
            label="First Name"
            value={data?.firstName}
            variant="outlined"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            sx={{ m: 2, width: "300px" }}
            id="lastName"
            label="Last Name"
            value={data?.lastName}
            onChange={handleChange}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 2, width: "300px" }}
            id="displayName"
            label="Display Name"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PortraitOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 2, width: "300px" }}
            id="emailAddress"
            label="Email"
            value={data?.emailAddress}
            variant="outlined"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 2, width: "300px" }}
            id="phoneNumber1"
            label="Phone No (Work)"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 2, width: "300px" }}
            id="phoneNumber2"
            label="Phone No (Work)"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 2, width: "300px" }}
            id="location"
            label="Location"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Button
            id="saveButton"
            sx={{ width: "150px", mr: 10 }}
            variant="contained"
            onClick={saveData}
          >
            Save Changes
          </Button>
          <Button
            id="resetButton"
            color="secondary"
            variant="contained"
            onClick={resetData}
          >
            Reset
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default EditProfile;
