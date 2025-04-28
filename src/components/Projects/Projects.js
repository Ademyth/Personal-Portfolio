import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat.png";
import flex from "../../Assets/Projects/flex.png"
import estate from "../../Assets/Projects/estate.png"
import timeline from "../../Assets/Projects/timeline.png"
import underdog from "../../Assets/Projects/underdog.png"
import face from "../../Assets/Projects/face.png"
import fondre from "../../Assets/Projects/fondre.png"
import community from "../../Assets/Projects/community.png"
import meditea from "../../Assets/Projects/meditea.png"
import winners from "../../Assets/Projects/winners.png"
import spotlight from "../../Assets/Projects/spotlight.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotlight}
              isBlog={false}
              title="Spotlight"
              description="I led the team and managed the development of the Spotlight web application, a luxury and creative hub in Lekki. Built with React and Django, the site highlights their lounge, spa, art exhibition space, event center, and DJ studio, delivering a seamless and engaging experience that blends elegance with innovation. "
              demoLink="https://spotlight-pink.vercel.app/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={winners}
              isBlog={false}
              title="Winners Chapel International Dallas"
              description="I developed the Winners Chapel International Dallas website using WordPress, creating a dynamic platform for sharing church events, sermons, and resources while strengthening community engagement online. "
              demoLink="https://www.winnerschapeldallas.org/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meditea}
              isBlog={false}
              title="Meditea"
              description="I built an e-commerce website for Mediteas using WordPress, allowing the brand to showcase and sell their range of herbal teas focused on wellness, healing, and healthy living through a clean and engaging online store. "
              demoLink="https://ourmeditea.com/"
            />
          </Col>
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={community}
              isBlog={false}
              title="Community Pot"
              description="I developed the Community Pot website with WordPress to support their mission of improving child nutrition in Nigeria. The site highlights their initiatives, shares resources, and drives community engagement through a clean, responsive design. "
              demoLink="https://communitypots.com/"
            />
          </Col>
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fondre}
              isBlog={false}
              title="Fondre Cakes"
              description="I built an e-commerce website for Fondre Cakes using WordPress, enabling the business to showcase and sell custom cakes online through a user-friendly and responsive platform. "
              demoLink="https://fondrecakes.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flex}
              isBlog={false}
              title="FlexTv"
              description="I've crafted a sleek movie app using React, Vite, Tailwind, and Firebase. While it's packed with features, please note that movie streaming is temporarily unavailable. "
              ghLink="https://github.com/Ademyth/FlexTv"
              demoLink="https://flexxtv.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={underdog}
              isBlog={false}
              title="Underdog Production"
              description="Through WordPress, I designed a sleek and efficient website for Underdog Productions, showcasing their diverse offerings and commitment to delivering quality entertainment."
              ghLink="#"
              demoLink="https://underdogproductions.com.ng/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estate}
              isBlog={false}
              title="Real Estate"
              description="Built a real estate web app with react, sass and strapi."
              ghLink="#"
              demoLink="https://autonomous.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Detection"
              description="I developed a straightforward face detector using Python and OpenCV. This tool efficiently identifies and marks faces in images, providing a quick and effective solution for face detection."
              ghLink="https://github.com/Ademyth/Face-Detection"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timeline}
              isBlog={false}
              title="Timeline"
              description="Created a timeline experience using React, offering a visual journey through events and milestones."
              ghLink="https://github.com/Ademyth/Timeline"
              demoLink="https://ademyth.github.io/Timeline/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Zag Chat"
              description="Developed a restricted-access chat web application with React, CSS, and chatengine.io. It's worth mentioning that the web app is not fully operational as chatengine.io requires payment to continue utilizing their API."
              ghLink="https://github.com/Ademyth/chatapp"
              demoLink="https://zag-chat.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
