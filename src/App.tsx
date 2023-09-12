
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ListUsers from './components/pages/List';
import Candidate from "./components/pages/Candidate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListUsers />}/>
        <Route path="/candidate" element={<Candidate />}/>
      </Routes>
    </Router>
  );
}

export default App;
