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

import s1 from '../images//ser_1.png';
import s4 from '../images/ser_3.png';
import s3 from '../images/ser_2.png';

import p19 from '../images/pr_1.jpg';
import p21 from '../images/pr_2.png';
import p23 from '../images/pr_3.jpg';

import Carousel from 'react-bootstrap/Carousel';
import Home1 from '../images/home1.jpg';
import Home2 from '../images/home2.jpg';
import Home3 from '../images/home3.jpg';
import Home4 from '../images/home4.jpg';
import Home5 from '../images/home5.jpg';
import Home6 from '../images/home6.jpg';


const Home = () => {
    const color = useSelector((state) => state.counter.mode);
    const carouselHeigt = "500px";
    return (
        <>
            {/* <Col lg={12} xs={12} className="top-home"
            // style={{ background: `url(${main}) 0% 0% / cover no-repeat` }}
            >

            </Col> */}
            <Carousel style={{ height: carouselHeigt }} fade interval={7000}>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home1} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>
                        <h2 className="" >SAMCO Company </h2>
                        <div className="text3" style={{ fontSize: "20px" }}>Is a leading privately owned Construction Company offering services for the development of Oil and Gas pipeline, gathering stations, compressor stations, terminal, tank farms, gas plants, refineries, and other surface facilities.
                            <br /> Offering include medium and large scale projects for local and  International clients . </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home2} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>
                        <h2 className="" >SAMCO Company </h2>
                        <div className="text3 " style={{ fontSize: "20px" }}>Is a leading privately owned Construction Company offering services for the development of Oil and Gas pipeline, gathering stations, compressor stations, terminal, tank farms, gas plants, refineries, and other surface facilities.
                            <br /> Offering include medium and large scale projects for local and  International clients . </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home3} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>
                        <h2 className="" >SAMCO Company </h2>
                        <div className="text3" style={{ fontSize: "20px" }}>Is a leading privately owned Construction Company offering services for the development of Oil and Gas pipeline, gathering stations, compressor stations, terminal, tank farms, gas plants, refineries, and other surface facilities.
                            <br /> Offering include medium and large scale projects for local and  International clients . </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home4} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>
                        <h2 className="" >SAMCO Company </h2>
                        <div className="text3" style={{ fontSize: "20px" }}>Is a leading privately owned Construction Company offering services for the development of Oil and Gas pipeline, gathering stations, compressor stations, terminal, tank farms, gas plants, refineries, and other surface facilities.
                            <br /> Offering include medium and large scale projects for local and  International clients . </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home5} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>
                        <h2 className="" >SAMCO Company </h2>
                        <div className="text3" style={{ fontSize: "20px" }}>Is a leading privately owned Construction Company offering services for the development of Oil and Gas pipeline, gathering stations, compressor stations, terminal, tank farms, gas plants, refineries, and other surface facilities.
                            <br /> Offering include medium and large scale projects for local and  International clients . </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home6} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>
                        <h2 className="" >SAMCO Company </h2>
                        <div className="text3" style={{ fontSize: "20px" }}>Is a leading privately owned Construction Company offering services for the development of Oil and Gas pipeline, gathering stations, compressor stations, terminal, tank farms, gas plants, refineries, and other surface facilities.
                            <br /> Offering include medium and large scale projects for local and  International clients . </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
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
                        <div className="center-align"> <p className="section main-color" > CORE SERVISES </p></div>
                    </Col>
                    <Col className="center Card" lg={3} sm={5} xs={10}>

                        <img className="card-img" src={s1} />
                        <div className="contain center">
                            <div className="text1" style={{ fontSize: "18px" }}> mechanical work construction   </div>

                        </div>
                    </Col>
                    <Col className="center Card" lg={3} sm={5} xs={10}>

                        <img className="card-img" src={s3} />
                        <div className="contain center">
                            <div className="text1" style={{ fontSize: "18px" }} > civil work construction of the oil </div>
                        </div>
                    </Col>
                    <Col className="center Card" lg={3} sm={5} xs={10}>

                        <img className="card-img" src={s4} />
                        <div className="contain center">
                            <div className="text1" style={{ fontSize: "18px" }} > Construction of tanks- vessels- skids. </div>

                        </div>
                    </Col>
                    <Row className="justify-content-center">
                        <Col className={"center next " + color} lg={12} md={12} xs={12}>
                            <Nav.Link className={"center next " + color} variant="link" href="/services">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="Svg bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                                <div className="text2"> see more </div>
                            </Nav.Link>
                        </Col>
                    </Row>

                    <hr className="h-r" />
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-center">

                    <Col lg={12} xs={12}>
                        <div className="center-align"> <p className="section main-color" > TOP PROJECTS </p></div>
                    </Col>
                    <Col lg={4} sm={5} xs={10}>
                        <img className="card-img2" src={p19} />
                        <div className="project-text" >
                            {/* <div className="text1"> Export pipe line  </div> */}
                            <div className="text2" >
                                L006T-109 construction of six storage tanks 15000 m3 with the piping nets
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={5} xs={10}>
                        <img className="card-img2" src={p21} />
                        <div className="project-text" >
                            {/* <div className="text1"> Maintenance of (four) kerosene tanks including </div> */}
                            <div className="text2" >
                                construction of four Naphtha tanks (15000) m3 capacity including piping nets connection
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={5} xs={10}>
                        <img className="card-img2" src={p23} />
                        <div className="project-text" >
                            {/* <div className="text1"> Baniyas power plant </div> */}
                            <div className="text2" >
                                construction of two storage tanks (5000) m3 including piping nets connection
                            </div>
                        </div>
                    </Col>
                    <Row className="justify-content-center">
                        <Col className={"center next " + color} lg={12} md={12} xs={12}>
                            <Nav.Link className={"center next " + color} variant="link" href="/projects">
                                <svg width="50" height="50" class="Svg bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                                <div className="text2"> see more </div>
                            </Nav.Link>
                        </Col>
                    </Row>
                    <hr className="h-r" />
                </Row>

            </Container>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12} xs={12}>
                        <div className="center-align"> <p className="section main-color" > JOIN IN COMPANY </p></div>
                    </Col>
                    <Col lg={6} md={8} sm={12} className="center" >
                        <div>Contact with us to know more about our company and obtain our services</div><br /><br />
                        <Nav.Link variant="link" href="/contactUs">
                            <Message className="message " />
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>



        </>
    )
}
export default Home