import "../../App.css";
import Button from "./Button";
import Input from "./Input";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/shared/Loader";
import toast from "./ToastMessage";
import { GloabalCtx } from "../../GlobalCtx";

const LoginCard = () => {
  const [state] = useContext(GloabalCtx);
  const [isAuth, setIsAuth] = useState(false) 
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if(state.data){
      setIsAuth(state.data)
    }
  })

  useEffect(() => {
    let index = formData.password2.length;
    if (
      formData.password.charAt(index - 1) !==
      formData.password2.charAt(index - 1)
    ) {
      setError(true);
      if (formData.password !== formData.password2) {
        toast(
          "Invalid password",
          "Both Password and Password must be same",
          "error"
        );
      } else {
        setError(false);
      }
    } else {
      setError(false);
    }
  }, [formData.password2]);

  const HandleLogin = async (e) => {
    // let history = useHistory()
    setLoading(true);
    e.preventDefault();
    const { email, password } = formData;
    const response = await axios.post("login", {
      email,
      password,
    });
    if (response.data.status == 200) {
      localStorage.setItem("user", response.data.token);
      toast("Login Successful", "You will be redirected to Home", "success");
      setTimeout(function() {
        window.location.replace('profile');
      }, 5000);
    } else if (response.data.message === "Wrong password") {
      toast("Incorrect Password","Please Remember your password, and try again","error"
      );
    } else {
      toast("Not Registered", "Please Signup first and try again", "error");
    }
  };

  return (
    <div className="login-card">
      {isAuth?  window.location.replace('profile'): <div className="login-card-header">
        <h2>Login</h2>
        {loading ? <Loader /> : ""}
        <Input
          placeholder="Enter Your Email Address"
          lab
          el="Enter Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Enter Your Password"
          label="Enter Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          placeholder="Re-Enter Your Password "
          label="Re-Enter Password"
          type="password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
        />
        <Button name="Login" onClick={HandleLogin} />
        {/* <ToastMessage buttonName="Login"/> */}
      </div>
      }
    </div>
  );
};

export default LoginCard;
