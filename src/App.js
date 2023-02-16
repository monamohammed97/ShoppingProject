import NavBar from "./components/Navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Outlet/>
    </main>
  );
}

export default App;
