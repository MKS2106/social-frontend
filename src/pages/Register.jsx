import { useState } from "react";
import { backendClient } from "../client/backendClient";
import { useNavigate } from "react-router-dom";

function RegisterPage() {

    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

const handleChange = (e) => {
    setFormData({
        ...formData, [e.target.name]: e.target.value
    })
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await backendClient.post('/users/register', formData)
        console.log(res.data)
        localStorage.setItem('social-app-token', JSON.stringify(res.data.token))

        navigate('/feed')

    } catch (error) {
        console.log(error)
    }

  };
  return (
    <main>
      <h1 className="mb-6">Register Page</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username" />
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="email" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="passowrd" />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />

        <input type="submit" value="Register" />
      </form>
    </main>
  );
}
export default RegisterPage;
