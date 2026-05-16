import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {ImageTextPanel, TextPanel} from '../util/TextPanel';

import './committees.css';


/*
                        In the past, the A.C.E. committee has put on events like:
                        <ul>
                            <li>All-Family Holiday Extravaganza</li>
                            <li>Beach cleanups</li>
                            <li>Hiking trips</li>
                            <li>Broomball and ice skating</li>
                        </ul>
*/

class Committees extends Component {
    render() {
        return (
            <RSSPage className="committees">
                <Banner 
                    text="committees" 
                    bgr="/images/banners/powell-chandelier.jpg"
                    darkness="0.2"
                    valign="65%"
                />

                <ImageTextPanel 
                    heading="what are committees?"
                    image="/images/gallery/committees.jpg"
                    align="left"
                    id="committees-text-panel"
                >

                    Committees are incredibly important to the structure and well-being of UCLA RSS, in charge of planning and promoting fun and engaging events, securing funding, designing merchandise, and more. 
                    Our committees shape the direction of our society. Each committee is led by one or more board members and meets bi-weekly. RSS also hosts socials within each committee as well as an annual 
                    all-committee social to help members meet each other and engage with RSS.

                </ImageTextPanel>

                <TextPanel 
                    heading="RSS Committees"
                    id="join-committee-panel"
                >

                    <div className="committees-list-wrapper">
                        <CommitteeEntry
                            name="Special Events"
                            leaders="President (Rebecca), External Vice President (Shannon), Internal Vice President (-)"
                        >
                            The Special Events Committee plans RSS’s large-scale events, such as winter retreat, S.P.I.E.L., Inter-UC conference, and more. SEC works routinely with the UCLA events offices, SOLE, funding, and ASUCLA to plan logistics and make RSS traditions possible.
                        </CommitteeEntry>
                        <CommitteeEntry
                            name="Activities"
                            leaders="Activities Directors (Stephanie & Adrian)"
                        >
                            The Activities committee plans creative, fun, and affordable social activities for all RSS members. Our events foster engagement and bonding between Regents Scholars, and the committee frequently collaborates with other committees in joint events.

                        </CommitteeEntry>
                        <CommitteeEntry
                            name="Community Service & Education"
                            leaders="Community Service Director (Izzy), Educational Programs Director (-)"
                        >
                            The C&E committee upholds the scholarship and community service pillars of RSS by arranging 3-4 community service opportunities quarterly, and hosting events that promote RSSers' academic and professional development, such as faculty mixers and alumni dinners.

                        </CommitteeEntry>
                         <CommitteeEntry
                            name="Design"
                            leaders="Publicity Director (Katie)"
                        >
                            The Design Committee curates the visual presence of RSS through creating promotional graphics for events and producing new merchandise every year. By maintaining a welcoming social media space, Design also enhances connection and cohesion within the RSS community. 
                        </CommitteeEntry> 
                        <CommitteeEntry
                            name="Funding"
                            leaders="Funding Director (Tomas), Treasurer (-)"
                        >
                            The Funding Committee is in charge of obtaining grants from UCLA to fund RSS's many events and activities, as well as planning and organizing creative fundraisers. The Funding Committee also serves as liaisons between RSS and corporate sponsors.
                        </CommitteeEntry>
                        <CommitteeEntry
                            name="Transfer Affairs"
                            leaders="Transfer Affairs Director (Carlee)"
                        >
                            The Transfer Affairs Committee works to make the Regents Scholar Society a transfer-inclusive
                            space by promoting academic, educational, and professional resources for transfer Regents Scholars and developing unique transfer-led community building initiatives.
                        </CommitteeEntry>
                    </div>
                </TextPanel>

            </RSSPage>
        )
    }
}

class CommitteeEntry extends Component {
    render() {
        return (
            <div className="committee-entry-wrapper">
                <div className="committee-name">{this.props.name}</div>
                <div className="committee-leaders">Led by {this.props.leaders}</div>
                <div className="committee-description">{this.props.children}</div>
            </div>
        )
    }
}

export default Committees;
