import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { actionCreators } from '../store/EmployeeReducer';
import './HourEventComponent.css';
import BigCalendar from 'react-big-calendar'
import dates from './dates.js';
import createRef from 'create-react-ref';

console.log(React.default);

const events = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
    },

    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0),
    },

    {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0),
    },

    {
        id: 4,
        title: 'Some Event',
        start: new Date(2015, 3, 9, 0, 0, 0),
        end: new Date(2015, 3, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2015, 3, 11),
        end: new Date(2015, 3, 13),
        desc: 'Big conference for important people',
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2015, 3, 12, 10, 30, 0, 0),
        end: new Date(2015, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2015, 3, 12, 12, 0, 0, 0),
        end: new Date(2015, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2015, 3, 12, 14, 0, 0, 0),
        end: new Date(2015, 3, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2015, 3, 12, 17, 0, 0, 0),
        end: new Date(2015, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2015, 3, 12, 20, 0, 0, 0),
        end: new Date(2015, 3, 12, 21, 0, 0, 0),
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2015, 3, 13, 7, 0, 0),
        end: new Date(2015, 3, 13, 10, 30, 0),
    },
    {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2015, 3, 17, 19, 30, 0),
        end: new Date(2015, 3, 18, 2, 0, 0),
    },
    {
        id: 12.5,
        title: 'Late Same Night Event',
        start: new Date(2015, 3, 17, 19, 30, 0),
        end: new Date(2015, 3, 17, 23, 30, 0),
    },
    {
        id: 13,
        title: 'Multi-day Event',
        start: new Date(2015, 3, 20, 19, 30, 0),
        end: new Date(2015, 3, 22, 2, 0, 0),
    },
    {
        id: 14,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    }
]

class HourEventComponent extends Component {

    constructor(...args) {
        super(...args)
    }

  componentWillMount() {
    // This method runs when the component is first added to the page
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    //const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;     
   }            

    Event({ event }) {
        return (
            <span>
                <strong>{event.title}</strong>
                {event.desc && ':  ' + event.desc}
            </span>
        )
    }

    EventAgenda({ event }) {
        return (
            <span>
                <em style={{ color: 'magenta' }}>{event.title}</em>
                <p>{event.desc}</p>
            </span>
        )
    }

    customDayPropGetter = date => {
        if (date.getDate() === 7 || date.getDate() === 15)
            return {
                className: 'special-day',
                style: {
                    border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
                },
            }
        else return {}
    }

    customSlotPropGetter = date => {
        if (date.getDate() === 7 || date.getDate() === 15)
            return {
                className: 'special-day',
            }
        else return {}
    }

    handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
            this.setState({
                events: [
                    events,
                    {
                        start,
                        end,
                        title,
                    },
                ],
            })
    }

    render() {                
        let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
        const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
                

        return (
            <section>
                <div className="row">
                    <BigCalendar className="rbc-calendar"
                        selectable
                        localizer={localizer}
                        events={events}
                        defaultView={BigCalendar.Views.AGENDA}
                        scrollToTime={new Date(1970, 1, 1, 6)}
                        views={allViews}
                        onSelectEvent={event => alert(event.title)}
                        onSelectSlot={this.handleSelect}
                        step={15}
                        max={dates.add(dates.endOf(new Date(2018, 17, 1), 'day'), -1, 'hours')}
                        defaultDate={new Date(2015, 3, 1)}                                                
                    />
                </div>                
          </section>
    );
  }
}


export default connect(
    state => state.employees,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(HourEventComponent);
