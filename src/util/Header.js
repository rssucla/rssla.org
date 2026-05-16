import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './header.css'

/**
 * Nav bar at the top of each page
 */
class Header extends Component {
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
        const desktop = this.state.width > 840;
        return (
            <div className="header-wrapper">
                <div className="header-title">
                    <Link to="/" className="header-logo-link">
                        <img src="/images/rss_logo.png" alt="rss logo" className="header-logo"/>
                    </Link>
                </div>
                <NavItems desktop={desktop}>
                    <NavBox label="programs" link="programs" external={false} />
                    <ExpandableNavBox 
                        label="leadership" 
                        link={null} 
                        desktop={desktop}
                        options={[
                                {label: "committees", to: "committees"},
                                {label: "board", to: "board"},
                                ]}
                    />
                            
                    {/*NAVIGATION BAR */}
                    <NavBox label="gallery" link="gallery" external={false} />
                    <ExpandableNavBox 
                        label="prospectives" 
                        link={null} 
                        desktop={desktop}
                        options={[
                                {label: "freshmen", to: "prospectives_osp"},
                                {label: "transfers", to: "prospectives_twr"},
                                ]}
                    />
                    <NavBox label="inter-UC" link="interUC" external={false}/>
                    <NavBox label="contact us" link="contact" external={false}/>
                </NavItems>
            </div>
        )
    }
}

function NavItems(props) {
    if (props.desktop) {
        return (
            <div className="nav-bar-wrapper desktop">
                {props.children}
            </div>
        )
    } else {
        return (
            <div className="nav-bar-wrapper mobile">
                <HamburgerMenu contents={props.children} />
            </div>
        )
    }
}

class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggleOpen() {
        this.setState({open: !this.state.open});
    }

    closeMenu() {
        this.setState({open: false});
    }
    
    render() {
        return (
            <div className="hamburger-menu-wrapper">
                <div onClick={()=>this.toggleOpen()} className="hamburger-icon">
                    <i className="fas fa-bars" />
                </div>
                <div className={`header-sidebar ${this.state.open ? "open" : "closed"}`}>
                    <div className="header-logo-wrapper-mobile">
                        <Link to="/" className="header-logo-link-mobile">
                            <img src="/images/rss_logo.png" alt="rss logo" className="header-logo-mobile"/>
                        </Link>
                    </div>
                    <div className="header-sidebar-contents">
                        {this.props.contents}
                    </div>
                </div>
                {this.state.open ? 
                    <div className="header-sidebar-shader" onClick={()=>this.toggleOpen()} />
                : null}
            </div>
        )
    }
}

class NavBox extends Component {
    render() {
        return (this.props.external ? (
            <a href={this.props.link}
               className="nav-box-link">
                <div className="nav-box">
                    {this.props.label}
                </div>
            </a>
        ) : (
            <Link 
                    className="nav-box-link"
                    to={this.props.link}
                >
                <div className="nav-box">
                    {this.props.label}
                </div>
            </Link>
        ))
    }
}

class ExpandableNavBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    setOpen(open) {
        this.setState({open: open});
    }


    render() {      
        let contents = (
            <>
                <div className="nav-box-expanded-label">
                    {this.props.label}
                    {this.props.desktop ? 
                        <>
                            &nbsp;
                            <i className="navicon fas fa-chevron-down"/>
                        </>
                    : 
                        <div className={`nav-box-expanded-label-icon-wrapper ${this.state.open ? "up" : "down"}`}>
                            {this.state.open ? 
                                <i className="fas fa-sort-up"/>
                            :
                                <i className="fas fa-sort-down"/>
                            }
                        </div>
                    }
                </div>
                
                {this.state.open ?
                    <div className="nav-box-expanded">
                        {this.props.options.map((item, i) =>
                            <Link className="nav-box-link" to={item.to} key={item.to} >
                                <div className="nav-box-expanded-item">
                                    {item.label}
                                </div>
                            </Link>
                        )}
                    </div>
                : null}
            </>
        )  
        if (this.props.desktop) {
            return (
                <div 
                    className="nav-box expandable" 
                    onMouseEnter={() => this.setOpen(true)}
                    onMouseLeave={() => this.setOpen(false)}    
                > 
                    {contents}
                </div>
            )
        } else {
            return (
                <div 
                    className="nav-box expandable" 
                    onClick={() => this.setOpen(!this.state.open)} 
                > 
                    {contents}
                </div>
            )
        }
    }
}

export default Header;
