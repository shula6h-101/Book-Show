import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Views from "./views";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<Views/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
