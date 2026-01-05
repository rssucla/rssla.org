/*
import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {ImageTextPanel} from '../util/TextPanel';

import './programs.css';

class Programs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longestPanelHeight: 0
        }
        this.updatePanelHeight = this.updatePanelHeight.bind(this);
    }

    componentDidMount() {
        this.updatePanelHeight();
        window.addEventListener('resize', this.updatePanelHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePanelHeight);
    }

    updatePanelHeight() {
        if (window.innerWidth > 840) {
            this.setState({ 
                longestPanelHeight: window.getComputedStyle(document.getElementById("programs-longest-panel")).height });
        } else {
            this.setState({longestPanelHeight: null});
        }
    }

    render() {
        return (
            <RSSPage className="programs">
                <Banner 
                    text="programs"
                    bgr="/images/banners/powell-bottom-up.jpg"
                    darkness="0.2"
                    valign="45%"
                />

                <ImageTextPanel 
                    heading="service"
                    image="/images/images/2018_Beach_Cleanup.jpg"
                    align="left"
                    height={this.state.longestPanelHeight}
                >
                    From partnerships with Heal the Bay to various service projects 
                    chosen by our community service committee, RSS hosts periodic 
                    volunteer opportunities throughout the year! 
                    Stay tuned via our Newsletter and Discord to get involved!
                </ImageTextPanel>
                <ImageTextPanel 
                    heading="mentorship"
                    image="/images/images/2018_MOH-3.JPG"
                    align="right"
                    height={this.state.longestPanelHeight}
                    id="programs-longest-panel"
                >
                    Our peer mentors are upperclassmen who have recently been in the shoes of
                    our new RSSers and want to give back by helping them learn the ropes of UCLA!
                    <p/>
                    Our alumni mentors are graduated RSSers who have broken through their industries
                    and can provide professional advice to aspiring professionals.
                    <p/>
                    Finally, our faculty mentorship program pairs RSSers and faculty members to 
                    cultivate relationships and help members learn more about their passions and 
                    fields of study.
                </ImageTextPanel>

                <ImageTextPanel 
                    heading="s.p.i.e.l."
                    image="/images/images/2018_spiel.png"
                    align="left"
                >
                    SPIEL stands for Students Presenting, Innovating, Entertaining 
                    and Learning. Inspired by TED Talks, this campus-wide speaker 
                    event is put on by students, for students. The aim of SPIEL is to 
                    give students from all backgrounds the chance to talk about something 
                    that is not only important to the presenters themselves, but is also 
                    often important to the greater UCLA and global community.
                    <p/>
                    In the past, SPIEL presenters have addressed a variety of topics, 
                    ranging from mental health to ground-breaking student research.
                </ImageTextPanel>
// {/* 
//                 <ImageTextPanel 
//                     heading="l.a.m.p."
//                     image="/images/images/lamp.jpg"
//                     align="right"
//                     height={this.state.longestPanelHeight}
//                 >       
//                     The Los Angeles Mentorship Program (LAMP) provides UCLA
//                     students the opportunity to give back to the local community
//                     through tutoring at University High School. This program aims
//                     to provide resources to underserved youth - giving them
//                     access to SAT and ACT preparation along with workshops regarding
//                     financial literacy, college applications, and more.
//                 </ImageTextPanel> * /}
            
                <ImageTextPanel 
                    heading="other events"
                    image="/images/images/2020_broomball2.jpg"
                    align="right"
                    height={this.state.longestPanelHeight}
                >
                    Throughout the school year, we host numerous events for our Regents Scholars,
                    both social and professional. In the past, we have held resume reviews,
                    interview workshops, Dinner with the Dean, company tours, and more! Our social 
                    events include frequent dorm dinners and game nights, as well as our yearly
                    traditions like broomball, kayaking, Friendsgiving, retreat, and banquet.
                </ImageTextPanel>
            </RSSPage>
        )
    }
}

export default Programs;
*/

import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {ImageTextPanel} from '../util/TextPanel';

import './programs.css';

