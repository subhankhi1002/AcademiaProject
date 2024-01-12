import { useState } from "react";
import App from "./App";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [dataLogin, setData] = useState([]);
    let nav = useNavigate();
    const login = async (e,Email,passwordV) => {
        e.preventDefault();
        const data = {
            email: Email,
            password: passwordV
        };

        await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.text())
          .then((textData) => {
            console.warn("data", textData);
            if(textData == 'Login Successful'){
                alert("Login Successful");
                let path = '/profile'
                nav(path);
                
                localStorage.setItem('Email', JSON.stringify(Email));
            }else if(textData == 'Login is not successful'){
                alert("Login Failed!! Wrong UserName or Password");
            }
            setData(textData);
          })
          .catch((e) => {
            console.log("e", e);
          });
        return;
      };




    return(

        <>



    <div class="login-container">
        <img src="https://www.iiitb.ac.in/includefiles/userfiles/images/iiitb_logo.jpg" alt="Logo" class="logo"/>

        <h3>Outreach Department Login</h3>
        <form class="-form">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
        </div>

        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
        </div>

        <div class="form-group">
            <button type="submit" onClick={
                (e) =>
                login(
                    e,
                    document.getElementById("username").value, 
                    document.getElementById("password").value
                )
            }>Login</button>
        </div>
        </form>
</div>



        </>
    )
}

export default Home;