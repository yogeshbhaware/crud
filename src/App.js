import logo from './logo.svg';
import './App.css';
import Index from './Components/Post/Index';
import MemoP from './Practise/MemoHook/MemoP';
import RefHookP from './Practise/RefHook/RefHookP';


function App() {
  
  return (
    <div className="container">
    <h1>Ref Hook</h1>
      {/* <Index/> */}
      {/* <MemoP/> */}
      <RefHookP/>
    </div>
  );
}

export default App;
