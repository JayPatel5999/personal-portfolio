import { Container, Row, Col, Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
    
    const projects = [
        {
            title: " Project Name 1",
            description: "Design & Developement",
            imgUrl: projImg1,
        },
        {
            title: " Project Name 2",
            description: "Design & Developement",
            imgUrl: projImg2,
        },
        {
            title: " Project Name 3",
            description: "Design & Developement",
            imgUrl: projImg3,
        },
    ];   

    return(
      <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                    <h2>My Projects</h2>
                    <p>
                        As a passionate Web Developer, I strive to create web applications that are not only functional and user-friendly, but also visually appealing. I have a keen interest in the latest web technologies and enjoy the challenge of learning new skills. In addition to web development, I am also a Cyber Security Enthusiast. I believe that in today's digital age, it's crucial to prioritize security in every aspect of development. I am always eager to implement the best security practices in my projects to ensure the safety and privacy of users.
                    </p>
                    <TabContainer id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" disabled>Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TabContent>
                            <TabPane eventKey='first'>
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <p>{project.title}</p>
                                            )
                                        })
                                    }
                                </Row>
                            </TabPane>
                            <TabPane eventKey='second'>Lorem Ipsum....</TabPane>
                            <TabPane eventKey='third'>Lorem Ipsum.........</TabPane>
                        </TabContent>
                    </TabContainer>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>  
    )
}