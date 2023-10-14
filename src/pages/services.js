import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s5 from '../images/serv5.jpg';
import s6 from '../images/serv6.jpg';
import s1 from '../images/serv1.jpg';
import s2 from '../images/serv2.jpg';
import s3 from '../images/serv3.jpg';
import s4 from '../images/serv4.png';

const Services = () =>{
    return(
        <Container className="pt-5" >
            <Col lg={8} md={10} sm={12} className="services-text">
                <div className="text1"> <h2> OUR SERVICES </h2></div>
                <div className="text3" >SAMCO provides integrated Construction projects in Oil and Gas industry based on Turn Key and contracting basis in full compliance with international safety, quality codes and standards.</div><br/>
                <div className="text3" >SAMCO services combine best practices, environmentally sound operations, innovative technologies, and high quality support focused at helping our customers increase productivity and efficiency.</div><br/>
            </Col>
            <Row className="justify-content-center serv-sec">
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> Construction and commissioning of oil and gas pipe line and flow lines </div>
                        <div className="text3" > - All the civil work (surveying& trenching &road and river crossing) 
                            <br/>- All the electrical work (cathodic protection system& instrument & fiber optic) 
                            <br/>- Cleaning& testing and pigging  </div>
                    </div>
                </Col>
                <Col lg={5} md={6} sm={8}>
                <img className="img-about2" src={s3} />
                </Col>
                <hr className="h-r"/>
            </Row>
            <Row className="justify-content-center serv-sec">
                <Col lg={5} md={6} sm={8}>
                    <img className="img-about" src={s1} />
                </Col>
                <Col className lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> Construction of mechanical work of the oil and gas and power stations refineries </div>
                        <div className="text3" >- Piping work 
                        <br/>- Vessels and skids installation 
                        <br/>- Still structure fabrication& installation </div>
                    </div>
                </Col>
                <hr className="h-r"/>
            </Row>
            <Row className="justify-content-center serv-sec">
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> Construction all types of tanks and vessels </div>
                        <div className="text3" > - Crude oil& water and spherical tanks 
                        <br/>- Testing 
                        <br/>- Civil work  </div>
                    </div>
                </Col>
                <Col lg={5} md={6} sm={8}>
                <img className="img-about2" src={s2} />
                </Col>
                <hr className="h-r"/>
            </Row>
            <Row className="justify-content-center serv-sec">
                <Col lg={5} md={6} sm={8}>
                <img className="img-about" src={s5} />
                </Col>
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> Painting &sand blasting &insulation  </div>
                        <div className="text3" >- Piping& steel structure sand blasting and painting and insulation 
                        <br/>- Tanks& vessels sand blasting &painting& insulation 
                            </div>
                    </div>
                </Col>
                <hr className="h-r"/>
            </Row>
            
            <Row className="justify-content-center serv-sec">
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> Civil and mechanical construction </div>
                        <div className="text3" > - Surveying & levelling 
                        <br/>- All the facilities road& crossing & tunnels& building 
                        <br/>- Pipe rack basis& tanks basis & vessels and skids basis </div>
                    </div>
                </Col>
                <Col lg={5} md={6} sm={8}>
                <img className="img-about2" src={s4} />
                </Col>
                <hr className="h-r"/>
            </Row>

            <Row className="justify-content-center serv-sec">
                <Col lg={5} md={6} sm={8}>
                    <img className="img-about" src={s6} />
                </Col>
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> Maintenance work  </div>
                        <div className="text3" > - Pipe line maintenance 
                        <br/>- Tanks maintenance 
                        <br/>- Piping &steel structure maintenance </div>
                    </div>
                </Col>
                <hr className="h-r"/>
            </Row>
        </Container>
    )
}
export default Services