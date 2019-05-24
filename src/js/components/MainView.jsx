import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../styles.css';
import AboutView from './AboutView.jsx';
import GridView from './GridView.jsx';
import WorkView from './WorkView.jsx';
import ProjectsView from './ProjectsView.jsx';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout'

class MainView extends Component {

    state = {
        selected: 0
    }

    handleSelect = (e) => {
        this.setState({selected: e.selected})
    }

    render() {
        return (
            <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>
                <TabStripTab title="About">
                    <AboutView />
                </TabStripTab>
                <TabStripTab title="Academic">
                    <GridView />
                </TabStripTab>
                <TabStripTab title="Work">
                    <WorkView />
                </TabStripTab>
                <TabStripTab title="Projects">
                    <ProjectsView />
                </TabStripTab>
            </TabStrip>

        );
    }
}

ReactDOM.render(<MainView />, document.getElementById('entry'));

export default MainView;
