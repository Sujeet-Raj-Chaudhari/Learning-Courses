import "./App.css"
import Body from "./components/Body";
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <Body /> 
      </div>
    </>
  );
}

export default App