class Programs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longestPanelHeight: 0
        }
        this.updatePanelHeight = this.updatePanelHeight.bind(this);
    }

    componentDidMount() {
        this.updatePanelHeight();
        window.addEventListener('resize', this.updatePanelHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePanelHeight);
    }

    updatePanelHeight() {
        if (window.innerWidth > 840) {
            this.setState({ 
                longestPanelHeight: window.getComputedStyle(document.getElementById("programs-longest-panel")).height });
        } else {
            this.setState({longestPanelHeight: null});
        }
    }

    render() {
        return (
            <RSSPage className="programs">
                <Banner 
                    text="programs"
                    bgr="/images/banners/powell-bottom-up.jpg"
                    darkness="0.2"
                    valign="45%"
                />

                <ImageTextPanel 
                    heading="mentorship"
                    image="/images/images/2018_MOH-3.JPG"
                    align="left"
                    height={this.state.longestPanelHeight}
                    id="programs-longest-panel"
                >
                    We match Regents Scholars with faculty, RSS alumni, or RSS peers whose profiles best match a Scholar’s academic and career interests. Your mentor can guide you through choosing classes, joining student organizations, finding job and internship opportunities, building connections, and giving advice wherever you need.
                    <ul>
                        <li><strong>Faculty Mentorship:</strong> RSS maintains a roster of faculty representing dozens of departments from which mentors are selected each year; some faculty have been mentors for over twenty years, and we routinely invite new faculty to join to meet the needs of our increasingly diverse student membership. Regents Scholars meet with their faculty mentors 1-on-1 at least once per quarter, and many students continue meeting with their mentors throughout the entirety of their undergraduate years. Faculty mentorship is an opportunity for young students to obtain advice and information on their academic/career goals while making connections with prominent, well-respected figures within their field of study.</li>
                        <li><strong>Alumni Mentorship:</strong> Regents Scholars are connected with RSS alumni representing a wide range of career paths and life stories. Our alumni network spans continents and includes those working industry jobs, in graduate school, owning businesses, and more. Undergraduate Regents Scholars are able to obtain advice and build their network from our diverse pool of alumni as they develop their careers.</li>
                        <li><strong>Peer Mentorship:</strong> Underclassmen Regents Scholars are paired with an upperclassman mentor to help with navigating their undergraduate experience. Peer mentors break down course offerings, pre-professional requirements, major paths, clubs/organizations, and ways to maximize the undergraduate experience. Peer mentor relationships are typically less formal; meetings often take place over meals in the dining halls or study hangouts, a more comfortable avenue for mentorship and friendship for many first year students.</li>
                    </ul>
                </ImageTextPanel>

                <ImageTextPanel 
                    heading="academic resources"
                    image="/images/images/2018_spiel.png"
                    align="right"
                    height={this.state.longestPanelHeight}
                >
                    <div style={{ textAlign: "left" }}>
                        The Regents Scholar Society hosts a variety of professional development events and programs to advance members’ professional and academic interests/goals. Events and programs that are hosted annually include:
                        <ul>
                            <li><strong>Faculty Mixers</strong> to network with current faculty mentors</li>
                            <li><strong>Alumni Dinners</strong> to network with RSS alumni, hosted at the UCLA dining halls</li>
                            <li><strong>Graduate Student Meals</strong> to discuss graduate school opportunities informally with current graduate students</li>
                            <li><strong>Resume Review</strong> to receive resume feedback from trusted alumni.</li>
                            <li><strong>Professional headshots</strong> and organized attendance at <strong>career fairs</strong> to increase access to career readiness.</li>
                        </ul>
                        Academic workshops hosted by the Society aim to guide Regents Scholars as they enter UCLA’s fast-paced environment and/or prepare for opportunities outside of the classroom. These workshops focus on skills and materials necessary to thrive in college that are never explicitly taught. Workshops are open to all majors and promote a culture of equity by disseminating knowledge to all our members. Some workshops are catered toward first year students while others target all members of RSS. Workshops include:
                        <ul>
                            <li><strong>Resume/CV, Club Apps, and Scholarships</strong></li>
                            <li><strong>Cold Emailing</strong></li>
                            <li><strong>Class Registration</strong></li>
                            <li><strong>Summer REUs and Internship</strong></li>
                            <li><strong>Interviews</strong> — helps Regents Scholars practice interviewing skills.</li>
                        </ul>
                    </div>
                </ImageTextPanel>

                <ImageTextPanel 
                    heading="community service"
                    image="/images/images/2025_Food_Bank.jpg"
                    align="left"
                    height={this.state.longestPanelHeight}
                >
                    Community service is a core pillar of the Regents Scholar Society. Our service events connect Regent Scholars with the greater Los Angeles community, turning our values into visible impact. Our current community service initiatives include:
                    <ul>
                        <li><strong>Quarterly beach cleanups</strong> organized along Dockweiler beach, where RSSers pick up waste and advocate for responsible stewardship.</li>
                        <li>A Thanksgiving <strong>food drive</strong> hosted near the holidays to collect and sort food for local pantries.</li>
                        <li>Partnership with <strong>Midnight Missions</strong> to distribute hundreds of meals to the LA homeless population.</li>
                        <li>Participation in the <strong>Reading to Kids</strong> program serving children in the greater LA area.</li>
                        <li>Participation in <strong>UCLA Volunteer Day</strong> as an organized group targeting underfilled volunteer sites</li>
                    </ul>
                    RSS regularly pilots new initiatives based on community needs and member interests—for example, after the 2025 LA fires, the Society ran a fire relief bake sale to raise funds for affected families and first responders. Our dedicated Community Service director is responsible for developing 3-4 meaningful and impactful service opportunities each quarter.
                </ImageTextPanel>

                <ImageTextPanel 
                    heading="activities"
                    image="/images/images/2025_Kayaking.jpg"
                    align="right"
                    height={this.state.longestPanelHeight}
                >
                    <div style={{ textAlign: "left" }}>
                        The Regents Scholar Society’s weekly social activities are the driving force of the unique, close-knit RSS community. We build RSS connections through intentional, thoughtful events—our activity calendar includes both <strong>flagship traditions</strong> and <strong>small-scale social events</strong> to cater to both new and returning members. Our most memorable tradition is the annual 3-day 2-night <strong>Winter Retreat</strong> focused on building community and connection with fellow scholars, a beloved event which typically includes nature hikes, smores by the fire, and more. Other annual traditions include:
                        <ul>
                            <li>Friendsgiving</li>
                            <li>Fall Bonfire at Dockweiler beach</li>
                            <li>Broomball</li>
                            <li>Zombie Talks (inviting faculty to defend their department in an apocalypse).</li>
                        </ul>
                        RSS also hosts <strong>weekly dinners</strong>, <strong>study nights</strong>, and other <strong>small-scale events</strong> designed to promote community. RSS events are inviting and encouraging whilst allowing students to escape their comfort zone and develop meaningful connections with scholars of all years and backgrounds.
                    </div>
                </ImageTextPanel>
            </RSSPage>
        )
    }
}

export default Programs;