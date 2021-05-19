import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Contact from "./components/contact";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
