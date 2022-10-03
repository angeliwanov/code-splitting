import React, {useState, Suspense} from 'react';
import './App.css';
import AsyncComponent from './components/AsyncComponent';
import Page1 from './components/Page1';
 
//page2 is imported with react.lazy() and suspense
//page3 is imported by creating a higher order async component

function App() {

  const [route, setRoute] = useState('page1');

  const onRouteChange = (value) => {
    setRoute(value)
  }

  switch (route) {
    case 'page1':
      return <Page1 onRouteChange={onRouteChange}/>
    case 'page2':
      const Page2 = React.lazy(() => import ('./components/Page2'));
      return (
      <Suspense fallback={<div>Loading...</div>}>
        <Page2 onRouteChange={onRouteChange}/>
      </Suspense>
      )
    case 'page3':
      const AsyncPage3 = AsyncComponent(()=>import('./components/Page3'))
      return <AsyncPage3 onRouteChange={onRouteChange}/>
  }
    
}

export default App;
