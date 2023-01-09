import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import FetchImageDisplay from "./components/FetchImageDisplay";
import ErrorPage from "./pages/Error";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/photo" element={<FetchImageDisplay />} />
            <Route path="/" element={<SharedLayout />}>
              <Route path=":catLabel" element={<FetchImageDisplay />} />
            </Route>
          </Routes>
        </Router>
      </>
    );
  }
}
export default App;
