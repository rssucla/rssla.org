import React, { Component } from 'react';

import content from './Content'
import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import OSP from '../util/OSP';
import TWR from '../util/TWR';
import {TextPanel} from '../util/TextPanel';
import {BenefitDescription, BenefitWrapper} from '../util/BenefitDescription';

import './prospectives_osp.css';

class Prospectives_OSP extends Component {
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
            <RSSPage className="prospectives_osp">
                <Banner 
                    text="prospectives" 
                    bgr="/images/prospectives/osp_headshots/Group_Photo_III.jpg"
                    darkness="0.2"
                    valign="65%"
                />

                <ProspectivesIntro width={this.state.width} />

                <div className="welcome_wrapper">
                    <h2 className= "welcome_header"> welcome to our {content.OSP.toLowerCase()}!</h2> 
                    <div className= "welcome_to_osp">
                        {content.WELCOME_BLURB}
                    </div>
                </div>
               
                <OSP />

                <TextPanel heading="contact us!">
                    <div className="osp_contact_wrapper">
                        <div className="osp_contact_name">{content.CURRENT_EVP}</div>
                        <div className="osp_contact_email">
                            <a className="osp_contact_email_link" href="mailto:evp@rssla.org">evp@rssla.org</a>
                        </div>
                        {/*
                        <div className="osp_contact_name">Michelle Garabetian</div>
                        <div className="osp_contact_email">
                            <a className="osp_contact_email_link" href="mailto:transfers@rssla.org">transfers@rssla.org</a>
                        </div>
                        */}
                    </div>
                    <img className="osp_contact_img" src="/images/prospectives/contact_banner.png" alt="mountains"/>
                </TextPanel>
            </RSSPage>
        )
    }
}

/* freshman version

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
                                    desc="A $2,000 honorarium, awarded quarterly for four years (or two years for transfers).
                                        Additionally, university scholarships or grants to cover the student's financial need."
                                    bgr="openbook.png"
                                />
                                <BenefitDescription
                                    heading="10"
                                    subheading="units"
                                    desc="Priority enrollment in 13 class units, starting in their second quarter."
                                    bgr="pencil.png"
                                    scale="90%"
                                />
                                <BenefitDescription
                                    heading="4"
                                    subheading="years"
                                    desc="Four years of university housing upon submission of the Housing application. 
                                        Additionally, a parking pass upon submission of the Parking application."
                                    bgr="house.png"
                                    scale="90%"
                                />
                            </BenefitWrapper>
                        </div>
                        <div className='letter_wrapper'>
                            <div className="evp_letter_header">
                                a letter from our external vice president
                            </div>
                            <div className="evp_letter_body">
                                Dear prospective RSSer,
                                <br/><br/>
                                Congratulations on your acceptance to UCLA as a Regents Scholar, and welcome to UCLA RSS and OSP!
                                We are extremely excited to have you in our OSP, and can't wait to meet you virtually.
                                <br/><br/>
                                In these three days, you'll learn what college, UCLA, and RSS are all about — on top of meeting 
                                some lifelong friends and even potentially future roommates! If you have any questions about college, 
                                and I mean any — this is the place to have them answered. We look forward to meeting you soon!
                            </div>
                            <div className="evp_letter_signature">- Shannon Shams</div>
                            <div className="evp_letter_title">
                                External Vice President
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
                            desc="A $2,000 honorarium, awarded quarterly for four years (or two years for transfers).
                                Additionally, university scholarships or grants to cover the student's financial need."
                            bgr="openbook.png"
                        />
                        <BenefitDescription
                            heading="13"
                            subheading="units"
                            desc="Priority enrollment in 13 class units, starting in their second quarter."
                            bgr="pencil.png"
                            scale="90%"
                        />
                        <BenefitDescription
                            heading="4"
                            subheading="years"
                            desc="Four years of university housing upon submission of the Housing application. 
                                Additionally, a parking pass upon submission of the Parking application."
                            bgr="house.png"
                            scale="90%"
                        />
                    </BenefitWrapper>
                </TextPanel>
                <TextPanel heading="a letter from our external vice president" id="small-letter-panel">
                    <div className="evp_letter_body">
                        Dear prospective RSSer,
                        <br/><br/>
                        Congratulations on your acceptance to UCLA as a Regents Scholar, and welcome to UCLA RSS and OSP!
                        We are extremely excited to have you in our OSP, and can't wait to meet you virtually.
                        <br/><br/>
                        In these three days, you'll learn what college, UCLA, and RSS are all about — on top of meeting 
                        some lifelong friends and even potentially future roommates! If you have any questions about college, 
                        and I mean any — this is the place to have them answered. We look forward to meeting you soon!
                    </div>
                    <div className="evp_letter_signature">- Shannon Shams</div>
                    <div className="evp_letter_title">
                        External Vice President
                    </div>
                </TextPanel>
            </React.Fragment>
        )
    }

}

*/

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
                                    heading="4"
                                    subheading="years"
                                    desc="A parking pass upon submission of the Parking application in addition to four years of university housing."
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
                            <div className="evp_letter_header">
                                a letter from our {content.EXTERNAL_VICE_PRESIDENT.toLowerCase()}
                            </div>
                            <div className="evp_letter_body">
                                {content.WELCOME_LETTER[0]}
                                {content.WELCOME_LETTER.slice(1).map((paragraph) => 
                                    <><br/><br/>{paragraph}</>
                                )}
                            </div>
                            <div className="tad_letter_signature">- {content.CURRENT_EVP}</div>
                            <div className="evp_letter_title">
                                {content.EXTERNAL_VICE_PRESIDENT}
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
                            heading="4"
                            subheading="years"
                            desc="A parking pass upon submission of the Parking application in addition to four years of university housing."
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
                <TextPanel heading="a letter from our external vice president" id="small-letter-panel">
                    <div className="evp_letter_body">
                        {content.WELCOME_LETTER[0]}
                        {content.WELCOME_LETTER.slice(1).map((paragraph) => 
                            <><br/><br/>{paragraph}</>
                        )}
                    </div>
                    <div className="evp_letter_signature">- {content.CURRENT_EVP}</div>
                    <div className="evp_letter_title">
                        {content.EXTERNAL_VICE_PRESIDENT}
                    </div>
                </TextPanel>
            </React.Fragment>
        )
    }

}

export default Prospectives_OSP;
