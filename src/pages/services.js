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
                <Col lg={5} md={6} sm={8}>
                    <img className="img-about" src={s1} />
                </Col>
                <Col className lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> Construction and Commissioning of Oil and Gas production facilities </div>
                        <div className="text3" >company has the qualified groups to perform the required mechanical activity of pipe lines and oil and gas facilities according to the international standard and codes which respect the safety and quality. </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center serv-sec">
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> Construction all types of tanks and vessels </div>
                        <div className="text3" >  </div>
                    </div>
                </Col>
                <Col lg={5} md={6} sm={8}>
                <img className="img-about2" src={s2} />
                </Col>
            </Row>
            <Row className="justify-content-center serv-sec">
                <Col lg={5} md={6} sm={8}>
                <img className="img-about" src={s5} />
                </Col>
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> performing professionally all types of paint and insulation  </div>
                        <div className="text3" > Our paint and insulation  department   supplied by the modern equipment and certified inspectors and professional group  to perform  many types of paint and insulation which is matching the international codes and standard and approved method statement from many clients .
                            </div>
                    </div>
                </Col>
            </Row>
            
            <Row className="justify-content-center serv-sec">
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1"> Civil and mechanical construction </div>
                        <div className="text3" > We have the certified and qualified group for the most difficult and sensitive lifting process which are doing according to the risk assessment and lifting method statement . </div>
                        <div className="text3" > We have professional riggers and lifting planners who are performing the duties in very difficult circumstances concerning to the height and complicated places  </div>
                    </div>
                </Col>
                <Col lg={5} md={6} sm={8}>
                <img className="img-about2" src={s4} />
                </Col>
            </Row>

            <Row className="justify-content-center serv-sec">
                <Col lg={5} md={6} sm={8}>
                    <img className="img-about" src={s6} />
                </Col>
                <Col lg={7} md={6} sm={12}>
                    <div className="contain">
                        <div className="text1">perform the maintenance of  Pipe line & tanks and vessels & pipes & pumps & valves .</div>
                        <div className="text3" > We have the special procedures and method statements which covers the best solutions to get the best results concerning to the international codes  and standard </div>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}
export default Services