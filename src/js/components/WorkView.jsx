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
                                I built a React.js web application with custom nested dropdown filters that filtered
                                home title data in a KendoUI grid. This was the first instance of React.js being used in
                                database solutions.
                            </li>
                            <li>
                                More to come...
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkView;