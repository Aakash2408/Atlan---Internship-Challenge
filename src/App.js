import React from 'react';

import StickyBar from './components/sticky-bar/sticky-bar.component';
import Nav from './components/navigation/navigation.component';
import Content from './components/content/content.component';
function App() {
  return (
    <div className="App">
      <StickyBar />
      <div className='middle'>
              <Nav />
             <Content />
      </div>
    </div>
  );
}

export default App;
