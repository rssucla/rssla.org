import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {TextPanel} from '../util/TextPanel';

import './interUC.css';

class interUC extends Component {
    render() {
        return (
            <RSSPage className="interUC">
                <Banner 
                    text="inter-UC conference!" 
                    bgr="/images/banners/induction.png"
                    darkness="0.2"
                    valign="50%"
                />
                <TextPanel heading="[ARCHIVE]: itinerary">
                    <div className="itinerary_intro">
                        Saturday, May 3rd – Sunday, May 4th, 2025
                        <br /><br />
                        During the Inter-UC Conference, we hope to foster networking between University 
                        of California Regents Scholars as well as showcase both the academic and social 
                        aspects of life here at UCLA. Please wear comfortable walking shoes, carry a water 
                        bottle, and bring around $30-50 in cash for dinner on Saturday and souvenirs! Lunch 
                        will be provided on Saturday and Sunday.
                        <br /><br />
                        PLEASE NOTE THIS IS A TENTATIVE ITINERARY AND IS SUBJECT TO CHANGE!
                    </div>
                    <br /><br />
                    <h3>SATURDAY, MAY 3RD, 2025</h3>
                    <div className="saturday">
                        <img 
                            src="/images/images/sat_inter_uc.png" 
                            alt="Saturday Itinerary" 
                            width="50%"
                        />
                    </div>
                    <h3>SUNDAY, MAY 4TH, 2025</h3>
                    <div className="sunday">
                        <img 
                            src="/images/images/sun_inter_uc.png" 
                            alt="Sunday Itinerary" 
                            width="45%"
                        />
                    </div>
                </TextPanel>
                <TextPanel heading="parking information">
                    <div className="parking_info">
                        If you are driving to UCLA to attend the Inter-UC Conference, there are both paid 
                        and unpaid parking options available. 
                        <br /><br />
                        For paid parking lots closer to campus where majority of events will be held, please 
                        refer to this site for more information and pricing: 
                        https://transportation.ucla.edu/campus-parking/visitors 
                        <br /><br />
                        Unpaid street parking can be found throughout Westwood. However, it is often limited and 
                        can range from a 10 to 30 minute walk to campus. Please refer to this diagram for more 
                        information on parking and check all street signs when leaving your car overnight!                     
                    </div>
                    <div className="location">
                        <h3>LOCATION OF DIAGRAM:</h3>
                        <img 
                            src="/images/images/parking.png" 
                            alt="Parking Map" 
                            width="45%" 
                        />
                        <h3>MAY BE OUT OF DATE: PLEASE CHECK STREET SIGNS UPON ARRIVAL:</h3>
                        <img 
                            src="/images/images/westwood_parking.png" 
                            alt="Westwood Parking Map" 
                            width="35%" 
                        />
                        <br /><br />
                        credit to: https://www.reddit.com/r/ucla/comments/vtue40/westwood_street_parking_mapguide_i_made_for/
                    </div>
                </TextPanel>
            </RSSPage>
            )
        }
    }

export default interUC;
