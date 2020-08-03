import React, { useEffect, useState, useRef } from 'react';
import PrivacyPage from './PrivacyPage.js';
import Homepage from './Homepage.js';
import FlowifyPage from './FlowifyPage.js';

import {
  HashRouter,
  Switch,
  Route,
  Link,

} from "react-router-dom";

export default function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const test = useRef(null);
  useEffect(()=>{
    window.addEventListener("resize", updateDimensions);

    return() =>{
      window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  function updateDimensions(){
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }
  return (
    <div>
      <HashRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage width={width} ref={test} />
        </Route>
        <Route path="/flowify">
          <FlowifyPage width={width} />
        </Route>
        <Route path="/privacy">
          <PrivacyPage />
        </Route>
      </Switch>
    </HashRouter>

    </div>
  );
}





