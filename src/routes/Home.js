import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {TextPanel, ImageTextPanel} from '../util/TextPanel';
import {BenefitDescription, BenefitWrapper} from '../util/BenefitDescription';

import './home.css';

class Home extends Component {
    render() {
        return (
            <RSSPage className="home">
                <Banner 
                    text="we are rss" 
                    subtext="regents scholar society at ucla" 
                    // video="true"
                    bgr="/images/banners/royce-sideview.jpg"
                    darkness="0.2"
                    valign="70%"
                />

                <ImageTextPanel 
                    heading="about us"
                    image="/images/banners/f21-dockweiler.jpg"
                    align="left"
                >
                    The Regents Scholar Society is composed of students with 
                    different identities, interests, and passions. Whether 
                    north campus or south campus, pre-med or business, scientists 
                    or artists, the society transcends these divisions through 
                    our shared commitment to scholarship, leadership, and service.
                    <p/>
                    We strive to support our members and the local community
                    through our various internal and external programs, including
                    service events, leadership opportunities, and the Los Angeles
                    Mentorship Program. We frequently host academic and social
                    events for our members to make friends, bond with our community, 
                    and thrive.
                    <p/>
                    Each Regents Scholar is awarded amazing perks: a $2000 scholarship,
                    priority course enrollment for up to 10 units, four years of
                    housing, mentorship from peers, faculty, and alumni, professional
                    events, access to our test bank, and much more! 
                </ImageTextPanel>

                <TextPanel heading="what we offer" id="what-we-offer-panel">
                    We want our Regents Scholars to grow, to succeed, and to thrive. That's why we provide
                    the following opportunities:
                    <BenefitWrapper>
                        <BenefitDescription
                            smallheading="mentorship &amp; families"
                            desc="All freshmen are able to match with a peer mentor and join a mentorship family. Your
                                mentor can guide you through choosing classes, joining student organizations, and any
                                advice you need. Your mentorship family is a group of RSSers you will become close friends with!"
                            bgr="family.png"
                        />
                        <BenefitDescription
                            smallheading="academic resources"
                            desc="We offer a variety of different educational resources for our members to take advantage of!
                                Whether it be resume reviews, information sessions, workshops, our test bank, or course planning 
                                events - we aim to ensure that each RSS member has the resources they need to succeed."
                            bgr="closedbook.png"
                        />
                        <BenefitDescription
                            smallheading="leadership opportunities"
                            desc="Through our committees, you can engage with the society, develop leadership skills, 
                                and utilize all of our resources! Applications open every fall quarter."
                            bgr="handshake.png"
                        />
                    </BenefitWrapper>
                </TextPanel>

                <TextPanel heading="the three pillars" id="three_pillars_panel">
                    <BenefitWrapper>
                            <BenefitDescription
                                smallheading="scholarship"
                                desc="Members of the Regents Scholar Society exemplify academic excellence, 
                                    both in and out of the classroom."
                                bgr="scholarship.png"
                            />
                            <BenefitDescription
                                smallheading="service"
                                desc="The Regents Scholar Society dedicates itself to improving the local community. 
                                    We participate in beach clean-ups, tutoring through the Los Angeles Mentorship Program, 
                                    and outreach."
                                bgr="service2.png"
                            />
                            <BenefitDescription
                                smallheading="leadership"
                                desc="Members of the Regents Scholar Society work as driven leaders, both within campus 
                                    organizations and in the local, state, and national community."
                                bgr="leadership2.png"
                            />
                        </BenefitWrapper>
                    </TextPanel>

                    <TextPanel heading="sponsors" id="sponsors_panel">
                        <div className="sponsor-wrapper">
                            <div className="sponsor-div" id="blueprint-div">
                                <img className="sponsor-img" src="/images/sponsors/blueprint.png" alt="blueprint"/>
                            </div>
                            <div className="sponsor-div" id="nextstep-div">
                                <img className="sponsor-img" src="/images/sponsors/nextstep.png" alt="nextstep"/>
                            </div>
                            <div className="sponsor-div" id="kaplan-div">
                                <img className="sponsor-img" src="/images/sponsors/kaplan.png" alt="kaplan"/>
                            </div>
                        </div>
                    </TextPanel>

            </RSSPage>
        )
    }
}

export default Home;