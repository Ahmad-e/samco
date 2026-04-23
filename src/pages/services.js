import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import s1 from '../images/ser_1.png';
import s2 from '../images/ser_2.png';
import s3 from '../images/ser_3.png';
import s4 from '../images/ser_4.jpg';
import s5 from '../images/ser_5.png';
import s6 from '../images/ser_6.jpg';
import s7 from '../images/ser_7.png';

const Services = () => {
    return (
        <Container className="pt-5" >
            <Col lg={8} md={10} sm={12} className="services-text">
                <div className="text1"> <h2> OUR SERVICES </h2></div>
                <div className="text3" >SAMCO provides integrated Construction projects in Oil and Gas industry based on Turn Key and contracting basis in full compliance with international safety, quality codes and standards.</div><br />
                <div className="text3" >SAMCO services combine best practices, environmentally sound operations, innovative technologies, and high quality support focused at helping our customers increase productivity and efficiency.</div><br />
            </Col>

            <Row className="justify-content-center serv-sec">
                <Col lg={5} md={6} sm={8}>
                    <img className="img-about" src={s1} />
                </Col>
                <Col className lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1">   pipe line and flow lines construction& procurements&  test. </div>

                    </div>
                </Col>
                <hr className="h-r" />
            </Row>
            <Row className="justify-content-center serv-sec">
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1">mechanical work construction</div>
                        <div className="text3" >
                            - Piping (fabrication& welding& installation)
                            <br />- Vessels-& tanks &skids fabrication and installation
                            <br />- Steel structure fabrication& installation
                            <br />- procurements/ test
                        </div>
                    </div>
                </Col>
                <Col lg={5} md={6} sm={8}>
                    <img className="img-about2" src={s2} />
                </Col>
                <hr className="h-r" />
            </Row>
            <Row className="justify-content-center serv-sec">
                <Col lg={5} md={6} sm={8}>
                    <img className="img-about" src={s3} />
                </Col>
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> civil work construction of the oil  </div>
                        <div className="text3" >-	Procurements/ test
                        </div>
                    </div>
                </Col>
                <hr className="h-r" />
            </Row>

            <Row className="justify-content-center serv-sec">
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> Construction of tanks- vessels- skids.</div>
                        <div className="text3" >- Fabrication/ welding
                            <br />-	Procurements / test
                        </div>
                    </div>
                </Col>
                <Col lg={5} md={6} sm={8}>
                    <img className="img-about2" src={s4} />
                </Col>
                <hr className="h-r" />
            </Row>

            <Row className="justify-content-center serv-sec">
                <Col lg={5} md={6} sm={8}>
                    <img className="img-about" src={s5} />
                </Col>
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1">inspection activities including:  </div>
                        <div className="text3" > -	NDT (PT& RT & UT& MT)
                            <br />-	Hydro test / pneumatic test
                            <br />-	Post welding heat treatment (PWHT).
                        </div>
                    </div>
                </Col>
                <hr className="h-r" />
            </Row>

            <Row className="justify-content-center serv-sec">
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1">- Painting& insulation construction/ inspection:  </div>
                    </div>
                </Col>

                <Col lg={5} md={6} sm={8}>
                    <img className="img-about" src={s6} />
                </Col>

                <hr className="h-r" />
            </Row>

            <Row className="justify-content-center serv-sec">
                <Col lg={5} md={6} sm={8}>
                    <img className="img-about" src={s7} />
                </Col>

                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1">- procurements  </div>
                        <div className="text3" > -	Mechanical.
                            <br />-	Electrical .
                            <br />-	Instrument  .
                        </div>
                    </div>
                </Col>
                <hr className="h-r" />
            </Row>

        </Container>
    )
}
export default Services