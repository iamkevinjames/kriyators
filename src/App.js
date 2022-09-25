import "./App.css";
import Navigationbar from "./components/NavigationBar";
import TopBar from "./components/TopBar";
import EditProfile from "./components/EditProfile";
import ProfilePreview from "./components/ProfilePreview";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { userDataContext } from "./context/userDataContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";

function App() {
  const outerTheme = createTheme({
    palette: {
      primary: {
        main: "#cb3238",
      },
      secondary: {
        main: "#ccc",
      },
    },
  });

  const [data, setData] = useState();
  const [load, setLoad] = useState(true);
  const [toast, setToast] = useState({ isOpen: false, isSuccess: true });
  useEffect(() => {
    axios
      .get("https://kyro-api.herokuapp.com/user/getData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setData();
      });
  }, [load]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ isOpen: false, isSuccess: true });
  };

  return (
    <ThemeProvider theme={outerTheme}>
      <userDataContext.Provider
        value={{ data, setData, setLoad, load, setToast }}
      >
        <div className="App">
          <Navigationbar />
          <TopBar />
          <div
            className="content"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <EditProfile />
            <ProfilePreview />
          </div>
        </div>
        <Snackbar
          open={toast.isOpen}
          autoHideDuration={4000}
          onClose={handleClose}
          message="Updated Successfully"
        >
          {toast.isSuccess ? (
            <Alert severity="success">Updated Successfully!</Alert>
          ) : (
            <Alert severity="error">Update Falied!</Alert>
          )}
        </Snackbar>
      </userDataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
