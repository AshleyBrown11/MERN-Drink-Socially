import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import loveImg from "../assets/images/hero-img01.jpg";
import loveImg02 from "../assets/images/hero-img02.jpg";
import loveVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";


const Home = () => {
  return (
    <>
      {/* ========== love section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="love__content">
                <div className="love__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"Know Before You Post"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Being A Content Creator Has Its Pros and Cons
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Before you post make sure it is something you want the world to see. No 
                  matter if you delete it, it can still be accessible. 
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="love__img-box">
                <img src={loveImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="love__img-box love__video-box mt-4">
                <video src={loveVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="love__img-box mt-5">
                <img src={loveImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========== love section end =========== */}
      </>
    );
};

export default Home;
