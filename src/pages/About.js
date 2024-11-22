import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>About</h1>
      <p>This is the About page.</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
      <button onClick={() => navigate("/about/company")}>Go to Company</button>
    </div>
  );
}

export default About;
