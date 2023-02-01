import React from 'react';
import Case1 from './cases/case-1/case1'
import Case2 from './cases/case-2/case2'
import Case3 from './cases/case-3/case3'

import './App.css'

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Case1/>}/>
        <Route path='/case2' element={<Case2/>}/>
        <Route path='/case3' element={<Case3/>}/>
      </Routes>
    </div>
  );
}

export default App;
