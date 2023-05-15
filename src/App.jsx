import "./App.module.scss";
import s from "./App.module.scss"
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Heroes from "./Pages/HeroesPage/Heroes";

function App() {
  return (
    <div className={s.App}>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/HeroesPage" element={<Heroes/>}/>
</Routes>
    </div>
  );
}

export default App;
