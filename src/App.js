
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2>ReactDeploy</h2>
        <a href="#home">Home</a>
      </nav>

      <section className="hero" id="home">
        <h1>React Application Deployment</h1>

        <p>
          Learn how to build and deploy React applications
          using modern cloud hosting platforms.
        </p>

        <button
          onClick={() =>
            alert("React Application Deployed Successfully!")
          }
        >
          Test Application
        </button>
      </section>

      <section className="platforms">
        <h2>Deployment Platforms</h2>

        <div className="cards">
          <div className="card">
            <h3>Netlify</h3>
            <p>
              Deploy React applications with continuous
              integration and automatic builds.
            </p>
          </div>

          <div className="card">
            <h3>Vercel</h3>
            <p>
              Host frontend applications with fast
              deployments and global delivery.
            </p>
          </div>

          <div className="card">
            <h3>GitHub Pages</h3>
            <p>
              Host static websites directly from a
              GitHub repository.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>
          React Deployment Demo | Created using React.js
        </p>
      </footer>
    </div>
  );
}

export default App;
