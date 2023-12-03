import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("https://api.apispreadsheets.com/data/HEIOGHcVQHSrInW8/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email: email }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Subscription Successful!");
        } else {
          alert("There was an error subscribing :(");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error subscribing :(");
      });
  };

  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-white mb-2">Copyright 2023</div>
          <div className="col-12 text-center text-white mb-2">Subscribe and we'll send the best deals for you!</div>
          
          <form onSubmit={handleFormSubmit}>
          <div className="row justify-content-center">
          <div className="col-md-4 text-center text-white">
              <input type="email" className="form-control mb-2" name="Email" placeholder="Enter your email..." value={email} onChange={handleEmailChange}/>
          </div>
          <div className="col-md-1 text-center text-white"> 
              <button className="btn btn-primary" type="submit">Subscribe</button>
          </div>
          </div>
          </form>
        </div>
      </div>

      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </section>
  );
}

export default Footer;
