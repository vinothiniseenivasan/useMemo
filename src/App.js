// import logo from './logo.svg';
import './App.css';
import Demo from './Demo';



import CallParent from './CallParent';
import DemoRef from './DemoRef';
function App() {
  return (
    <div className=" mt-3 text-3xl">
        <Demo />
        <CallParent />
        <refComp />
       <DemoRef />
     
        
    </div>
  );
}

export default App;
