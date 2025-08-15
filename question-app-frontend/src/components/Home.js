import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to QnA App</h1>
      <p>Where questions meet answers.</p>
      <div>
        <Link to="/login">
          <button style={styles.button}>Login</button>
        </Link>
        <Link to="/register">
          <button style={styles.button}>Register</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "100px",
    textAlign: "center",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Home;
