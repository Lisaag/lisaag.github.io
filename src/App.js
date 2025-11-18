import "./App.scss";
import Main from "./containers/Main";
import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    document.title = "Lisa's Portfolio";
  }, []);
}

function App() {
  Example()
  return (
    <div>
      
      <Main />
    </div>
  );
}

export default App;
