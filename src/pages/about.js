import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const About = ()=>{
    return(
        <Row className="justify-content-center">
        <Col lg={8} md={10} sm={12} className="contain pd">
            <div className="text1"> <h2> Our Organization </h2></div>
            <div className="text2" > Our resourceful organization structure enables us to deliver cost effective and satisfactory performance capabilities to meet our customers’ needs.</div><br/><br/><br/>
            <div className="text1"> <h2> Performance excellence </h2></div>
            <div className="text2" > Our effective operational management is the core of our business. By supporting our functions and strategic growth. we continue to perform and grow to deliver value to our customers by:</div><br/>
            <ul>
                <li className="text3">
                Effective projects executions
                </li><br/>
                <li className="text3">
                Systematic approach to our business processes
                </li><br/>
                <li className="text3">
                Reliable solutions that deliver benefit to our customers
                </li><br/>
                <li className="text3">
                Proactively manage interaction with clients
                </li><br/>
                <li className="text3">
                Working with clients on construction of site locations studies, land development and approval issues
                </li><br/>
            </ul><br/><br/>
        </Col>
        <hr className="h-r"/>
    </Row>
    )
}
export default About