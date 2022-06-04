import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Videos from "./components/Videos";
import SingleVideos from "./components/SingleVideos";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/videos/:videoId" element={<SingleVideos />}></Route>
      </Routes>
    </div>
  );
}

export default App;
