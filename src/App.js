import { Route, Routes } from "react-router-dom";
import "./App.css";
import Character from "./components/Character";
import Home from "./views/Home";

function App() {
  return (
    <Routes>
      <Route path="/practice-abort-controller" element={<Home />}>
        <Route path="characters">
          <Route path="ash" element={<Character name="ash" />} />
          <Route path="juri" element={<Character name="juri" />} />
          <Route
            path="all"
            element={
              <div className="container">
                <Character name="juri" />
                <Character name="ash" />
              </div>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
