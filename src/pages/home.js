import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import background from './start_foto.png';
import img1 from '../images/img1.png';
import main from '../images/main_img.png';
import about from '../images/abuot_us.jpg';
import Message from '../images/message'
import { useSelector } from 'react-redux';

import s1 from '../images//ser_1.png';
import s4 from '../images/ser_3.png';
import s3 from '../images/ser_2.png';

import p19 from '../images/pr_1_1.jpg';
import p21 from '../images/pr_2_1.png';
import p23 from '../images/pr_3_1.jpg';

import Carousel from 'react-bootstrap/Carousel';
import Home1 from '../images/home1.jpg';
import Home2 from '../images/home2.jpg';
import Home3 from '../images/home3.jpg';
import Home4 from '../images/home4.jpg';
import Home5 from '../images/home5.jpg';
import Home6 from '../images/home6.jpg';


import p1 from '../images/pr_1_1.jpg';
import p2 from '../images/pr_2_1.png';
import p3 from '../images/pr_3_1.jpg';
import p4 from '../images/pr_4_1.png';
import p5 from '../images/pr_5_1.jpg';
import p6 from '../images/pr_6_1.jpg';
import p7 from '../images/pr_7_1.png';
import p8 from '../images/pr_8_1.png';
import p9 from '../images/pr_9_1.jpg';
import p10 from '../images/pr_10_1.jpg';
import p11 from '../images/pr_11_1.jpg';


const Home = () => {

    const projectsData = [
        {
            title: "Construction of 6 Storage Tanks (15,000 m³)",
            location: "Lanaz Refinery - Iraq",
            client: "Lanaz Company",
            date: "In Progress", // أو "Ongoing"
            image: p1
        },
        {
            title: "Naphtha Tanks & Piping Connection",
            location: "Lanaz Refinery - Iraq",
            client: "Lanaz Company - Talay Tech",
            date: "2023",
            image: p2
        },
        {
            title: "Storage Tanks Construction (5,000 m³)",
            location: "Qayyarah Field - Iraq",
            client: "NOC - Sonangol",
            date: "2021",
            image: p3
        },
        {
            title: "Boilers Economizer Maintenance",
            location: "Banias Power Station - Syria",
            client: "Ministry of Electricity",
            date: "2020",
            image: p4
        },
        {
            title: "Crude Oil Pipeline (24” - 12km)",
            location: "Qayyarah Field - Iraq",
            client: "NOC - Sonangol",
            date: "2019",
            image: p5
        },
        {
            title: "Abu Dhabi Airport: MEP & Steel Structure",
            location: "Abu Dhabi Airport - UAE",
            client: "ADAC - PCEGV / NAFCO",
            date: "2017",
            image: p6
        },
        {
            title: "MLE Gas Plant Piping Works",
            location: "Wadi Al Tah - Algeria",
            client: "Sonatrach - ENI",
            date: "2011",
            image: p7
        },
        {
            title: "Teshreen & Ouda Field Development",
            location: "Teshreen Field - Syria",
            client: "Dublin - AFPC",
            date: "2009",
            image: p8
        },
        {
            title: "Floating Roof Naphtha Tanks Maintenance",
            location: "Homs Refinery - Syria",
            client: "Homs Refinery Company",
            date: "2018",
            image: p9
        },
        {
            title: "Ohanet Gas Pipeline (400km)",
            location: "Illizi State - Algeria",
            client: "Sonatrach - TMCA",
            date: "2008",
            image: p10
        },
        {
            title: "Corrugated Water Line (48”)",
            location: "Aleppo Industrial City - Syria",
            client: "Ministry of Water Resources",
            date: "2007",
            image: p11
        }
    ];



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
                    <img className="card-img cars_filter" src={main} style={{ height: "700px" }} />
                    <Carousel.Caption style={{ top: "1.25rem" }}>
                        <h2 className="main-color " >SAMCO Company </h2>
                        <h4 style={{ fontSize: "20px", color: "black" }}>
                            Implementing medium and large scale projects for local and international clients.
                        </h4>
                        <div className="text3" style={{ fontSize: "16px", color: "black" }}>Is a leading privately owned Construction Company offering services for the development of Oil and Gas pipeline, gathering stations, compressor stations, terminal, tank farms, gas plants, refineries, and other surface facilities . </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home1} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home2} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home3} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home4} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home5} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: carouselHeigt }}>
                    <img className="card-img cars_filter" src={Home6} style={{ height: carouselHeigt }} />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


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
                                <span className="text2"> SEE MORE </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" class="Svg bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>

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
                    <Col lg={24} sm={24}>
                        <div className='slider'>
                            {
                                projectsData.map((item) => {
                                    return (
                                        <div className="center Card" >

                                            <img className="card-img" src={item.image} />
                                            <div className="contain">
                                                <div className="text1" style={{ fontSize: "18px" }}> {item.title}   </div>
                                                <div className="text2"> Location : <span className="text3" > {item.location}</span> </div>
                                                <div className="text2">  Date : <span className="text3" > ( {item.date} ) </span> </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Row className="justify-content-center">
                        <Col className={"center next " + color} lg={12} md={12} xs={12}>
                            <Nav.Link className={"center next " + color} variant="link" href="/projects">
                                <span className="text2" style={{ fontSize: "22px" }}> SEE MORE </span>
                                <svg width="22" height="22" class="Svg bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
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