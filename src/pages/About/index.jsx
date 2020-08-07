import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./About.scss"

const About = () => {
  return (
    <div className="about">
      <CssBaseline />
      <Header />
      <Container>
        <h2> About</h2>
        <p>About</p>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
