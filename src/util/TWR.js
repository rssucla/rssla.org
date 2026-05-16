import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Papa from 'papaparse'
import { useCSVReader } from 'react-papaparse';

import './twr.css';

class TWR extends Component {

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
            <div className="twr">
                <OSPWrapper class="osp_itinerary_wrapper">
                    <OSPHeading name="Transfer Welcome Reception (TWR) itinerary"/>
                    <div className = "itinerary_image_container">
                        <img 
                            src="/TWR_itinerary.png"  
                            width="75%" 
                            style={{marginLeft: 'auto', marginRight: 'auto'}}
                        />
                    </div>
                </OSPWrapper>
                <OSPCoordWrapper>
                    <div className="group_photo">
                        <img 
                            src="/images/prospectives/TWR_Main_Photo_1.jpg" 
                            alt="TWR Group Photo" 
                            width="48%" 
                            style={{border: '5px solid white', marginLeft: 'auto', marginRight: 'auto'}}
                        />
                        <img 
                            src="/images/prospectives/TWR_Main_Photo_2.jpg" 
                            alt="TWR Group Photo 2" 
                            width="48%" 
                            style={{border: '5px solid white', marginLeft: 'auto', marginRight: 'auto'}}
                        />
                        <br/><br/>
                    </div>
                    <OSPCoord
                        name="Carson Lee"
                        year="2nd year transfer"
                        major="Economics"
                        img="Carson.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hello transfers! My name is Carson Lee. I’m a 4th year Economics major from the Bay Area and I like pickle ball. I look forward to meeting you all! 
                       
                    </OSPCoord>
                    <OSPCoord
                        name="Cory Kanemoto"
                        year="1st year transfer"
                        major="Psychology"
                        img="Cory.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hello everyone! My name is Cory Kanemoto and I am thrilled to be part of your TWR experience. I am a Psychology major from the San Gabriel Valley. I am a first year transfer from Citrus Community College. 
                        <br/><br/>
                        Outside of RSS, I am a research assistant in a lab about first impressions. I am also a member of two groups for psychology students at UCLA: Psi Chi and The Undergraduate Psychology Society. Outside of UCLA, my hobbies include movies, video games, and drawing on occasion. 
                        <br/><br/>
                        I look forward to meeting all of you during TWR this year and helping you with a smooth transition into UCLA! Feel free to ask me specifics about the psychology major and the psychology programs on campus.


                    </OSPCoord>
                    <OSPCoord
                        name="Sophia Cortez"
                        year="2nd year transfer"
                        major="Communications"
                        img="Sophia.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hi everyone! My name is Sophia, and I’m a fourth-year, second-year transfer majoring in Communication. I’m a commuter student from Los Angeles, so I spend a lot of time on the 405. Outside of RSS, I enjoy reading at the beach and working toward my goal of reading 30 books a year, but that often comes with a sunburn. I’m passionate about entertainment, especially music and comedy. Some of my favorite memories at UCLA have been with RSS whether is was playing pickleball, getting burritos, or late night study sessions.

                    </OSPCoord>
                    <OSPCoord
                        name="Luke Chambers"
                        year="1st year transfer"
                        major="Anthropology and Geography"
                        img="Luke.jpg"
                        halign="45%"
                        valign="20%"
                    >
                       Hey everyone! My name is Luke and I am excited to have you be a part of TWR. I am a first year transfer from El Camino College double majoring in Anthropology and Geography.
                        <br/><br/>
                            At UCLA, I work at the Cotsen Graduate Institute of Archaeology in the Rock Art Archive, volunteer at the UCNRS Stunt Ranch in the Santa Monica Mountains, and assist in departmental geographical research. In terms of hobbies, I love to hike, travel, play volleyball, cook, off-road, and watch Saturday Night Live.
                        <br/><br/>
                            Congratulations on receiving your Regents Scholarship and I cannot wait for you to see what RSS has to offer.
                    </OSPCoord>
                    <OSPCoord
                        name="Madison Jongewaard"
                        year="2nd year transfer"
                        major="Political Science"
                        img="Madison.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hi all! My name is Madison, and I’m excited to be one of your TWR directors this year! I’m a fourth year/second year transfer studying Political Science. While originally from Westchester, CA, I’ve moved quite a bit around the South Bay Area and currently live in Long Beach. On campus, I write for the Bruin Political Review and work for the University Apartments mailroom. In my limited free time, I love to play pool/billiards, hike in the LA area, and hang out with my cats :) Super excited to meet you all this year, and especially excited to help host anyone interested in staying overnight! Looking forward to TWR :)!

                    </OSPCoord>
                    <OSPCoord
                        name="Elizabet Zarate"
                        year="1st year transfer"
                        major="Sociology"
                        img="Elizabet.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hello incoming transfers! My name is Elizabet Zarate and I am a 1st year transfer student majoring in Sociology. I am from San Diego, California. It is a pleasure to be able to serve on the Transfer Affairs Committee and welcome you to UCLA and the RSS community. Outside of RSS, I work as a Teaching Assistant for Grossmont College, the community college I transferred from.
                        <br/><br/>
                        Can’t wait to meet you and congratulations on vour acceptance to UCLA! Go Bruins!
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
            <div className="osp_coord_header">meet your TWR coordinators!</div>
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

export default TWR;
