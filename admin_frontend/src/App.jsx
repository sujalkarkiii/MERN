import Hoverpage from "./Hoverer/Hoverpage";
import {Route,Routes} from "react-router-dom";
import AddProduct from "./Pages/AddProduct";
import Dashboard from "./Pages/Dashboard";
const App = () => {
  return (
    <div>
      <Hoverpage/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
      </Routes>
    </div>
  )
}

export default App
