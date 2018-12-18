import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment'
import { actionCreators } from '../store/EmployeeReducer';
import './CreateEventComponent.css';
var { Calendar, CalendarControls } = require('react-yearly-calendar');


class CreateEventComponent extends Component {
  componentWillMount() {
    // This method runs when the component is first added to the page
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    //const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;     
   }

    onDatePicked(date) {
        alert(date);
    }

    onRangePicked(rangeStart, rangeEnd) {
        alert(rangeStart.toDate() + " - " + rangeEnd.toDate());
    }
        
    

    render() {
        const customCSSclasses = {
            holidays: [
                '2018-04-25',
                '2018-05-01',
                '2018-06-02',
                '2018-08-15',
                '2018-11-01'
            ]
        }

        let timeStep = 15;

        return (
            <section>

                <fieldset className="row">
                    <label className="control-label col-sm-4" htmlFor="event-type">Event Type:</label>
                    <div className="col-sm-3">
                        <label htmlFor="event-hours">by Hours</label>
                        <input type="radio" name="event-type" id="event-hours" value="by Hours" />
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="event-days">by Days</label>
                        <input type="radio" name="event-type" id="event-days" value="by Days" />
                    </div>
                </fieldset>

                <div className="row">
                    <label className="control-label col-sm-4" htmlFor="people-number">
                        <span>number of people(per step): </span>
                    </label>
                    <input type="number" id="people-number" name="people-number" />
                </div>

                <div className="row">
                    <label className="control-label col-sm-4" htmlFor="time-step">
                        <span>time Step(min): </span>                        
                    </label>
                    <input type="number" id="time-step" name="time-step" />
                </div>

                <div className="row">
                    <label className="control-label col-sm-4" htmlFor="modifiy-inscription">
                        <span>cannot modify before this number of days: </span>
                    </label>
                    <input type="number" id="modifiy-inscription" name="modifiy-inscription" />
                </div>

                
                <div className="row">
                    <Calendar
                      year={2018}
                      onPickDate={this.onDatePicked}
                      selectRange={true}
                      selectedRange={[moment(new Date()), moment(new Date())]}
                      onPickRange={this.onRangePicked}
                      customClasses={customCSSclasses}
                    />  
                </div>
                <div className="row">
                    <input className="col-sm-3 btn btn-primary" type="button" value="create" />
                </div>
          </section>
    );
  }
}


export default connect(
    state => state.employees,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CreateEventComponent);
