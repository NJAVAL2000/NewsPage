import React from "react";
import heroimage from "../assets/image-web-3-desktop.jpg";
import "./NewsHome.css";

function NewsHome(props) {
  return (
    <>
      <div className="containerNew">
        <div className="containerHero">
          <div className="heroImage">
            <img width="100%" src={heroimage}></img>
          </div>
          <div>
            <div className="Container2">
              <h3>Container2</h3>
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
    </>
  );
}

export default NewsHome;
