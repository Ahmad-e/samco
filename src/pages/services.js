import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import s1_1 from '../images/ser_1_1.png';
import s1_2 from '../images/ser_1_2.jpg';

import s2_1 from '../images/ser_2_1.png';
import s2_2 from '../images/ser_2_2.jpg';
import s2_3 from '../images/ser_2_3.png';
import s2_4 from '../images/ser_2_4.jpg';

import s3_1 from '../images/ser_3_1.png';
import s3_2 from '../images/ser_3_2.jpg';
import s3_3 from '../images/ser_3_3.jpg';
import s3_4 from '../images/ser_3_4.jpg';

import s4_1 from '../images/ser_4_1.jpg';
import s4_2 from '../images/ser_4_2.jpg';
import s4_3 from '../images/ser_4_3.jpg';
import s4_4 from '../images/ser_4_4.jpg';

import s5_1 from '../images/ser_5_1.png';
import s5_2 from '../images/ser_5_2.jpg';
import s5_3 from '../images/ser_5_3.jpg';
import s5_4 from '../images/ser_5_4.jpg';
import s5_5 from '../images/ser_5_5.png';

import s6_1 from '../images/ser_6_1.jpg';
import s6_2 from '../images/ser_6_2.jpg';
import s6_3 from '../images/ser_6_3.jpg';
import s6_4 from '../images/ser_6_4.jpg';

import s7_1 from '../images/ser_7_1.png';
import s7_2 from '../images/ser_7_2.png';
import s7_3 from '../images/ser_7_3.png';
import s7_4 from '../images/ser_7_4.jpg';

import ImageGallery from '../components/imageGallery'


const Services = () => {

    // تحويل البيانات إلى مصفوفة كائنات (Objects)
    const servicesData = [
        {
            title: "pipe line and flow lines construction & procurements & test.",
            description: "",
            images: [s1_1, s1_2],
            reverse: false // للتحكم في اتجاه العرض (صورة يمين أو يسار)
        },
        {
            title: "mechanical work construction",
            description: (
                <>
                    - Piping (fabrication & welding & installation)<br />
                    - Vessels & tanks & skids fabrication and installation<br />
                    - Steel structure fabrication & installation<br />
                    - procurements / test
                </>
            ),
            images: [s2_1, s2_2, s2_3, s2_4],
            reverse: true
        },
        {
            title: "civil work construction of the oil",
            description: "- Procurements / test",
            images: [s3_1, s3_2, s3_3, s3_4],
            reverse: false
        },
        {
            title: "Construction of tanks- vessels- skids.",
            description: (
                <>
                    - Fabrication / welding<br />
                    - Procurements / test
                </>
            ),
            images: [s4_1, s4_2, s4_3, s4_4],
            reverse: true
        },
        {
            title: "inspection activities including:",
            description: (
                <>
                    - NDT (PT & RT & UT & MT)<br />
                    - Hydro test / pneumatic test<br />
                    - Post welding heat treatment (PWHT).
                </>
            ),
            images: [s5_1, s5_2, s5_3, s5_4, s5_5],
            reverse: false
        },
        {
            title: "- Painting & insulation construction / inspection:",
            description: "",
            images: [s6_1, s6_2, s6_3, s6_4],
            reverse: true
        },
        {
            title: "- procurements",
            description: (
                <>
                    - Mechanical.<br />
                    - Electrical.<br />
                    - Instrument.
                </>
            ),
            images: [s7_1, s7_2, s7_3, s7_4],
            reverse: false
        }
    ];

    return (
        <Container className="pt-5">
            <Col lg={8} md={10} sm={12} className="services-text">
                <div className="text1"> <h2> OUR SERVICES </h2></div>
                <div className="text3">
                    SAMCO provides integrated Construction projects in Oil and Gas industry based on Turn Key and contracting basis in full compliance with international safety, quality codes and standards.
                </div><br />
                <div className="text3">
                    SAMCO services combine best practices, environmentally sound operations, innovative technologies, and high quality support focused at helping our customers increase productivity and efficiency.
                </div><br />
            </Col>

            {servicesData.map((service, index) => (
                <Row key={index} className={`justify-content-center serv-sec ${service.reverse ? 'flex-row-reverse' : ''}`}>
                    {/* قسم الصور */}
                    <Col lg={5} md={6} sm={8}>
                        <ImageGallery images={service.images} />
                    </Col>

                    {/* قسم النصوص */}
                    <Col lg={7} md={6} sm={12}>
                        <div className="contain">
                            <div className="text1">{service.title}</div>
                            {service.description && (
                                <div className="text2">{service.description}</div>
                            )}
                        </div>
                    </Col>
                    <hr className="h-r" />
                </Row>
            ))}
        </Container>
    );
};
export default Services