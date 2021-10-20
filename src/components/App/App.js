import './App.css';
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Users from "../Users/Users";
import Profiles from "../Profiles/Profiles";

function App() {
  return (
    <div className="container">
      <Header />
      <Profiles />
    </div>
  );
}

export default App;
