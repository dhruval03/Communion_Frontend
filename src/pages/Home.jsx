import { Link } from "react-router-dom";
import "/Home.css";

const Home = () => {
  return (
    <div className="hero-section d-flex align-items-center text-center">
      <div className="overlay"></div>
        <div className="glassmorphic-card">
          <h1 className="display-3 fw-bold fade-in"> Connecting People Across Faiths & Interests</h1>
          <p className="lead fade-in-delay">Join us in creating a vibrant community through meaningful events.</p>
          <Link to="/events" className="btn btn-lg explore-btn">🎉 Explore Events</Link>
        </div>
    </div>
  );
};

export default Home;
