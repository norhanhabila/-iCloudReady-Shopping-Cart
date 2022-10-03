import { Box } from "@mui/material";
import { ReactLocation, Router } from "@tanstack/react-location";
import Navbar from "components/Navbar";
import { Homepage } from "pages/Homepage";
// import { useAppState } from "./AppState";

const location = new ReactLocation();

function App() {
  // const [appState, setAppState] = useAppState();

  return (
    <Box>
      <Navbar />
      <Box pt="90px">
        <Router
          location={location}
          routes={[
            {
              path: "/",
              element: <Homepage />,
            },
            {
              path: "/CustomerEngagement",
              element: <h1>Customer Engagement</h1>,
            },
            {
              path: "/ActionableInsights",
              element: <h1>Actionable Insights</h1>,
            },
            {
              path: "/EmployeesProductivity",
              element: <h1>Employees Productivity</h1>,
            },
            {
              path: "/OperationsExcellence",
              element: <h1>Operations Excellence</h1>,
            },
          ]}
        />
      </Box>
    </Box>
  );
}

export default App;
