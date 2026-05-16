import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {ImageTextPanel, TextPanel} from '../util/TextPanel';
import './board.css';

class Board extends Component {
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
        const contents = (
            <>
                <BoardProfile width={this.state.width}
                    title="President"
                    name="Rebecca Lee"
                    major="Biochemistry, 2026"
                    img="RebeccaLee.jpg"
                    size="175% auto"
                    halign="45%"
                    valign="35%"
                />
                <BoardProfile width={this.state.width}
                    title="External Vice President"
                    name="Shannon Shams"
                    major="Physiological Sciences, 2026"
                    img="ShannonShams.jpg"
                    size="180% auto"
                    halign="50%"
                    valign="60%"
                />
                <BoardProfile width={this.state.width}
                    title="Secretary"
                    name="Scarlett Greenwood"
                    major="Psychology, 2028"
                    img="ScarlettGreenwood.jpg"
                    size="160% auto"
                    halign="47%"
                    valign = "50%"
                />
                <BoardProfile width={this.state.width}
                    title="Activities Director"
                    name="Adrian Anaya"
                    major="Chemical Engineering, 2028"
                    img="AdrianAnaya.jpg"
                    size="145% auto"
                    halign="50%"
                    valign="25%"
                />
                <BoardProfile width={this.state.width}
                    title="Activities Director"
                    name="Stephanie Nguyen"
                    major="Neuroscience, 2028"
                    img="StephanieNguyen.jpg"
                    size="160% auto"
                    halign="50%"
                    valign="15%"
                />
                <BoardProfile width={this.state.width}
                    title="Community Service Director"
                    name="Izzy Nuñez"
                    major="Human Biology & Society, 2028"
                    img="IzzyNunez.jpg"
                    size="160% auto"
                    halign = "50%"
                    valign="65%"
                />
                <BoardProfile width={this.state.width}
                    title="Funding Director"
                    name="Tomas Mazeika"
                    major="Philosophy, 2028"
                    img="TomasMazeika.jpg"
                    size="115% auto"
                    halign="50%"
                    valign="15%"
                />

                <BoardProfile width={this.state.width}
                    title="Publicity Director"
                    name="Katie Fang"
                    major="World Arts and Cultures, 2026"
                    img="KatieFang.jpg"
                    size="130% auto"
                    halign="55%"
                    valign="30%"
                />
                <BoardProfile width={this.state.width}
                    title="Transfer Affairs Director"
                    name="Carlee Lincoln"
                    major="Political Science and Philosophy, 2026"
                    img="CarleeLincoln.jpg"
                    size="140% auto"
                    halign="50%"
                    valign="20%"
                />
                        <BoardProfile width={this.state.width}
                    title="Mentorship Director"
                    name="Téa Wagstaff"
                    major="Mathematics/Economics, 2027"
                    img="TeaWagstaff.jpg"
                    size="150% auto"
                    halign="55%"
                    valign="58%"
                />
            </>
        )
        return (
            <RSSPage className="board">
                <Banner 
                    text="executive board"
                    bgr="/images/banners/royce-hall-pixabay.jpg"
                    darkness="0"
                    valign="55%"
                />
                       <TextPanel 
                    id="eboard-description-panel"
                >
                        The <b>Regents Scholar Society Executive Board</b> is responsible for designing, planning, and executing all of the internal and external programs, projects, resources, activities, service events, leadership opportunities, mentorship, academic and professional events for our members to thrive at UCLA. A highly collaborative and supportive group of 14 outstanding RSSers, E-board works hard throughout the year to keep RSSers engaged and involved in the society through providing creative and innovative events and opportunities for all.
                
                        </TextPanel>
                <div className="board-wrapper">
                    {this.state.width > 840 ? contents :
                        <div className="board-flex-wrapper">
                            {contents}
                        </div>
                    }
                </div>

                    <TextPanel 
                    id="eboard-asterisk"
                >
                        *Vacant positions: Internal Vice President, Treasurer, Educational Programs Director, Webmaster
                
                        </TextPanel>
            </RSSPage>
        )
    }
}

class BoardProfile extends Component {
    render() {
        const halign = this.props.halign == null ? "0%" : this.props.halign; //picture movement laterally
        const valign = this.props.valign == null ? "0%" : this.props.valign; //picture movement vertically
        const size = this.props.size == null ? "cover" : this.props.size; //zoom
        const imgStyle = {
            backgroundImage: `url(/images/board25-26/${this.props.img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${halign} ${valign}`,
            backgroundSize: size
        }
        if (this.props.width > 840) {
            return (
                <div className="board-profile-wrapper">
                    <div className="board-profile-img" style={imgStyle} />
                    <div className="board-profile-title">{this.props.title}</div>
                    <div className="board-profile-name">{this.props.name}</div>
                    <div className="board-profile-major">{this.props.major}</div>
                </div>
            )
        } else {
            return (
                <div className="board-profile-wrapper">
                    <div className="board-profile-img" style={imgStyle} />
                    <div className="board-profile-text-wrapper">
                        <div className="board-profile-name">{this.props.name}</div>
                        <div className="board-profile-title">{this.props.title}</div>
                        <div className="board-profile-major">{this.props.major}</div>
                    </div>
                </div>
            )
        }
    }
}

export default Board;
