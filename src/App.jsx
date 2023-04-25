import { useState } from 'react'
import './App.scss'
import { Routes, Route } from "react-router-dom"
import Main from "./components/Main";
import Contacts from "./components/Contacts";
import Resume from "./components/Resume";
import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";



const MENU = {
  "": {
    title: "Главная",
  },
  portfolio: {
    title: "Портфолио",
  },
  resume: {
    title: "Резюме",
  },
  contacts: {
    title: "Контакты",
  },
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Main menu={MENU} />}>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/notFound" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
