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
    axios.get("http://localhost:8000/getData").then((response) => {
      setData(response.data);
    });
  }, [load]);

  return (
    <ThemeProvider theme={outerTheme}>
      <div className="App">
        <userDataContext.Provider value={{ data, setData, setLoad, load }}>
          <Navigationbar />
          <TopBar />
          <EditProfile />
          <ProfilePreview />
        </userDataContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
