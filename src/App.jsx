import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login/LoginPage"
import HabitsPage from "./pages/Habits/HabitsPage"



function App() {
 

  return (
    <HabitsPage />
    
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<LoginPage />} /> */}
    //     {/* <Route path="/hoje" element={<LoginPage />} />
    //     <Route path="/cadastro" element={<LoginPage />} />
    //     <Route path="/habitos" element={<HabitsPage />} />
    //     <Route path="/historico" element={<LoginPage />} /> */}
        
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
