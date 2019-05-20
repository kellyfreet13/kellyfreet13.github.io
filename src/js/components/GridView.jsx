import React, { Component } from "react";
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { orderBy, filterBy } from '@progress/kendo-data-query';
import { has } from 'lodash';

import transcript from '../transcript.json';

class GridView extends Component {

    state = {
        gridData: transcript,
        sort: [
            { field: 'CourseID', dir: 'dsc'}
        ],
        filter: {
            logic: 'and',
            filters: [
                { field: 'Division', operator: "equals", value: "Upper" }
            ]
        },
        skip: 0,
        take: 10
    }

    pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
    }

    calculateGpa = () => {
        let totalFiltered = filterBy(this.state.gridData, this.state.filter);
        let len = totalFiltered.length;
        let weightedGpaSum = 0;
        let weightedUnitsSum = 0;  // total possible weighted units
        for (let i = 0; i < len; i++){
            let cur = totalFiltered[i];
            let units = cur['Units'];
            switch (cur['GradeReceived']) {
                case "A":
                    weightedGpaSum += units*4;
                    break;
                case "B":
                    weightedGpaSum += units*3;
                    break;
                case "C":
                    weightedGpaSum += units*2;
                    break;
            }
            weightedUnitsSum += units*4;
        }
        let gpa = (weightedGpaSum / weightedUnitsSum) * 4;
        return gpa;
    }

    getGpaColor = (gpa) => {
        if (gpa >= 3.5) {
            return { backgroundColor: '#00bf23' };
        } else if (gpa >= 3.0 && gpa < 3.5){
            return { backgroundColor: '#dfe200' };
        } else if (gpa >= 2.0 && gpa < 3.0) {
            return { backgroundColor: '#e29e00'};
        } else {
            return { backgroundColor: '#ed3700'};
        }
    }

    // TODO: add predefined filter buttons with "Current GPA w/filters" and perhaps some graphical display
    // TODO: grid data not being updated
    render() {
        let orderedData = orderBy(this.state.gridData, this.state.sort);
        let pagedData = orderedData.slice(this.state.skip, this.state.take + this.state.skip);
        let filteredData = filterBy(pagedData, this.state.filter);
        let gpa = this.calculateGpa().toPrecision(4);
        let gpaColor = this.getGpaColor(gpa);
        return (
            <div id="grid-container">
                <div id="grid-descriptor">
                    Initially filtered by "Upper" division Courses. This is what matters (i.e. better GPA)
                </div>
                <div id="gpa-descriptor">
                    Current GPA with filters:
                    <span id="circle-inner" style={gpaColor}>
                        <span id="gpa">{gpa}</span>
                    </span>
                </div>

                <Grid
                    style={{ height: '500px' }}
                    sortable={true}
                    pageable={true}
                    onPageChange={this.pageChange}
                    skip={this.state.skip}
                    take={this.state.take}
                    total={transcript.length}
                    filterable={true}
                    filter={this.state.filter}
                    onFilterChange={(e) => {
                        this.setState({ filter: e.filter });
                    }}
                    data={filteredData}
                >
                    <Column field="CourseName" title="Name" width="120px" />
                    <Column field="CourseBriefDescription" title="Description" />
                    <Column field="Category" title="Category" width="120px" />
                    <Column field="Semester" title="Semester" width="120px" />
                    <Column field="Year" title="Year" width="140px" />
                    <Column field="GradeReceived" title="Grade" />
                    <Column field="Division" title="Division" />
                </Grid>
            </div>
        );
    }
}

export default GridView;