import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Learn easily using concise and well curated videos and quizzes from industry professionals!",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "All queries and inconveniences are addressed with our 24x7 customer support.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Complete the courses to earn certifications that will help boost your job profile and employability!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
