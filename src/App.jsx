import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"



function App() {
 

  return (
  
    <HabitsPage/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
