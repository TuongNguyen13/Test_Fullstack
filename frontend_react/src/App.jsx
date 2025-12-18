import { BrowserRouter, Routes, Route } from "react-router-dom";
import PosPage from "./pages/PosPage";
import OrderDisplayPage from "./pages/OrderDisplayPage";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PosPage />} />
        <Route path="/display" element={<OrderDisplayPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
