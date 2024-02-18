import './App.css';
import Job from './Components/Job';
import Planet from './Components/Planet';
function App() {
  return (
    <div className="App">
      <Job salary={90000} position='Senior SDE' company='Amazon' />
      <Job salary={12000} position='Junior SDE' company='Google' />
      <Job salary={10000} position='Project Manager' company='Netflix' />

      <Planet />

     
    
    </div>
  );
}

export default App;
