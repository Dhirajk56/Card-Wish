import Routing from "./components/Routing/Routing.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";

import "./App.css";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
