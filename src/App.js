import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './components/parent';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Index}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
