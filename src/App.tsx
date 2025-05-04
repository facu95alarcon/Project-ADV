import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ResponsiveLayout from "./layouts/ResponsiveLayout";
import Processos from "./pages/Processos";
import Clientes from "./pages/Clientes";
import Agenda from "./pages/Agenda";
import Financeiro from "./pages/Financeiro";
import BottomMenu from './components/BottomMenu';
function App() {
  return (
    <>
     <ResponsiveLayout>
      <Routes>
        <Route path="/processos" element={<Processos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
        
        </ResponsiveLayout>
    </>
  );
}

export default App;
