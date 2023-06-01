import Dashboard from "./Component/Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipe from "./Component/Recipe";
import MyForm from "./Component/MyForm";
import Register from "./Component/Register";
import Login from "./Component/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hi" element={<Dashboard />} />
        <Route path="/" element={<Recipe />} />
        <Route path="/input" element={<MyForm/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;