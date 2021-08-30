import { useState } from "react";
import "../../App.css";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";


const SignupCard = () => {
  const [formData, SetFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  });
  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = async(e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, password } = formData;
    const response = await axios.post('signup', {
      firstName,
      lastName,
      email,
      phone,
      password
    });
    localStorage.setItem('user', response.data.token);
    console.log(response.data);
  }
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div className="login-card ">
      <div className="login-card-header signup-card">
        <h2>Signup</h2>
        <Input
          placeholder="Enter First Name"
          label="Enter First Name"
          type="text"
          name="firstName"
          onChange={handleChange}
        />
        <Input
          placeholder="Enter Last Name"
          label="Enter Last Name"
          type="text"
          name="lastName"
          onChange={handleChange}
        />
        <Input
          placeholder="Enter Email Address"
          label="Enter Email Address"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <Input
          placeholder="Enter Phone Number"
          label="Enter Phone"
          type="number"
          name="phone"
          onChange={handleChange}
        />
        <Input
          placeholder="Enter Password"
          label="Enter Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Button name="Signup" onClick={handleSignup} />
      </div>
    </div>
  );
};

export default SignupCard;
