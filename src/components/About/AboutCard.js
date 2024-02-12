import React from "react";
import Card from "react-bootstrap/Card";
import { ImBlog } from "react-icons/im";
import { ImPointRight } from "react-icons/im";
import Button from "react-bootstrap/Button";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Human, I am <span className="purple"> Adepegba Adegoke </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            A graduate with a BSc in Computer Science.
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay.
            <br /> */}
            <br />
            Besides coding, there are a few more activities I have a passion for! 🫣
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight />Basketball
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
          Check out my fun timeline for cool surprises. Just hit the Timeline button to start the adventure! 😄🚀{" "}
          </p>
            <Button
                variant="outline-primary"
                href="https://ademyth.github.io/Timeline/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "" }} /> Timeline
            </Button>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
