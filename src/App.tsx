import { Route, Routes, useNavigate } from "react-router-dom"
import Hello from "./Hello"



function App() {
 
  return <Routes>
    <Route index element={<Hello/>}></Route>
  </Routes>
}

export default App
