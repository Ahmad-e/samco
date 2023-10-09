import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import background from './start_foto.png';
import img1 from '../images/img1.png';
import main from '../images/main_img.jpg';
import about from '../images/abuot_us.jpg';
import Message from '../images/message'
import { useSelector } from 'react-redux';

import s1 from '../images/serv1.jpg';
import s4 from '../images/serv4.png';
import s3 from '../images/serv3.jpg';

import p19 from '../images/p19.jpg';
import p21 from '../images/p21.jpg';
import p23 from '../images/p23.jpg';


const Home = () =>{
    const color = useSelector((state) => state.counter.mode);
    return(
            <>
                <Col lg={12} xs={12} className="top-home" style={{background: `url(${main}) 0% 0% / cover no-repeat`  }}>

                </Col>
                <Col lg={8} xs={12} className="div-top">
                    <h2 className="main-color" >SAMCO company </h2>
                    <h4 > </h4>
                    <h3>
                    Provide cost-effective and satisfactoryperformance capabilities to meet our customers needs.
                    </h3>
                    <div className="text3">Is a leading privately owned Construction Company offering services for the development of Oil and Gas pipeline, gathering stations, compressor stations, terminal, tank farms, gas plants, refineries, and other surface facilities.
                    <br/> Offering include medium and large scale projects for local and  International clients . </div>
                        
                </Col>
                {/*<Container>
                    <Row className="justify-content-center">
                        <Col lg={12} xs={12} >
                            <div className="center-align"> <p className="section main-color" > ABOUT US </p></div>
                        </Col>
                        <Col lg={6} md={6} xs={12} >
                            <img className="img-about" src={about} />
                        </Col>
                        <Col className="contain" lg={6} md={6} xs={10} >
                                <div className="text1"> SAMCO company </div>
                                <div className="text3" >
                                     Is a leading privately owned Construction Company offering services for the development of Oil and Gas pipeline, gathering stations, compressor stations, terminal, tank farms, gas plants, refineries, and other surface facilities.
                                     <br/> Offering include medium and large scale projects for local and  International clients .
                                     <br/>SINCE 2000 SAMCO keeps moving towards building up a distinguished  reference and keeps in mind to become one of the largest companies in Syria and overseas .
                                </div>
                        </Col>
                        <hr className="h-r"/>
                    </Row>
                    
                </Container>*/}
                
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12} xs={12}>
                        <div className="center-align"> <p className="section main-color" > TOP SERVISES </p></div>
                        </Col>
                        <Col className="center Card"  lg={3}  sm={5} xs={10}>
                            
                                <img className="card-img" src={s1} />
                                <div className="contain">
                                    <div className="text1"> Construction of Oil and Gas production facilities </div>
                                    <div className="text3" >
                                    company has the qualified groups to perform the required mechanical activity of pipe lines and oil and gas facilities according to the international standard and codes which respect the safety and quality
                                    </div>
                                </div>
                        </Col>
                        <Col className="center Card" lg={3}  sm={5} xs={10}>
                            
                                <img className="card-img" src={s3} />
                                <div className="contain">
                                    <div className="text1"> Commissioning of Oil and Gas pipelines </div>
                                    <div className="text3" > Professional groups who have the capability to achieve the required  pipeline activities which including (stringing & welding &lowering & testing ) with specialized people to achieve the activities in the  hard conditions
                                    </div>
                                </div>
                        </Col>
                        <Col className="center Card"  lg={3}  sm={5} xs={10}>
                            
                                <img className="card-img" src={s4} />
                                <div className="contain">
                                    <div className="text1"> Civil and mechanical construction </div>
                                    <div className="text3" > We have the certified and qualified group for the most difficult and sensitive lifting process which are doing according to the risk assessment and lifting method statement .
We have professional riggers and lifting planners who are performing the duties in very difficult circumstances concerning to the height and complicated places
                                        </div>
                                </div>
                        </Col>
                        <Row className="justify-content-center">
                            <Col className={"center next "+color} lg={12} md={12} xs={12}>
                                <Nav.Link className={"center next "+color} variant="link" href="/services">
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50"  class="Svg bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                    <div className="text2"> see more </div>
                                </Nav.Link>
                            </Col>
                        </Row>                        

                        <hr className="h-r"/>
                    </Row>
                </Container>

                <Container>
                    <Row className="justify-content-center">
                        
                        <Col lg={12} xs={12}>
                        <div className="center-align"> <p className="section main-color" > TOP PROJECTS </p></div>
                        </Col>
                        <Col lg={4}  sm={5} xs={10}>
                            <img className="card-img2" src={p19} />
                            <div className="project-text" >
                                <div className="text1"> Export pipe line  </div>
                                <div className="text3" > two export pipe line (10” &12”) from PSK CPF to FSK CPF (22) km
                        including five many folds.
                        with: Salp middle east company
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}  sm={5} xs={10}>
                            <img className="card-img2" src={p21} />
                            <div className="project-text" >
                                <div className="text1"> Maintenance of (four) kerosene tanks including </div>
                                <div className="text3" > Maintenance for the floating roof 
                                                            Install a new roof gasket 
                                                            Maintenance of side walls 
                                                            Re Painting and sand blasting  
                                                            Testing
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}  sm={5} xs={10}>
                            <img className="card-img2" src={p23} />
                            <div className="project-text" >
                                <div className="text1"> Baniyas power plant </div>
                                <div className="text3" >boilers economizer’s maintenance including 
                                                        Cut the existing steel structure& insulation and tube panel
                                                        Install the new tube panel
                                </div>
                            </div>
                        </Col>
                        <Row className="justify-content-center">
                            <Col className={"center next "+color} lg={12} md={12} xs={12}>
                                <Nav.Link className={"center next "+color} variant="link" href="/projects">
                                    <svg width="50" height="50"  class="Svg bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                    <div className="text2"> see more </div>
                                </Nav.Link>
                            </Col>
                        </Row>    
                        <hr className="h-r"/>
                    </Row>

                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12} xs={12}>
                        <div className="center-align"> <p className="section main-color" > JOIN IN COMPANY </p></div>
                        </Col>
                        <Col lg={6} md={8} sm={12} className="center" >
                            <div>Contact with us to know more about our company and obtain our services</div><br/><br/>
                            <Nav.Link  variant="link" href="/contactUs">
                                <Message className="message " />
                            </Nav.Link>
                        </Col>
                    </Row>
                </Container>



            </>
    )
}
export default Home