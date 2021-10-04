import React from 'react'

import './App.css'

import {getshipments} from './services/serviceObjects/shipments/serviceObjects'
import {request} from './services/request'
import Shipments from './containers/shipments'

function App() {
  return (
    <React.Fragment>
      <Shipments/>
    </React.Fragment>
  );
}

export default App;