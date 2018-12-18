import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import EmployeeComponent from './components/EmployeeComponent';
import CreateEventComponent from './components/CreateEventComponent';
import DayEventComponent from './components/DayEventComponent';
import HourEventComponent from './components/HourEventComponent';
import AdminEventsComponent from './components/AdminEventsComponent';


export default () => (
  <Layout>
        <Route exact path='/' component={EmployeeComponent} /> 
        <Route exact path='/createEvent' component={CreateEventComponent} /> 
        <Route exact path='/dayEvent' component={DayEventComponent} /> 
        <Route exact path='/hourEvent' component={HourEventComponent} /> 
        <Route exact path='/adminEvents' component={AdminEventsComponent} />
        
  </Layout>
);
