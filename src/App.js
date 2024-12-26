import "./App.css";
import React , {useState} from 'react';
import Router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { UserLogin } from "./components/UserLogin";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const handleLogin = (username,password)=>{
    if (username === "rashik78@gmail.com" && password === "Zxcv12@bn") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
    }
  
  return (
    <Provider store={store}>
      <div className="App">
        {isLoggedIn ? (<Router />)
        :  (<UserLogin onLogin = {handleLogin} />)
      }
      </div>
    </Provider>
  );
}

export default App;