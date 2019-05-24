import React, { Component } from "react";

import '../../styles.css'

class WorkView extends Component {

    render(){
        return (
            <div className="centered-container">
                <div className="page-header">
                    <h1>Work</h1>
                    <hr/>
                </div>

                <div id="first-american-container">
                    <div id="first-american-about-container">
                        <h3 id="first-american-title">First American Financial Corp.</h3>
                        <p className="subtitle-close">Software Engineering Intern - Database Solutions</p>
                        <p className="subtitle-close">May 2018 - Present (1 year)</p>
                    </div>
                    <div id="first-american-tasks-container">
                        <ul>
                            <li>
                                I built a <b>React.js</b> web application with custom nested dropdown filters for
                                home title data in a <b>KendoUI</b> grid. This was the first instance of React.js
                                being used in database solutions.
                            </li>
                            <li>
                                I created a <b>.NET</b> wrapper to serve web applications on client machines running
                                our desktop application. The browser engine used in the desktop app was similar to IE7
                                in its limitations, so we were unable to leverage modern web technologies such as React.js,
                                or even anything greater than CSS 1.0. This wrapper allowed us to take advantage of the
                                tools and niceties of modern frameworks and technologies to spend less time on gritty
                                details and more time on productive programming.
                            </li>
                            <li>
                                I wrote <b>Python</b> scripts to automate server liveness, reliability, and latency
                                monitoring. I integrated these scripts into a managed service called App Dynamics to
                                graphically display the data collected from periodically running these scripts. I then
                                <b>created documentation</b> on how to create similar scripts and the subsequent
                                integration process so the offshore team could take over future endeavours in this area.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkView;