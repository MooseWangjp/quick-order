import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Home from './components/Home';
import Pcontent from './components/Pcontent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/pcontent/:id" component={Pcontent} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
