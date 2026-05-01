import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import p99 from '../images/p99.jpg';
// import p3 from '../images/p3.jpg';
// import p4 from '../images/p4.jpg';
// import p5 from '../images/p5.jpg';
// import p7 from '../images/p7.jpg';
// import p8 from '../images/p8.jpg';
// import p9 from '../images/p9.jpg';
// import p10 from '../images/p10.jpg';
// import p13 from '../images/p13.png';
// import p16 from '../images/p16.jpg';
// import p19 from '../images/p19.jpg';
// import p21 from '../images/p21.jpg';
// import p23 from '../images/p23.jpg';

import lg1 from '../images/lg1.png';
import lg2 from '../images/lg2.png';
import lg3 from '../images/lg3.png';
import lg4 from '../images/lg4.png';
import lg5 from '../images/lg5.png';
import lg6 from '../images/lg6.png';
import lg7 from '../images/lg7.png';
import lg8 from '../images/lg8.png';
import lg9 from '../images/lg9.png';
import lg10 from '../images/lg10.png';
import lg11 from '../images/lg11.png';
import lg12 from '../images/lg12.png';
import lg13 from '../images/lg13.png';
import lg14 from '../images/lg14.png';
import lg15 from '../images/lg15.png';
import lg16 from '../images/lg16.png';
import lg17 from '../images/lg17.png';

import p1_1 from '../images/pr_1_1.jpg';
import p1_2 from '../images/pr_1_2.png';
import p1_3 from '../images/pr_1_3.png';
import p1_4 from '../images/pr_1_4.jpg';
import p1_5 from '../images/pr_1_5.jpg';
import p1_6 from '../images/pr_1_6.jpg';
import p1_7 from '../images/pr_1_7.jpg';

import p2_1 from '../images/pr_2_1.png';
import p2_2 from '../images/pr_2_2.png';
import p2_3 from '../images/pr_2_3.jpg';
import p2_4 from '../images/pr_2_4.jpg';

import p3_1 from '../images/pr_3_1.jpg';
import p3_2 from '../images/pr_3_2.jpg';
import p3_3 from '../images/pr_3_3.jpg';
import p3_4 from '../images/pr_3_4.jpg';


import p4_1 from '../images/pr_4_1.png';
import p4_2 from '../images/pr_4_2.png';
import p4_3 from '../images/pr_4_3.jpg';
import p4_4 from '../images/pr_4_4.jpg';

import p5_1 from '../images/pr_5_1.jpg';
import p5_2 from '../images/pr_5_2.jpg';
import p5_3 from '../images/pr_5_3.png';
import p5_4 from '../images/pr_5_4.jpg';

import p6_1 from '../images/pr_6_1.jpg';
import p6_2 from '../images/pr_6_2.jpg';
import p6_3 from '../images/pr_6_3.jpg';
import p6_4 from '../images/pr_6_4.png';

import p7_1 from '../images/pr_7_1.png';
import p7_2 from '../images/pr_7_2.jpg';
import p7_3 from '../images/pr_7_3.jpg';
import p7_4 from '../images/pr_7_4.png';

import p8_1 from '../images/pr_8_1.png';
import p8_2 from '../images/pr_8_2.jpg';
import p8_3 from '../images/pr_8_3.png';

import p9_1 from '../images/pr_9_1.jpg';
import p9_2 from '../images/pr_9_2.png';
import p9_3 from '../images/pr_9_3.png';

import p10_1 from '../images/pr_10_1.jpg';
import p10_2 from '../images/pr_10_2.jpg';
import p10_3 from '../images/pr_10_3.jpg';
import p10_4 from '../images/pr_10_4.jpg';

import p11_1 from '../images/pr_11_1.jpg';
import p11_2 from '../images/pr_11_2.jpg';
import p11_3 from '../images/pr_11_3.jpg';
import p11_4 from '../images/pr_11_4.jpg';


import ImageGallery from '../components/imageGallery'

