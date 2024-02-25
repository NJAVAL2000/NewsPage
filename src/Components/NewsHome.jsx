import React from "react";
import heroimage from "../assets/image-web-3-desktop.jpg";
import "./NewsHome.css";
import TopNews from "./TopNews";

function NewsHome(props) {
  return (
    <>
      <div className="containerNew">
        <div className="containerHero">
          <div className="heroImage">
            <img width="100%" src={heroimage}></img>
          </div>
            <div className="Container2 my-4 mx-2">
              <h1 className="titleDesc">The Bright Future of Web 3.0?</h1>
              <div className="description">
                <div className="desc">
                  <p style={{marginBottom: "2rem", borderRadius:"2px"}}>We dive into the next evolution of the web that claims to put the power of the platforms
                 back into the hands of the people.
                  But is it really fulfilling its promise?</p>
                </div>
                <button type="button" className="btn btn-dark">Read More</button>
              </div>
            </div>
        
        </div>
        <div className="sidecontainer">
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h2 className="card-title">New</h2>
              <h5 className="card-subtitle mb-4 text-body-light">
               Hydrogen vs Electric Car
              </h5>
              <p className="card-text">
                Some quick on the card title and make up
                the bulk of the card's content.
              </p>
              <hr></hr>
              <h5 className="card-subtitle mb-4 text-body-light">
               The DownSides of AI History
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title.
              </p>
              <hr></hr>
              <h5 className="card-subtitle mb-4 text-body-light">
               Is VC Funding Drying up?
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title.
              </p>

            </div>
          </div>
        </div>
      </div>
    
        <TopNews></TopNews>
    
    </>
  );
}

export default NewsHome;
