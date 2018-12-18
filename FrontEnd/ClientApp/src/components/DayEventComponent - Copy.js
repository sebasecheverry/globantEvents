import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/EmployeeReducer';
import './DayEventComponent.css';
import DayPicker from 'react-day-picker';


class DayEventComponent extends Component {
  componentWillMount() {
    // This method runs when the component is first added to the page
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    //const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;     
   }            
    

    render() {                

        return (
            <section>
                <div className="row">
                    <DayPicker
                        dayPickerProps={{
                            month: new Date(2018, 10),
                            showWeekNumbers: true,
                            todayButton: 'Today',
                        }}
                    />
                </div>                
          </section>
    );
  }
}


export default connect(
    state => state.employees,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(DayEventComponent);
