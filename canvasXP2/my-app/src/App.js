import "./App.css";
import { Canvas } from "./components/Canvas";

function App() {
  return (
    <>
      <center>
        <Canvas width={500} height={300}></Canvas>
        <p>Mouse moves platform &bull; Press any key to pause</p>
      </center>
    </>
  );
}

export default App;
