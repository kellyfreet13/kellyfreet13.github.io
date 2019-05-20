import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../styles.css';
import GridView from "./GridView.jsx";

class MainView extends Component {
    render() {
        return (
            <div id="body-container">
                <div id="name-header">Kelly Freet</div>
                <div>
                    <GridView />
                </div>
            </div>

        );
    }
}

ReactDOM.render(<MainView />, document.getElementById('entry'));

export default MainView;
