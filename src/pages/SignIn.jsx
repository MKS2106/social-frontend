import { useState } from "react";
import { backendClient } from "../client/backendClient";
import { useNavigate } from "react-router-dom";

function SignInPage() {

    const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
        const res = await backendClient.post('/users/login', formData)
        console.log(res.data)
        localStorage.setItem('social-app-token', JSON.stringify(res.data.token))

        navigate('/feed')
        
    } catch (error) {
        console.log(error)
    }

  };
  return (
    <main className="max-w-md mx-auto p-4"> 
      <h1 className="font-extrabold text-center text-2xl text-sky-400 mb-6">Sign In Page</h1>

      <form  className= "flex flex-col space-y-4" onSubmit={handleSubmit}>
       <div>
         <label htmlFor="email" />
        <input className="border rounded px-3 py-2 w-full "
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
       </div>
       
        <div>
          <input className="border rounded px-3 py-2 w-full "
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        </div>
        <label htmlFor="passowrd" />
        

        <input className="border bg-sky-100 rounded p-1 font-bold text-blue-800" type="submit" value="Login" />
      </form>
    </main>
  );
}
export default SignInPage;
