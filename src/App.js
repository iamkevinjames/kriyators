import "./App.css";
import Navigationbar from "./components/NavigationBar";
import TopBar from "./components/TopBar";
import EditProfile from "./components/EditProfile";
import ProfilePreview from "./components/ProfilePreview";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { userDataContext } from "./context/userDataContext";
import { useState, useEffect } from "react";
import axios from "axios";

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
  useEffect(() => {
    axios
      .get("http://localhost:8000/userData/632ebe9f04faccbf2962425a")
      .then((response) => {
        setData(response.data);
      });
  }, [load]);

  return (
    <ThemeProvider theme={outerTheme}>
      <userDataContext.Provider value={{ data, setData, setLoad, load }}>
        <div className="App">
          <Navigationbar />
          <TopBar />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <EditProfile />
            <ProfilePreview />
          </div>
        </div>
      </userDataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
