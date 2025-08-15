// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
  
  

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:8082/auth/login", {
//         username,
//         password,
//       });
//       console.log("Access Token:", response.data.accessToken);
//       localStorage.setItem("token", response.data.accessToken);
//       alert("Login successful");
//       navigate("/Dashboard.js");
//     } catch (error) {
//       alert("Login failed");
//       console.error(error);
//     }
//   };

//   return (
//     <div style={styles.form}>
//       <h2>Login</h2>
//       <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//       <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// const styles = {
//   form: {
//     width: "300px",
//     margin: "100px auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//     textAlign: "center",
//   },
// };

// export default Login;
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8082/auth/login", {
        username,
        password,
      });

      console.log("Access Token:", response.data.accessToken);
      localStorage.setItem("token", response.data.accessToken);
      alert("Login successful");
      navigate("/dashboard"); // ✅ Correct route path
    } catch (error) {
      alert("Login failed");
      console.error(error);
    }
  };

  return (
    <div style={styles.form}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

const styles = {
  form: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Login;
