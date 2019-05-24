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

                <h3 className="about-h3">First American Financial Corp.</h3>
                <p className="subtitle">May 2018 - Present (1 year)</p>
                <div id="first-american-container">

                </div>
            </div>
        );
    }
}

export default WorkView;