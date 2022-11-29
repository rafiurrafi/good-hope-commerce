import { HeaderMain, HeaderTop } from "./componentns/header/header.component";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.component";
const App = () => {
  return (
    <div>
      <HeaderTop />
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
