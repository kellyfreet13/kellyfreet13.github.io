import React, { Component } from "react";
import '../../styles.css'

import csulbLogo from '../../../resources/csulb-seal.jpg';
import graduation from '../../../resources/graduation-siblings.jpg';
import chessClub from '../../../resources/chessclub.jpg';
import kellyChess from '../../../resources/kelly-chess.jpg';
import skiing from '../../../resources/skiing.jpg';

class AboutView extends Component {
    render() {
        return (
            <div className="centered-container">
                <div id="name-header">Kelly Freet</div>
                <div className="page-header">
                    <h1 id="about-me-title">About Me</h1>
                    <hr id="about-hr"/>
                    <p className="tiny-text">Last Update: May 2019</p>
                </div>

                <h3 className="about-h3">University</h3>
                <div className="row" id="university-container">
                    <div className="col">
                        <div className="row">
                            <img
                                src={csulbLogo}
                                alt="CSULB logo (not loaded)"
                                className="col"
                            />
                            <p className="col" id="university-info">
                                I graduated from California State University, Long Beach in May of 2019.
                                I completed my degree through the Engineering Honors Program
                                with a 3.7 grade point average. Checkout the "Academic" tab for more details.
                            </p>
                            {/* Add github link */}
                        </div>
                    </div>
                    <div className="col">
                        <img src={graduation} width="400px" height="365px" id="graduation-img"/>
                        <div className="subtitle center-text">My siblings and me at graduation.</div>
                    </div>
                </div>
                <div id="interests-container">
                    <h3>Interests</h3>
                    <p>
                        I co-founded the CSULB Chess Club in 2016 and was its President for 3 years.
                        In my free time, I enjoy playing chess with friends in person and strangers online.
                        If you want to challenge me, send me a friend request on chess.com!
                        &nbsp;<a href="https://www.chess.com/member/speedster13">(My Profile)</a><br/>
                        I also enjoy exercising, attempting to eat healthy, drinking coffee, and playing piano.
                    </p>
                    <div className="row">
                        <div className="col">
                            <img
                                src={chessClub}
                                className="chess-img"
                            />
                            <div className="subtitle center-text">A chess club meeting circa late 2018.</div>
                        </div>
                        <div className="col">
                            <img
                                src={kellyChess}
                                className="chess-img"
                            />
                            <div className="subtitle center-text">Me playing chess against a stranger.</div>
                        </div>
                    </div>
                    <div id="skiing-container">
                        <p>
                            I've also gotten into skiing during late 2018 and early 2019. Here's a picture of me in my
                            nascent skiing career hitting a blue slope! (I know, I need to get my skiis closer together)
                            I haven't had another photo taken once I've gained more skills and started doing double
                            black runs. Now those are really fun!)
                        </p>
                        <img
                            src={skiing}
                            id="skiing-img"
                        />
                        <div className="subtitle skiing-subtitle">Happily skiing in Mammoth, CA.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutView;