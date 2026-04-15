import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./componets/Header";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Artigo } from "./pages/Artigo";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/artigo" element={<Artigo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;