import React from "react";
import "./TopNews.css";
import topImg1 from "../assets/image-gaming-growth.jpg";
import topImg2 from "../assets/image-top-laptops.jpg";
import topImg3 from "../assets/image-retro-pcs.jpg";

function TopNews() {
  return (
    <>
      <div className="container" style={{marginLeft:"0rem", paddingInline:"4rem"}}>
        <div className="row align-items-center">
          <div className="col card1 mx-2">
            <div className="content ">
              <img height="150px" src={topImg1}></img>
              <div className="top-desc mx-3 my-2">
                <div className="topnum">01</div>
                <div style={{color:"#00001a"}}>Reviving Retro PCs</div>
                <div className="desc-new">What happen when old PCs get new modern updates?</div>
              </div>
            </div>
          </div>
          <div className="col card1 mx-2">
            <div className="content">
              <img height="150px" src={topImg2}></img>
              <div className="top-desc mx-3 my-2">
                <div className="topnum">02</div>
                <div style={{color:"#00001a"}}>Top 10 Laptop's of 2023</div>
                <divc className="desc-new">What happen when old PCs get new modern updates?</divc>
              </div>    
            </div>
          </div>
          <div className="col card1 mx-2">
            <div className="content">
              <img height="150px" src={topImg3}></img>
              <div className="top-desc mx-3 my-2">
                <div className="topnum">03</div>
                <div style={{color:"#00001a"}}>The Growth of Gaming</div>
                <div className="desc-new">What happen when old PCs get new modern updates?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNews;
