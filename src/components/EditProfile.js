import React, { useContext, useState } from "react";
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
  const { data, setData, load, setLoad, setToast } =
    useContext(userDataContext);
  const [currentData, setCurrentData] = useState({});

  const handleChange = (event) => {
    let changedField = event.target.id;
    if (changedField === "firstName") {
      setCurrentData({ ...currentData, firstName: event.target.value });
      setData({ ...data, firstName: event.target.value });
    }
    if (changedField === "lastName") {
      setCurrentData({ ...currentData, lastName: event.target.value });
      setData({ ...data, lastName: event.target.value });
    }
    if (changedField === "emailAddress") {
      setCurrentData({ ...currentData, emailAddress: event.target.value });
      setData({ ...data, emailAddress: event.target.value });
    }
  };

  const resetData = () => {
    setLoad(!load);
    setCurrentData({});
  };
  const saveData = () => {
    if (Object.keys(currentData).length) {
      currentData.firstName = currentData.firstName
        ? currentData.firstName
        : data.firstName;
      currentData.lastName = currentData.lastName
        ? currentData.lastName
        : data.lastName;
      currentData.emailAddress = currentData.emailAddress
        ? currentData.emailAddress
        : data.emailAddress;
      axios
        .post("https://kyro-api.herokuapp.com/user/postData", currentData)
        .then((response) => {
          console.log(response);
          setLoad(!load);
          setToast({ isOpen: true, isSuccess: true });
        })
        .catch((error) => {
          console.log(error);
          setToast({ isOpen: true, isSuccess: false });
        });
      setCurrentData({});
    } else {
      setToast({ isOpen: true, isSuccess: false });
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "40px",
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
            variant="outlined"
            value={currentData.firstName ? currentData.firstName : ""}
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
            onChange={handleChange}
            variant="outlined"
            value={currentData.lastName ? currentData.lastName : ""}
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
            variant="outlined"
            value={currentData.emailAddress ? currentData.emailAddress : ""}
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
