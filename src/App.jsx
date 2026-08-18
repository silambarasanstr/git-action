import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import TemplatesDetails from "./pages/TemplatesDetails";

function App() {
  return (
    <Router basename="/git-action">
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="templates" element={<Templates />} />
            <Route path="templates/:id" element={<TemplatesDetails />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
