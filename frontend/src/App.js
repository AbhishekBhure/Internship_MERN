import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./component/layout/Header.js"
import LoginSignUp from "./component/layout/LoginSignUp.js"
import Content from "./component/layout/Content"
import Courses from './component/layout/Courses';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/login" element={<LoginSignUp />} />

        <Route exact path="/" element={< Content />} />
      </Routes>

    </Router>


  );
}

export default App;
