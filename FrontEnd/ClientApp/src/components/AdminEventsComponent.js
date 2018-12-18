import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment'
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/EmployeeReducer';
import './AdminEventsComponent.css';
import Timeline from 'react-calendar-timeline';
import PropTypes from 'prop-types';
var { Calendar, CalendarControls } = require('react-yearly-calendar');


class AdminEventsComponent extends Component {
  componentWillMount() {
    // This method runs when the component is first added to the page
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    //const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;     
   }

    

        
    

    render() {
        const groups = [{ id: 1, title: 'Monica' }, { id: 2, title: 'Lis' }];

        const items = [
            {
                id: 1,
                group: 1,
                title: 'Reunion 1',
                start_time: moment(),
                end_time: moment().add(1, 'hour')
            },
            {
                id: 2,
                group: 2,
                title: 'Reunion 1',
                start_time: moment().add(-0.5, 'hour'),
                end_time: moment().add(0.5, 'hour')
            },
            {
                id: 3,
                group: 1,
                title: 'Reunion 1',
                start_time: moment().add(2, 'hour'),
                end_time: moment().add(3, 'hour')
            }
        ]

        return (


            <div className="container">
                <div className="row">
                    <label className="control-label col-sm-4" htmlFor="people-number">
                        <span>select event: </span>
                    </label>
                    <select className="dropdown">
                        <option value="volvo">Event 1</option>
                        <option value="saab">Event 2</option>
                        <option value="mercedes">Event 3</option>
                        <option value="audi">Event 4</option>
                    </select>                                 
                </div>
                <div className="row">
                    <Timeline
                        groups={groups}
                        items={items}
                        defaultTimeStart={moment().add(-12, 'hour')}
                        defaultTimeEnd={moment().add(12, 'hour')}
                    />
                </div>
            </div> 
    );
  }
}


export default connect(
    state => state.employees,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(AdminEventsComponent);