const Projects = () => {

    const projectsData = [
        {
            title: "L006T-109 construction of six storage tanks 15000 m3 with the piping nets ",
            location: "Lanaz refinery- Iraq ",
            client: "Lanaz company",
            date: "On going project",
            images: [
                p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7
            ]

        },
        {
            title: " construction of four Naphtha tanks (15000) m3 capacity including piping nets connection",
            location: " Lanaz refinery- Kurdistan- Iraq",
            client: " Lanaz company - Talay Tech ",
            date: "2023",
            images: [
                p2_1, p2_2, p2_3, p2_4
            ]
        },
        {
            title: "construction of two storage tanks (5000) m3 including piping nets connection",
            location: "Qayyarah field- north of Iraq ",
            client: "NOC- Sonangol ",
            date: "2021",
            images: [
                p3_1, p3_2, p3_3, p3_4
            ]
        },
        {
            title: " boilers economizer maintenance and development ",
            location: "Banias power station ",
            client: " ministry of power",
            date: "2020",
            images: [
                p4_1, p4_2, p4_3, p4_4
            ]
        },
        {
            title: "24” crude oil line from NDS to SDS (12) km ",
            location: "Qayyarah field – north of Iraq ",
            client: "NOC- Sonangol",
            date: "2019 ",
            images: [
                p5_1, p5_2, p5_3, p5_4
            ]
        },
        {
            title: " ADAC- Abu Dhabi new airport, mid field terminal building project. Construction of chilled water / firefighting system piping and steel structure ",
            location: "UAE. Abu Dhabi Airport",
            client: "ADAC - PCEGV, EFFICO - NAFCO ",
            date: "2017",
            images: [
                p6_1, p6_2, p6_3, p6_4
            ]
        },
        {
            title: "MLE gas plant piping construction. Construction of piping work at flare area-launcher and receivers- spherical tanks",
            location: "Wadi Al Tah- MLE Gas plant – south of Algeria ",
            client: "Sonatrach- ENI-  ",
            date: "2011 ",
            images: [
                p7_1, p7_2, p7_3, p7_4
            ]
        },
        {
            title: " Teshreen/ Ouda field development ",
            location: "Teshreen/ ouda Field – north east of Syria.",
            client: "Doblin- AFPC ",
            date: "2009",
            images: [
                p8_1, p8_2, p8_3
            ]
        },
        {
            title: " maintenance of floating roof naphtha tanks in Homs refinery ",
            location: "  Homs Refinery- Syria ",
            client: "Homs refinery company ",
            date: "2018",
            images: [
                p9_1, p9_2, p9_3
            ]
        },
        {
            title: " Ohanet Gas tweel Gas line (400) km.",
            location: "Elezeh state- south Algeria.",
            client: "Sonatrach- TMCA ",
            date: "2008",
            images: [
                p10_1, p10_2, p10_3, p10_4
            ]
        },
        {
            title: "water corrugated line (48)” from Quiq river to Aleppo industrial city ",
            location: "north west of Syria- Aleppo ",
            client: "ministry of water resources – Almateen co",
            date: "2007",
            images: [
                p11_1, p11_2, p11_3, p11_4
            ]
        }
    ]

    return (
        <Container>
            <Row>
                <Col lg={12} xs={12}>
                    <div class="slider">
                        <div class="slide-track">
                            <div class="slide">
                                <img className="img-slider" src={lg1} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg2} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg3} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg4} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg5} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg6} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg7} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg8} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg9} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg10} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg11} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg12} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg13} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg14} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg15} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg16} />
                            </div>
                            <div class="slide">
                                <img className="img-slider" src={lg17} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {
                    projectsData.map((item) => {
                        return (
                            <Col className="center" lg={6} md={6} sm={12} xs={12}>
                                <div className='gr'>
                                    {/* <img className="card-img3" src={} /> */}
                                    <ImageGallery images={item.images} />
                                    <div className="project-text" >
                                        <div className="text1"> {item.title} </div>
                                        <div className="text2"> Client : <span className="text3" >{item.client}</span>  </div>
                                        <div className="text2"> Location : <span className="text3" > {item.location}</span> </div>
                                        <div className="text2">  Date : <span className="text3" > ( {item.date} ) </span> </div>


                                    </div>
                                </div>
                            </Col>
                        )
                    })

                }


                {/* <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p23} />
                        <div className="project-text" >
                            <div className="text1"> Baniyas power plant:</div>
                            <div className="text2"> Client:  ministry of electricity </div>
                            <div className="text2"> (2021-2023) </div>

                            <div className="text3" >
                                boilers economizer’s maintenance including
                                Cut the existing steel structure& insulation and tube panel
                                Install the new tube panel
                                Reinstall the still structure and insulation<br />


                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p21} />
                        <div className="project-text" >
                            <div className="text1"> Homs refinery: maintenance of (four) kerosene tanks including </div>

                            <div className="text2">client: ministry of petroleum </div>
                            <div className="text2"> (2019-2021) </div>
                            <div className="text3" >
                                Maintenance for the floating roof
                                Install a new roof gasket
                                Maintenance of side walls
                                Re Painting and sand blasting
                                Testing <br />


                            </div>
                        </div>
                    </div>


                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p19} />
                        <div className="project-text" >
                            <div className="text1">  Export pipe line </div>
                            <div className="text2"> client: DNO </div>
                            <div className="text2"> location: Kurdistan, Iraq  </div>
                            <div className="text2"> (2017-2019) </div>
                            <div className="text3" >
                                two export pipe line (10” &12”) from PSK CPF to FSK CPF (22) km
                                including five many folds.
                                with: Salp middle east company
                            </div>
                        </div>
                    </div>

                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p16} />
                        <div className="project-text" >
                            <div className="text1">ABU DHABI MID FIELD TERMINAL</div>
                            <div className="text2"> client: ADAC & PCEJ.  </div>
                            <div className="text2"> (2014-2016) </div>
                            <div className="text3" >
                                chilled water system including piping and steel structure
                            </div>
                        </div>
                    </div>

                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p13} />
                        <div className="project-text" >
                            <div className="text1">MLE manzel lejmet gas</div>
                            <div className="text2"> client: SAIPEM & OGEC & SONATRACH & ALGERIA  </div>
                            <div className="text2"> (2011-2013) </div>
                            <div className="text3" >
                                MLE manzel lejmet gas plant with gathering station
                            </div>
                        </div>
                    </div>

                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p10} />
                        <div className="project-text" >
                            <div className="text1"> ammunia tank</div>
                            <div className="text2"> client: ORASCOM , ALGERIA  </div>
                            <div className="text2"> (2009-2010) </div>
                            <div className="text3" >
                                ammunia tank of arezew industrial area
                            </div>
                        </div>
                    </div>

                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p9} />
                        <div className="project-text" >
                            <div className="text1">GAS  LINE 16</div>
                            <div className="text2"> client: SERT OIL AND GAS CO, LYBIA  </div>
                            <div className="text2"> (2008-2009) </div>
                            <div className="text3" >
                                gas line from Valve station 15 of south
                                north main line to Mesrata power station including valve stations


                            </div>
                        </div>
                    </div>

                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p8} />
                        <div className="project-text" >
                            <div className="text1">WATER LINE </div>
                            <div className="text2"> client: SYRIAN COMPANY FOR  OIL TRANSPORTAION, SYRIA. </div>
                            <div className="text2"> (2007-2008) </div>
                            <div className="text3" >
                                water line from Karshock cpf to Alromailan main station including valve statin and 8"feeding line, with
                            </div>
                        </div>
                    </div>

                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p7} />
                        <div className="project-text" >
                            <div className="text1">development of water station</div>
                            <div className="text2"> client: SYRIAN COMPANY FOR PHOSPHAT, SYRIA .</div>
                            <div className="text2"> (2006-2007) </div>
                            <div className="text3" >
                                development of water station of east mines, including water tank, water shipping pump& water treatment station& 8"water line
                            </div>
                        </div>
                    </div>

                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p5} />
                        <div className="project-text" >
                            <div className="text1">OZ2 project</div>
                            <div className="text2"> client: KBR & SONATRACH</div>
                            <div className="text2"> (2004-2005) </div>
                            <div className="text3" >
                                fabrication and installation valve station & launcher and receivers of main stations. with
                            </div>
                        </div>
                    </div>

                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p4} />
                        <div className="project-text" >
                            <div className="text1">OHGT project</div>
                            <div className="text2"> client: TMCA ,SONATRACH, ALGERIA . </div>
                            <div className="text2"> (2003-2004) </div>
                            <div className="text3" >
                                gas line 16" from Ohanit to Gas tuil cpf, 400 km
                            </div>
                        </div>
                    </div>

                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p3} />
                        <div className="project-text" >
                            <div className="text1">ALTABIA gas plant</div>
                            <div className="text2"> client: Conoco & OGEC  </div>
                            <div className="text2"> (2002-2003) </div>
                            <div className="text3" >
                                ALTABIA gas plant LPG railway loading station , Syria .

                            </div>
                        </div>
                    </div>

                </Col>
                <Col className="center" lg={4} md={6} sm={10} xs={12}>
                    <div className='gr'>
                        <img className="card-img3" src={p99} />
                        <div className="project-text" >
                            <div className="text1">Flow lines</div>
                            <div className="text2"> client: DEZPC & OGEC </div>
                            <div className="text2"> (1999-2002) </div>
                            <div className="text3" >
                                well heads connection and inlet manifolds  of JAFRA area (CPF & gathering station) SYRIA
                            </div>
                        </div>
                    </div>

                </Col> */}
            </Row>
        </Container>
    )
}
export default Projects