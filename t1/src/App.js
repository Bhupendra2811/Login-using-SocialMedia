import { useEffect, useState } from "react";
import LoginPage10 from "./LoginPage10"
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home"
AOS.init({
  duration: 5000,
});
  const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const getUser = () => {
        fetch("http://localhost:5000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
          .then((response) => {
            if (response.status === 200) return response.json();
            throw new Error("authentication has been failed!");
          })
          .then((resObject) => {
            setUser(resObject.user);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getUser();
    }, []);
    return (
      <div className="App">
      
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route
              path="/login"
              element={user ? <Link to ="/" /> : <LoginPage10 />}
            />
          </Routes>
        </Router>
      </div>

    );
  };

  export default App;
