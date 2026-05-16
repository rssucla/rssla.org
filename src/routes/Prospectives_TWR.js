import React, { Component } from 'react';

import content from './Content'
import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import OSP from '../util/OSP';
import TWR from '../util/TWR';
import {TextPanel} from '../util/TextPanel';
import {BenefitDescription, BenefitWrapper} from '../util/BenefitDescription';

import './prospectives_twr.css';

class Prospectives_TWR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        return (
            <RSSPage className="prospectives_twr">
                <Banner 
                    text="prospectives" 
                    bgr="/images/prospectives/osp_headshots/TWR_Background.jpg"
                    darkness="0.2"
                    valign="65%"
                />

                <ProspectivesIntro width={this.state.width} />
               
                 <TWR />

                <TextPanel heading="contact us!">
                    <div className="twr_contact_wrapper">
                        <div className="twr_contact_name">{content.CURRENT_TAD}</div>
                        <div className="twr_contact_email">
                            <a className="twr_contact_email_link" href="mailto:transfers@rssla.org">transfers@rssla.org</a>
                        </div>
                        {/*
                        <div className="osp_contact_name">Michelle Garabetian</div>
                        <div className="osp_contact_email">
                            <a className="osp_contact_email_link" href="mailto:transfers@rssla.org">transfers@rssla.org</a>
                        </div>
                        */}
                    </div>
                    <img className="twr_contact_img" src="/images/prospectives/contact_banner.png" alt="mountains"/>
                </TextPanel>
            </RSSPage>
        )
    }
}

/* transfer version */
class ProspectivesIntro extends Component {
    render() {
        if (this.props.width >= 900) {
            return this.renderLarge();
        } else {
            return this.renderSmall();
        }
    }

    renderLarge() {
        return (
            <React.Fragment>
                <TextPanel heading="we are rss" id="we-are-rss-panel">
                    <div className="we_are_rss_wrapper">
                        <div className="benefits_list">
                            The Regents Scholar Society at UCLA, or RSS, offers membership to everyone who has received the
                            Regents Scholarship.
                            The scholarship is offered to those at the top of each incoming class, but 
                            we're more than just smart -- we're kind, ambitious, passionate, funny, driven, and 
                            maybe a little eccentric. Most importantly, we're a diverse group who are here to 
                            welcome you to UCLA with open arms and open hearts.
                            <br /><br />
                            The Regents Scholarship is awarded to up to 100 incoming freshmen 
                            and transfer students. Alongside membership in the Regents Scholar Society, 
                            all Regents Scholars receive:
                            <BenefitWrapper>
                                <BenefitDescription
                                    heading="$2000"
                                    subheading="honorarium"
                                    desc="A $2,000 honorarium, awarded quarterly for four years for freshmen/two years for transfers.
                                        Additionally, university scholarships or grants to cover the student's financial need."
                                    bgr="openbook.png"
                                />
                                <BenefitDescription
                                    heading="10"
                                    subheading="units"
                                    desc="Priority enrollment in 10 class units, starting in their second quarter."
                                    bgr="pencil.png"
                                    scale="90%"
                                />
                                <BenefitDescription
                                    heading="2"
                                    subheading="years"
                                    desc="A guaranteed parking pass upon submission of the Parking application in addition to two years of guaranteed university housing."
                                    bgr="house.png"
                                    scale="90%"
                                />
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
                                        Whether it be resume reviews, information sessions, workshops, or course planning 
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
                        </div>
                        <div className='letter_wrapper'>
                            <div className="tad_letter_header">
                                a letter from our {content.TRANSFER_AFFAIRS_DIRECTOR.toLowerCase()}
                            </div>
                            <div className="tad_letter_body">
                                {content.WELCOME_LETTER2[0]}
                                {content.WELCOME_LETTER2.slice(1).map((paragraph) => 
                                    <><br/><br/>{paragraph}</>
                                )}
                            </div>
                            <div className="tad_letter_signature">- {content.CURRENT_TAD}</div>
                            <div className="tad_letter_title">
                                {content.TRANSFER_AFFAIRS_DIRECTOR}
                            </div>
                        </div>
                    </div>
                </TextPanel>
            </React.Fragment>
        )
    }

    renderSmall() {
        return (
            <React.Fragment>
                <TextPanel heading="we are rss" id="we-are-rss-panel">
                    The Regents Scholar Society at UCLA, or RSS, offers membership to everyone who has received the
                    Regents Scholarship.
                    The scholarship is offered to those at the top of each incoming class, but 
                    we're more than just smart -- we're kind, ambitious, passionate, funny, driven, and 
                    maybe a little eccentric. Most importantly, we're a diverse group who are here to 
                    welcome you to UCLA with open arms and open hearts.
                    <br /><br />
                    The Regents Scholarship is awarded to up to 100 incoming freshmen 
                    and transfer students. Alongside membership in the Regents Scholar Society, 
                    all Regents Scholars receive:
                    <BenefitWrapper>
                        <BenefitDescription
                            heading="$2000"
                            subheading="honorarium"
                            desc="A $2,000 honorarium, awarded quarterly for four years for freshmen/two years for transfers.
                                Additionally, university scholarships or grants to cover the student's financial need."
                            bgr="openbook.png"
                        />
                        <BenefitDescription
                            heading="10"
                            subheading="units"
                            desc="Priority enrollment in 10 class units, starting in their second quarter."
                            bgr="pencil.png"
                            scale="90%"
                        />
                        <BenefitDescription
                            heading="2"
                            subheading="years"
                            desc="A guaranteed parking pass upon submission of the Parking application in addition to two years of guaranteed university housing."
                            bgr="house.png"
                            scale="90%"
                        />
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
                                Whether it be resume reviews, information sessions, workshops, or course planning 
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
                <TextPanel heading="a letter from our transfer affairs director" id="small-letter-panel">
                    <div className="tad_letter_body">
                        {content.WELCOME_LETTER2[0]}
                        {content.WELCOME_LETTER2.slice(1).map((paragraph) => 
                            <><br/><br/>{paragraph}</>
                        )}
                    </div>
                    <div className="tad_letter_signature">- {content.CURRENT_TAD}</div>
                    <div className="tad_letter_title">
                        {content.TRANSFER_AFFAIRS_DIRECTOR}
                    </div>
                </TextPanel>
            </React.Fragment>
        )
    }

}

export default Prospectives_TWR;
