import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Papa from 'papaparse'
import { useCSVReader } from 'react-papaparse';

import './osp.css';

class OSP extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inPerson: [],
            virtual: []
        };

        this.getInPerson = this.getInPerson.bind(this);
        this.getVirtual = this.getVirtual.bind(this);
        this.getCSVData();
    }

    fetchCSVData(url) {
        return fetch(url).then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function(result) {
                return decoder.decode(result.value);
            });
        })
    }

    getInPerson(result) {
        this.setState({inPerson: result.data})
    }

    getVirtual(result) {
        this.setState({virtual: result.data})
    }

    async getCSVData() {
        let inPersonData = await this.fetchCSVData('osp_inperson.csv');

        Papa.parse(inPersonData, {
            complete: this.getInPerson
        });

        let virtualData = await this.fetchCSVData('osp_virtual.csv');

        Papa.parse(virtualData, {
            complete: this.getVirtual
        });

    }

    componentDidMount() {
        console.log(this.state);
    }
    
    
    render() {
        return (
            <div className="osp">
                <OSPWrapper class="osp_itinerary_wrapper">
                    <OSPHeading name="osp itinerary"/>
                    <div className = "itinerary_image_container">
                        <img 
                            src="/OSP_itinerary_1.png"  
                            width="50%" 
                            style={{marginLeft: 'auto', marginRight: 'auto'}}
                        />
                        <img 
                            src="/OSP_itinerary_2.png"  
                            width="50%" 
                            style={{marginLeft: 'auto', marginRight: 'auto'}}
                        />
                        <br/><br/>
                            <img 
                            src="/OSP_itinerary_3.png"  
                            width="50%" 
                            style={{marginLeft: 'auto', marginRight: 'auto'}}
                        />
                            <img 
                            src="/OSP_virtual_itinerary.png"  
                            width="50%" 
                            style={{marginLeft: 'auto', marginRight: 'auto'}}
                        />
                    </div>
                </OSPWrapper>
                <OSPCoordWrapper>
                    <div className="group_photo">
                        <img 
                            src="/images/prospectives/Group_Photo_I.jpg" 
                            alt="Group Photo" 
                            width="75%" 
                            style={{border: '5px solid white', marginLeft: 'auto', marginRight: 'auto'}}
                        />
                        <br/><br/>
                    </div>
                    <OSPCoord
                        name="Haley Dablo"
                        year="3rd year/2nd year transfer"
                        major="Nursing"
                        img="Haley.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hi everyone! My name is Haley, and I’m one of your OSP coords this year :) I am a third-year nursing major/2nd-year transfer at UCLA, and I’m from the San Fernando Valley! 
                        <br/><br/>
                        A lot of my time goes into school and clinicals, but outside of that I really value spaces where I can connect with people and just be myself. I love anything that gets me out of the house, especially matcha runs and cafe hopping around LA, shopping, and trying new food spots. When I’m not busy, I’m probably at the beach or just hanging out with friends and unwinding on IG reels. 
                        <br/><br/>
                        On campus, I’m involved in a mix of different student spaces, so I’m usually bouncing between different places and meeting all kinds of people. I’m so excited to meet you all and get to know everyone this year :)

                    </OSPCoord>
                    <OSPCoord
                        name="Kevin Jiang"
                        year="2nd year"
                        major="Statistics and Data Science"
                        img="Kevin.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hello everyone! My name is Kevin Jiang, and I’m super excited to be one of the OSP Coords introducing you to UCLA. I’m a second year Statistics and Data Science student, and I’m from Fremont in the Bay Area. Outside of academics (and the relentless hunt for internships and hackathons), I enjoy cooking new recipes, creating puzzles of questionable difficulty, and destroying my fingers in rhythm games. RSS is an organization filled to the brim with exciting experiences and fresh perspectives from peers of all years, so I can’t wait to meet you all and show you what we have to offer! :) 

                    </OSPCoord>
                    <OSPCoord
                        name="Chris Jimenez"
                        year="1st year"
                        major="Art"
                        img="Chris.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hi all! My name is Chris Jimenez, and I am a first year art major from San Diego! I’ve had so much fun organizing OSP and I’m happy to be one of the coords this year! 
                        <br/><br/>
                        Outside of RSS, I’m very active in art and cultural spaces on campus and am currently a working graphic designer! I love playing video games, watching reels, eating, and hanging out with friends! You can often find me in the studio for hours, eating at Epicuria, or hanging out at the sunset learning center! 
                        <br/><br/>
                        I’m so excited to finally meet all of you! Congrats on your acceptance into UCLA and the Regents Scholarship!
                    </OSPCoord>
                    <OSPCoord
                        name="Jonathan Luna"
                        year="1st year"
                        major="Human Biology & Society"
                        img="Jonathan.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hi everyone! My name is Jonathan Luna and I am looking forward to being one of your OSP coords. I’m a first-year Human Biology and Society student from Koreatown in Los Angeles. I enjoy listening to music, playing my guitar, skateboarding around in the city, and creating passion projects. RSS is an amazing community and I’m excited to show you what this community has to offer.
                    </OSPCoord>
                    <OSPCoord
                        name="Camila Rocha"
                        year="1st year"
                        major="Sociology and Education & Social Transformation"
                        img="Camila.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Welcome new Bruins! My name is Camila Rocha, and I am honored to be one of your OSP coords for this year! I am a first-year student from Riverside, CA double majoring in Sociology and Education & Social Transformation. I am currently pursuing a career in high school/college counseling—but I’m also passionate about aviation and aspire to become an airline pilot later on! 
                        <br/><br/>
                        Beyond RSS, I work as a Resident Assistant (RA) and New Student Advisor (NSA). I am also involved in a variety of on-campus organizations like Bruin Initiative, Compas, Matriculate, Project Literacy, Unicamp, BruinHope, USAC Academic Affairs Commission, and Bruin Aviation. For fun, I enjoy exploring new hiking trails, baking, drawing, gardening, and making crafts to decorate my dorm!  
                        <br/><br/>
                        I am beyond excited to meet and introduce you all to the UCLA and RSS community!
                    </OSPCoord>
                    <OSPCoord
                        name="Isaac Wang"
                        year="1st year"
                        major="Physiological Sciences"
                        img="Isaac.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hello Prospies! My name is Isaac Wang and I am a first year Physiological Sciences major from San Francisco, California. It’s my greatest pleasure to be able to serve as one of your OSP Coords this year.
                        <br/><br/>
                        In my free time, I love going to the gym, playing the piano, and volunteering to help all different kinds of people; especially in the children's ministry at my church. I am also in the process of joining a research lab centered around muscular dystrophy, which I am extremely excited about. Although I am aware that I don’t have a broad range of interests, I am very passionate and dedicated to the things that I involve myself in, so feel free to ask me any questions regarding my hobbies.
                        <br/><br/>
                        Congratulations on your acceptance and Regents’ Scholarship, and I cannot wait to meet you at OSP!
                    </OSPCoord>
                </OSPCoordWrapper>
            </div>
        )
    }
}

