import { Route, Routes} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"


const App = () => {
  return (
    <div>
      <Routes>
    
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
};
export default App
