import { BrowserRouter as Router } from 'react-router-dom';
import {useRoutes} from "../../routes";
import './App.css';

function App() {
  const routes = useRoutes(false, true, false)
  return (
    <Router>
      {routes}
    </Router>
  );
}

export default App;

