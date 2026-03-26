import { Container, Row, Col } from "react-bootstrap";
import university from "../assets/img/Logo_UMSA.png";
import escuela from "../assets/img/EIS-PDM.jpg";
import bootcamp from "../assets/img/link_space.jpg";
import hansa from "../assets/img/hansa.jpg";
import datalinks from "../assets/img/datalinksbolivia.jpeg"

const education = [
  { title: "Ingenieria en Petroleo, Gas y Procesos", school: "Universidad Mayor de San Andres", year: "2023", icon: university },
  { title: "Informatica Industrial", school: "Escuela Industrial Superior Pedro Domingo Murillo", year: "2023", icon: escuela },
  { title: "Bootcamp Full Stack", school: "Platzi", year: "2024", icon: bootcamp },
];

const experience = [
  { role: "DESARROLLADOR WEB", company: "EISPDM", period: "Mar 2022 - Jul 2022", icon: escuela },
  { role: "Desarrollador Backend", company: "Freelance", period: "Sep 2022 - Feb 2024"},
  { role: "TÉCNICO PEXT-PINT ", company: "DATALINKS", period: "Mar 2024 - May 2024", icon: datalinks },
  { role: "DESARROLLADOR CRM ", company: "Hansa Ltda", period: "Jul 2024 - Oct 2025" , icon: hansa},
];

const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "PYTHON", level: 70 },
  { name: "JAVASCRIPT", level: 98 },
  { name: "FIGMA", level: 91 },
  { name: "Mobile Developer", level: 55}
];

export const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutme">
      <Container>
        <Row className="g-4">
          <Col xs={12} lg={6}>
            <h2 className="aboutme-title">My Education</h2>
            <div className="aboutme-list">
              {education.map((item) => (
                <div className="aboutme-card" key={`${item.title}-${item.year}`}>
                  <div className="aboutme-icon"><img src={item.icon} alt={item.title} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.school}</p>
                    <span>{item.year}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="aboutme-title mt-5">My Skills</h2>
            <div className="aboutme-skills">
              {skills.map((skill) => (
                <div className="aboutme-skill-item" key={skill.name}>
                  <div className="aboutme-skill-head">
                    <span>{skill.name}</span>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div className="aboutme-skill-track">
                    <div className="aboutme-skill-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <h2 className="aboutme-title text-lg-start text-center">More About Me</h2>
            <p className="aboutme-description">

              Desarrolladora Backend con experiencia en desarrollo de microservicios utilizando NestJS y PHP, 
              integración de sistemas y manejo de arquitecturas orientadas a eventos. He trabajado en la implementación 
              de soluciones escalables con herramientas como Docker, CI/CD, ActiveMQ y ElasticSearch. 
              Cuento con experiencia en procesamiento de datos, automatización de flujos e integración con CRM (SugarCRM), 
              así como gestión de APIs mediante Kong Gateway.
            </p>

            <div className="aboutme-stats">
              <div className="aboutme-stat-box">
                <strong>+12</strong>
                <span>Clientes Satisfechos</span>
              </div>
              <div className="aboutme-stat-box">
                <strong>+12</strong>
                <span>Proyectos</span>
              </div>
              <div className="aboutme-stat-box">
                <strong>+2</strong>
                <span>Years Experience</span>
              </div>
            </div>

            <h2 className="aboutme-title mt-5 text-lg-start text-center">My Experiences</h2>
            <div className="aboutme-list">
              {experience.map((item) => (
                <div className="aboutme-card" key={`${item.role}-${item.company}`}>
                  <div className="aboutme-icon"><img src={item.icon} alt={item.title} /></div>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                    <span>{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
  