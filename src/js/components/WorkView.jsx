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

                <div>
                    <div className="work-about-container">
                        <h3 className="work-title">First American Financial Corp.</h3>
                        <p className="subtitle-close">Software Engineering Intern - Database Solutions</p>
                        <p className="subtitle-close">May 2018 - Present  &middot; 1 year</p>
                    </div>
                    <div className="work-tasks-container">
                        <ul>
                            <li>
                                I built a <b>React.js</b> web application with custom nested dropdown filters for
                                home title data in a <b>KendoUI</b> grid. This was the first instance of React.js
                                being used in First American's database solutions.
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
                                graphically display the data collected from periodically running these scripts.
                                I then <b>created documentation</b> on how to create similar scripts and the subsequent
                                integration process so the offshore team could take over future endeavours in this area.
                            </li>
                            <li>
                                I automated an application of CSV parsing using <b>Python</b> and some handy libraries
                            </li>
                            <li>
                                I <b>worked closely with product managers</b> to rapidly prototype web applications
                                to demo to customers. My applications went through many iterations as feedback from
                                higher management and customers reached me. I also worked
                                with <b>Team Foundation Server</b> to complete requirements for user stories written
                                by product managers. I frequently attended meetings with developers and product managers
                                to discuss requirements for upcoming projects and write user stories.
                            </li>
                            <li>
                                I worked to <b>combine existing customer order services</b> into a cohesive unit.
                                I built the skeleton for the service, as can be seen
                                &nbsp;<b>
                                <a href="https://support.datatracetitle.com/new-feature-order-management">here</a>
                                &nbsp;</b>
                                in almost pure <b>Javascript</b> with some <b>jQuery</b> (which I now despise) and
                                handed the project off to the offshore team for complete integration.
                            </li>
                            <li>
                                I think it's important to talk about failures because I believe they define your growth
                                more than your successes. One of the projects I was assigned to was to try to
                                optimize <b>XSL Transformations</b> performed on our various server VM's in order to
                                outperform an expensive IBM Transformation service we were paying a lot of money for.
                                I measured the execution time but did not take into account network latency, so this
                                completely skewed the results, rendering them essentially useless. Another issue was
                                we were unable to profile the IBM machine, we could essentially only make API calls
                                to it. I learned a lot from my pitfalls in this project, and am grateful for those
                                who helped me learn from it.
                            </li>
                            <li>
                                Near the end of my last semester, I began working remotely and less hours due to the
                                need to focus on school and complete my Thesis. During these few weeks,
                                I <b>maintained websites</b> for the marketing team using mainly just plain old
                                <b>HTML</b> and <b>CSS</b>.
                            </li>
                            <li>
                                I made many great friends and learned alongside them.
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="work-about-container">
                        <h3 className="work-title">Netaphor Software Inc.</h3>
                        <p className="subtitle-close">Software Quality Assurance Intern</p>
                        <p className="subtitle-close">Nov. 2017 - May 2018 &middot; 7 months</p>
                    </div>
                    <div className="work-tasks-container">
                        <ul>
                            <li>
                                I created and maintained <b>Docker</b> instances to load test our .NET application
                                with up to 80x more printer devices than were physically available in the office.
                                This simulation was great for understanding how our application would perform in
                                larger company offices.
                            </li>
                            <li>
                                I wrote a <b>Windows Powershell</b> script to automate installation and
                                configuration settings required for our product.
                            </li>
                            <li>
                                I <b>tested SQL Server integration</b> with our product - all product features,
                                installation, and integration with various versions of Windows.
                            </li>
                            <li>
                                I used <b>Team Foundation Server</b> for test cases for our release candidates.
                            </li>
                            <li>
                                I learned how to write more robust software from my time as a QA intern!
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkView;