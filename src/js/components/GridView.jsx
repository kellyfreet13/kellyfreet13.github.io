import React, { Component } from "react";
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { orderBy, filterBy } from '@progress/kendo-data-query';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons'

import transcript from '../transcript.json';
import '../../styles.css';


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
        take: 10,
        upperDivToggle: 1,
        categoryCSToggle: 0,
        descrHonorsToggle: 0
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

    // Will append "Upper Division" filter to existing filters
    appendUpperFilter = () => {
        let curFilter = this.state.filter;
        if (!this.state.upperDivToggle) { // add item to array
            if (curFilter == null) { // we need to create a whole new filter
                curFilter = {
                    logic: 'and',
                    filters: [{field: 'Division', operator: 'equals', value: 'Upper'}]
                }
            } else { // we just need to append to the filters
                curFilter['filters'].push({field: 'Division', operator: 'equals', value: 'Upper'});

            }
            this.setState({ filter: curFilter });
        }
        else { // remove item from array
            let index = curFilter['filters'].map(function(e) {return e.field}).indexOf('Division');
            if (index > -1) {
                curFilter['filters'].splice(index, 1);
            }
            this.setState({ filter: curFilter })
        }
        let loc = !this.state.upperDivToggle;
        this.setState({upperDivToggle: loc})
    }

    appendMajorFilter = () => {
        let curFilter = this.state.filter;
        if (!this.state.categoryCSToggle) { // add item to array
            if (curFilter == null) { // we need to create a whole new filter
                curFilter = {
                    logic: 'and',
                    filters: [{field: 'Category', operator: 'equals', value: 'CS'}]
                }
            } else { // we just need to append to the filters
                curFilter['filters'].push({field: 'Category', operator: 'equals', value: 'CS'});
            }
            this.setState({ filter: curFilter })
        } else { // remove item from array
            let index = curFilter['filters'].map(function(e) {return e.field}).indexOf('Category');
            if (index > -1) {
                curFilter['filters'].splice(index, 1);
            }
            this.setState({ filter: curFilter });
        }
        let loc = !this.state.categoryCSToggle;
        this.setState({categoryCSToggle: loc});
    }

    appendHonorsFilter = () => {
        let curFilter = this.state.filter;
        if (!this.state.descrHonorsToggle) { // add item to array
            if (curFilter == null) { // we need to create a whole new filter
                curFilter = {
                    logic: 'and',
                    filters: [{field: 'CourseBriefDescription', operator: 'contains', value: 'Honors'}]
                }
            } else { // we just need to append to the filters
                curFilter['filters'].push({field: 'CourseBriefDescription', operator: 'contains', value: 'Honors'});
            }
            this.setState({ filter: curFilter })
        } else { // remove item from array
            let index = curFilter['filters'].map(function(e) {return e.field}).indexOf('CourseBriefDescription');
            if (index > -1) {
                curFilter['filters'].splice(index, 1);
            }
            this.setState({ filter: curFilter });
        }
        let loc = !this.state.descrHonorsToggle;
        this.setState({descrHonorsToggle: loc});
    }

    clearFilters = () => {
        this.setState({
            filter: null,
            upperDivToggle: 0,
            categoryCSToggle: 0,
            descrHonorsToggle: 0
        });
    }

    handleFilterChange = (e) => {
        this.setState({ filter: e.filter });
        console.log(e.filter);
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
            <div className="centered-container-academics">
                <div className="page-header">
                    <h1>Academics</h1>
                    <hr/>
                </div>
                <h3 className="grade-title">Grade Data</h3>
                <div id="grade-filter-and-gpa">
                    <div id="filter-controls">
                        <div id="grid-descriptor">
                            Initially filtered by "Upper Division" courses. Try different combinations to see how it affects my GPA!
                        </div>
                        <div id="button-group">
                            <ButtonGroup>
                                <Button
                                    togglable={true}
                                    onClick={this.appendUpperFilter}
                                    className={this.state.upperDivToggle ? 'k-state-active' : null}
                                >
                                    Upper Division
                                </Button>
                                <Button
                                    togglable={true}
                                    onClick={this.appendMajorFilter}
                                    className={this.state.categoryCSToggle ? 'k-state-active' : null}
                                >
                                    Major Only
                                </Button>
                                <Button
                                    togglable={true}
                                    onClick={this.appendHonorsFilter}
                                    className={this.state.descrHonorsToggle ? 'k-state-active' : null}
                                >
                                    Honors
                                </Button>
                            </ButtonGroup>
                            <Button
                                primary={false}
                                togglable={false}
                                onClick={this.clearFilters}
                                className="clear-filter-button"
                            >
                                Clear Filters
                            </Button>
                        </div>
                    </div>
                    <div id="gpa-container">
                        <div id="gpa-circle-container">
                            <span id="circle-inner" style={gpaColor}>
                                <span id="gpa">{gpa}</span>
                            </span>
                        </div>
                    </div>
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
                        this.handleFilterChange(e);
                    }}
                    data={filteredData}
                >
                    <Column field="CourseName" title="Name" width="100px" />
                    <Column field="CourseBriefDescription" title="Description" width="440px" />
                    <Column field="Category" title="Category" width="100px" />
                    <Column field="Semester" title="Semester" width="120px" />
                    <Column field="Year" title="Year" width="100px" />
                    <Column field="GradeReceived" title="Grade" width="100px" />
                    <Column field="Division" title="Division" />
                </Grid>
            </div>
        );
    }
}

export default GridView;