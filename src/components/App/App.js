import './App.css';
// import Header from "../Header/Header";
// import Dashboard from "../Dashboard/Dashboard";
// import Users from "../Users/Users";
// import Profiles from "../Profiles/Profiles";
import LoginForm from '../LoginForm/LoginForm';

function App() {
  return (
    // <div className="container">
    //   <Header />
    //   <Profiles />
    // </div>
    <LoginForm isSignIn={false}/>
  );
}

export default App;
