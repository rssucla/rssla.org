import React from 'react';
import './KavyaBDay.css';

function KavyaBDay() {
    return (
        <div className="kavya-bday">
            <div className="bday-header">
                <h1>Happy Birthday Kavya!</h1>
            </div>
            <div className="bday-content">
                <div className="bday-card">
                    <img 
                        src="/images/board24-25/kavya.png" 
                        alt="Kavya"
                        className="bday-image"
                    />
                    <div className="bday-message">
                        <h2>Wishing you a wonderful day!</h2>
                        <p>May your birthday be filled with joy, laughter, and wonderful memories!</p>
                    </div>
                </div>
                
                {/* Adrian's card */}
                <div className="bday-card" style={{marginTop: '20px'}}>
                    <img 
                        src="/images/Kavya/hike.jpeg"
                        alt="Kavya hiking"
                        className="bday-image2"
                    />
                    <div className="bday-message">
                        <h2>Happy Birthday Kavya!</h2>
                        <p>Thank you to our favorite Mistress of Money, making sure our events are able to be put on! 
                        mistress of money is a joke we made so idk if u actually wanna put that on webiste or not 😭</p>
                        <p style={{fontSize: '0.9em', fontStyle: 'italic'}}>- Adrian</p>
                    </div>
                </div>

                {/* Katie's card */}
                <div className="bday-card" style={{marginTop: '20px'}}>
                    <img 
                        src="/images/Kavya/Roof.jpg"
                        alt="Kavya on the roof"
                        className="bday-image2"
                    />
                    <div className="bday-message">
                        <h2>Dear Kavya,</h2>
                        <p>I hope you have a wonderful birthday! Your energy is always so contagious and it’s so fun to be around you. We love you so much!! 💗</p>
                        <p style={{fontSize: '0.9em', fontStyle: 'italic'}}>- Katie</p>
                    </div>
                </div>

                {/* Tomas' card */}
                <div className="bday-card" style={{marginTop: '20px'}}>
                    <img 
                        src="/images/Kavya/Tomas.jpg"
                        alt="Tomas Photo"
                        className="bday-image2"
                    />
                    <div className="bday-message">
                        <h2>HAPPY HAPPY BIRTHDAY KAVYA!</h2>
                        <p>You always bring the best vibes and are undoubtedly one of the coolest people I know. I wish you a happy birthday, and I’m looking forward to working with you on the FUNding committee next year!</p>
                        <p style={{fontSize: '0.9em', fontStyle: 'italic'}}>- Tomas</p>
                    </div>
                </div>
                
                {/* Sophia's card */}
                <div className="bday-card" style={{marginTop: '20px'}}>
                    <img 
                        src="/images/Kavya/room.jpeg"
                        alt="Kavya's room"
                        className="bday-image2"
                    />
                    <div className="bday-message">
                        <h2>Happy Birthday Kavya!!</h2>
                        <p>You’re such a joy to be around. I hope your day is as fabulous as you are. </p>
                        <p style={{fontSize: '0.9em', fontStyle: 'italic'}}>- Sophia</p>
                    </div>
                </div>

                {/* Nyla's card */}
                <div className="bday-card" style={{marginTop: '20px'}}>
                    <img 
                        src="/images/Kavya/room.jpeg"
                        alt="Kavya's room"
                        className="bday-image2"
                    />
                    <div className="bday-message">
                        <h2>Happy Birthday Kavya!</h2>
                        <p>May your day be even more wonderful than RSS’s finances! 😎</p>
                        <p style={{fontSize: '0.9em', fontStyle: 'italic'}}>- Nyla</p>
                    </div>
                </div>            
            </div>
        </div>
    );
}

export default KavyaBDay;
