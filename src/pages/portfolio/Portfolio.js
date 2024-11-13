import React from "react";
import "./portfolio.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import Confluence from "../../assets/ConfluenceEdu.png";
import SVSR from "../../assets/SVSR Home Page.png";
import Vidyauni from "../../assets/vidyauni.png";
import Jaikisan from "../../assets/Jaikisan.png";
import Onevilla from "../../assets/Onevilla.png";

export const Portfolio = () => {
  const dataportfolio = [
    {
      img: Confluence,
      description:
        "Confluence Educational Services - A consultancy website providing educational consultancy services.",
      link: "https://www.confluenceedu.com/",
    },
    {
      img: SVSR,
      description:
        "SVSR College - A website for an IT consultancy and IT service provider.",
      link: "https://www.svsrco.com/",
    },
    {
      img: Vidyauni,
      description:
        "VidyaUni - An educational platform where students can explore college pages, filter based on location preferences, and learn more about different colleges.",
      link: "https://www.vidyauni.com/",
    },
    {
      img: Jaikisan,
      description:
        "Jaikisan - An upcoming e-commerce platform enabling farmers to sell their organic products directly to consumers.",
      link: "https://www.jaikisan.co/",
    },
    {
      img: Onevilla,
      description:
        "Onevilla - A property buying and selling website, offering listings and resources for real estate transactions.",
      link: "https://www.onevilla.co/",
    },
  ];

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              <img src={data.img} alt="Portofolio" />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  view project
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
