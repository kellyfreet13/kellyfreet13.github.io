import React, { Component } from "react";
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { orderBy, filterBy } from '@progress/kendo-data-query';

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

    render() {
        let orderedData = orderBy(this.state.gridData, this.state.sort);
        let pagedData = orderedData.slice(this.state.skip, this.state.take + this.state.skip);
        return (
            <div id="grid-container">
                <div id="grid-descriptor">
                    Initially filtered by "Upper" division Courses. This makes my GPA nicer :)
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
                    data={filterBy(pagedData, this.state.filter)}
                >
                    <Column field="CourseName" title="Name" width="120px" />
                    <Column field="CourseBriefDescription" title="Description" />
                    <Column field="Category" title="Category" width="120px" />
                    <Column field="Semester" title="Semester" width="120px" />
                    <Column field="Year" title="Year" width="120px" />
                    <Column field="GradeReceived" title="Grade" />
                    <Column field="Division" title="Division" />
                </Grid>
            </div>
        );
    }
}

export default GridView;