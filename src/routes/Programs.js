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
{/* 
                <ImageTextPanel 
                    heading="l.a.m.p."
                    image="/images/images/lamp.jpg"
                    align="right"
                    height={this.state.longestPanelHeight}
                >       
                    The Los Angeles Mentorship Program (LAMP) provides UCLA
                    students the opportunity to give back to the local community
                    through tutoring at University High School. This program aims
                    to provide resources to underserved youth - giving them
                    access to SAT and ACT preparation along with workshops regarding
                    financial literacy, college applications, and more.
                </ImageTextPanel> */}
            
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