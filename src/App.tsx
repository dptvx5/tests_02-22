import React from 'react';

import './App.css';
import NameComponent from './NameComponent';

const App = () => (
  <div className="wrapper">
    <h1>React APP</h1>
    <NameComponent firstName="Petr" lastName="Ivanov" />
    <Counter title="апельсин" />
    <Counter title="ананас" />
  </div>
);

export default App;