function OSPWrapper(props) {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    )
}

function OSPMountains(props) {
    return (
        <div className="osp_mountains">
            <img src={`/images/prospectives/${props.src}`} className="osp_mountains_img" alt="Mountains" />
        </div>
    )
}

function OSPHeading(props) {
    return (
        <div className="osp_heading">
            <div className="osp_heading_text">{props.name}</div>
            <hr className="osp_heading_line" />
        </div>
    )
}

function OSPContentWrapper(props) {
    return (
        <div className="osp_content_wrapper">
            <div className="osp_content_image_wrapper"/>
            <div className="osp_content">
                {props.children}
            </div>
        </div>
    )
}

function OSPContentDay(props) {
    return (
        <div className="osp_content_day_wrapper" id={props.id}>
            <div className="osp_content_label">{props.label}</div>
            <div className="osp_content_itinerary_wrapper">
                {props.children}
            </div>
        </div>
    )
}

function OSPEvent(props) {
    return (
        <div className="osp_event_wrapper">
            <div className="osp_event_time">{props.time}</div>            
            <div className="osp_event_desc">
                <div className="osp_event_desc_heading">
                    {props.label}
                </div>
                {props.location !== undefined &&
                    <div className="osp_event_location">
                        {props.location}
                    </div>
                }
                <div className="osp_event_desc_desc">
                    {props.desc}
                </div>
            </div>
        </div>
    )
}

function OSPCoordWrapper(props) {
    return (
        <div className="osp_coord_wrapper">
            <div className="osp_coord_header">meet your coordinators!</div>
            <div className="osp_coord_flexbox">
                {props.children}
            </div>
        </div>
    )
}

function OSPCoord(props) {
    const halign = props.halign == null ? "0%" : props.halign;
    const valign = props.valign == null ? "0%" : props.valign;
    const size = props.size == null ? "cover" : props.size;
    const imgStyle = {
        backgroundImage: `url(/images/prospectives/osp_headshots/${props.img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${halign} ${valign}`,
        backgroundSize: size
    }
    return (
        <div className="osp_profile">
            <div className="osp_profile_img" style={imgStyle} />
            <div className="osp_profile_name">{props.name}</div>
            <div className="osp_profile_year">{props.year}</div>
            <div className="osp_profile_major">{props.major}</div>
            <div className="osp_profile_desc">{props.children}</div>
        </div>
    )
}

export default OSP;
