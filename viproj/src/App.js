import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Layout, Menu} from "antd";
import {Header} from "antd/es/layout/layout";

import ComparisonCard from './components/ComparisonCard';
import WorkshopComponent from './components/Graphs/WorkshopComponent';
import MapCard from './components/MapCard';

/**
 * Main entry point to the application. Uses a Router to define the navigation
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <div style={{
            float: 'left',
            width: '150px',
            margin: '0 24px 0 0',
            color: 'white',
            fontWeight: 'bold'
          }}>Happiness Index</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to='/' style={{color: 'inherit', textDecoration: 'inherit'}}>
                Map
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/comparison' style={{color: 'inherit', textDecoration: 'inherit'}}>
                Comparison
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/workshop' style={{color: 'inherit', textDecoration: 'inherit'}}>
                Workshop Sandbox
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Switch>
        <Route exact path='/' component={MapCard}/>
        <Route exact path='/comparison' component={ComparisonCard}/>
        <Route exact path='/workshop' component={WorkshopComponent}/>
      </Switch>
    </Router>
  );
};
export default App;
