import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "lucide-react";

const App = () => {
  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
