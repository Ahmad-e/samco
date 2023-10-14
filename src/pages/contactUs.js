import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import s1 from '../images/savety1.jpg';
import s2 from '../images/savety2.jpg';
import s3 from '../images/savety3.jpg';
import o1 from '../images/o1.jpg';
import o2 from '../images/o2.jpg';
import o3 from '../images/o3.jpg';

const ContactUs = () =>{
    return(
        <>
            
            <Row className="justify-content-center">
                <Col className="center" xl={3} lg={4} md={12} sm={12}>
                    <img className="img-info" src={o1} />
                    <img className="img-info" src={o2} />
                    <img className="img-info" src={o3} />
                    <img className="img-info" src={s2} />
                </Col>
                <Col lg={6} md={8} sm={12} className="contain pd">
                    <div className="text1"> <h2> What we offer </h2></div>
                   
                    <div className="text2" > As a Construction company, the management and employees of SAMCO are committed to:</div><br/>
                    <ul>
                        <li className="text3">
                        Carry out projects in accordance with the established contractual needs of our clients
                        </li><br/>
                        <li className="text3">
                        Implement a quality management system that complies with international standards requirements
                        </li><br/>
                        <li className="text3">
                        Establishing and implementing objectives of the quality management system at relevant departments that are annually reviewed by top management to ensure their achievement.
                        </li><br/>
                        <li className="text3">
                        Continual improvement of the effective implementation of quality management system through:
                            <ul>
                                <li className="text3">
                                    Commitment to Quality Policy and achieving quality objectives
                                </li>
                                <li className="text3">
                                    Improving employee’s competence and performance by education and continual training.
                                </li>
                                <li className="text3">
                                    Using advanced equipment, devices and facilities.
                                </li>
                                <li className="text3">
                                Implementing periodic internal audits and top management reviews as well as appropriate 
                                corrective and preventive actions.
                                </li>
                            </ul>

                        </li><br/>
                    </ul>
                </Col>
                <hr className="h-r"/>
            </Row>
           
           

            </>
    )
}
export default ContactUs