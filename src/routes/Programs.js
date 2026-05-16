import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {TextPanel} from '../util/TextPanel';

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
            const panel = document.getElementById("programs-longest-panel");
            if (panel) {
                this.setState({ 
                    longestPanelHeight: window.getComputedStyle(panel).height 
                });
            }
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

                <TextPanel 
                    heading="Mentorship"
                    align="left"
                >
                    We match Regents Scholars with faculty, RSS alumni, or RSS peers whose profiles best match a Scholar’s academic and career interests. Your mentor can guide you through choosing classes, joining student organizations, finding job and internship opportunities, building connections, and giving advice wherever you need.
    <p/>
                 <b>Faculty Mentorship:</b> RSS maintains a roster of faculty representing dozens of departments from which mentors are selected each year; some faculty have been mentors for over twenty years, and we routinely invite new faculty to join to meet the needs of our increasingly diverse student membership. Regents Scholars meet with their faculty mentors 1-on-1 at least once per quarter, and many students continue meeting with their mentors throughout the entirety of their undergraduate years. Faculty mentorship is an opportunity for young students to obtain advice and information on their academic/career goals while making connections with prominent, well-respected figures within their field of study. 
<p/>
<b>Alumni Mentorship:</b> Regents Scholars are connected with RSS alumni representing a wide range of career paths and life stories. Our alumni network spans continents and includes those working industry jobs, in graduate school, owning businesses, and more. Undergraduate Regents Scholars are able to obtain advice and build their network from our diverse pool of alumni as they develop their careers. 
    <p/>
 <b>Peer Mentorship:</b> Underclassmen Regents Scholars are paired with an upperclassman mentor to help with navigating their undergraduate experience. Peer mentors break down course offerings, pre-professional requirements, major paths, clubs/organizations, and ways to maximize the undergraduate experience. Peer mentor relationships are typically less formal; meetings often take place over meals in the dining halls or study hangouts, a more comfortable avenue for mentorship and friendship for many first year students.
    <p/>
                </TextPanel>
                <TextPanel 
                    heading="Academic Resources"
                    align="left"
                >
                    The Regents Scholar Society hosts a variety of professional development events and programs to advance members’ professional and academic interests/goals. Events and programs that are hosted annually include: 

                <p/>
                    <ul>
  <li><b>Faculty Mixers</b> to network with current faculty mentors</li>
  <li><b>Alumni Dinners</b> to network with RSS alumni, hosted at the UCLA dining halls </li>
  <li><b>Graduate Student Meals</b> to discuss graduate school opportunities informally with current graduate students </li>
                        <li><b>Resume Review</b> to receive resume feedback from trusted alumni</li>
                        <li><b>Professional Headshots</b> and organized attendance at <b>career fairs</b> to increase access to career readiness</li>
</ul>
    <p/>
                        Academic workshops hosted by the Society aim to guide Regents Scholars as they enter UCLA’s fast-paced environment and/or prepare for opportunities outside of the classroom. These workshops focus on skills and materials necessary to thrive in college that are never explicitly taught. Workshops are open to all majors and promote a culture of equity by disseminating knowledge to all our members. Some workshops are catered toward first year students while others target all members of RSS. Workshops include:
<p/>
    <ul>
    <li><b>Resume/CV, Club Apps, and Scholarships</b></li>
<li><b>Cold Emailing</b></li>
<li><b>Class Registration</b></li>
<li><b>Summer REUs and Internships</b></li>
<li><b>Interviews</b></li>
                        </ul>
                </TextPanel>

                        
                <TextPanel 
                    heading="Community Service"
                    align="left"
                >
                   Community service is a core pillar of the Regents Scholar Society. Our service events connect Regent Scholars with the greater Los Angeles community, turning our values into visible impact. Our current community service initiatives include:

                <p/>
                    <ul>
  <li><b>Quarterly beach cleanups</b> organized along Dockweiler beach, where RSSers pick up waste and advocate for responsible stewardship. </li>
  <li>A Thanksgiving <b>food drive</b> hosted near the holidays to collect and sort food for local pantries.</li>
  <li>Partnership with <b>Midnight Missions </b>to distribute hundreds of meals to the LA homeless population. </li>
                        <li>Participation in the <b>Reading to Kids</b> program serving children in the greater LA area.</li>
                        <li>Participation in <b>UCLA Volunteer Day</b> as an organized group targeting underfilled volunteer sites.</li>
</ul>
    <p/>
                        RSS regularly pilots new initiatives based on community needs and member interests—for example, after the 2025 LA fires, the Society ran a fire relief bake sale to raise funds for affected families and first responders. Our dedicated Community Service director is responsible for developing 3-4 meaningful and impactful service opportunities each quarter.
<p/>
                </TextPanel>
                       
                <TextPanel 
                    heading="Activities"
                    align="left"
                >
                   The Regents Scholar Society’s weekly social activities are the driving force of the unique, close-knit RSS community. We build RSS connections through intentional, thoughtful events—our activity calendar includes both <b>flagship traditions</b> and <b>small-scale social events</b> to cater to both new and returning members. Our most memorable tradition is the annual 3-day 2-night <b>Winter Retreat</b> focused on building community and connection with fellow scholars, a beloved event which typically includes nature hikes, smores by the fire, and more. Other annual traditions include:

                <p/>
                    <ul>
  <li>Friendsgiving</li>
  <li>Fall Bonfire at Dockweiler beach</li>
  <li>Broomball</li>
                        <li>Zombie Talks</li>
</ul>
    <p/>
                        RSS also hosts weekly dinners, study nights, and other smaller events designed to promote community. RSS events are inviting and encouraging whilst allowing students to escape their comfort zone and develop meaningful connections with scholars of all years and backgrounds.
<p/>
                </TextPanel>
            </RSSPage>
        )
    }
}

export default Programs;
