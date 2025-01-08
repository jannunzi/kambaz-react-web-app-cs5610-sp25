import Labs from "./Labs";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Navigate,
} from "react-router";
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* <Route path="/" element={<Labs />} /> */}
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
